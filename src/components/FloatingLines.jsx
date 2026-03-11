import { useEffect, useRef } from 'react'
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  Vector3,
  Vector2,
  Clock
} from 'three'

const vertexShader = `
precision highp float;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

float getGradientColor(float t, int channel) {
  if (lineGradientCount <= 1) {
    if (channel == 0) return lineGradient[0].r;
    if (channel == 1) return lineGradient[0].g;
    return lineGradient[0].b;
  }
  float segment = 1.0 / float(lineGradientCount - 1);
  int idx = int(t / segment);
  idx = clamp(idx, 0, lineGradientCount - 2);
  float localT = (t - float(idx) * segment) / segment;
  vec3 c1 = lineGradient[idx];
  vec3 c2 = lineGradient[idx + 1];
  vec3 blended = mix(c1, c2, localT);
  if (channel == 0) return blended.r;
  if (channel == 1) return blended.g;
  return blended.b;
}

float drawLines(vec2 uv, int count, float lineDistance, vec3 wavePos, float t) {
  float totalWidth = float(count - 1) * lineDistance;
  float startX = wavePos.x - totalWidth / 2.0;
  float result = 0.0;
  for (int i = 0; i < 32; i++) {
    if (i >= count) break;
    float x = startX + float(i) * lineDistance;
    float wave = sin((uv.x * 0.8 + x * 0.5) * 2.5 + t * animationSpeed) * wavePos.z;
    float lineY = wavePos.y + wave;
    float d = abs(uv.y - lineY);
    float thickness = 0.002;
    float line = smoothstep(thickness, 0.0, d);
    result = max(result, line);
  }
  return result;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  uv.x *= iResolution.x / iResolution.y;

  vec2 mouse = iMouse / iResolution.xy;
  mouse.x *= iResolution.x / iResolution.y;

  if (parallax) {
    uv += parallaxOffset * parallaxStrength;
  }

  float t = iTime;
  float totalLine = 0.0;

  if (enableTop) {
    totalLine = max(totalLine, drawLines(uv, topLineCount, topLineDistance, topWavePosition, t));
  }
  if (enableMiddle) {
    totalLine = max(totalLine, drawLines(uv, middleLineCount, middleLineDistance, middleWavePosition, t * 0.7));
  }
  if (enableBottom) {
    totalLine = max(totalLine, drawLines(uv, bottomLineCount, bottomLineDistance, bottomWavePosition, t * 1.3));
  }

  if (interactive) {
    float mdist = distance(uv, mouse);
    if (mdist < bendRadius) {
      float influence = (1.0 - mdist / bendRadius) * bendInfluence;
      totalLine *= (1.0 + influence * bendStrength);
    }
  }

  float xNorm = uv.x / (iResolution.x / iResolution.y);
  float r = getGradientColor(xNorm, 0);
  float g = getGradientColor(xNorm, 1);
  float b = getGradientColor(xNorm, 2);

  vec3 lineColor = vec3(r, g, b);
  vec3 bgColor = vec3(0.024, 0.024, 0.031);
  vec3 finalColor = mix(bgColor, lineColor, totalLine);

  gl_FragColor = vec4(finalColor, 1.0);
}
`

const DEFAULT_GRADIENT = [
  { r: 52/255,  g: 211/255, b: 153/255 },
  { r: 125/255, g: 211/255, b: 252/255 },
  { r: 167/255, g: 139/255, b: 250/255 },
  { r: 52/255,  g: 211/255, b: 153/255 },
]

const DEFAULT_WAVES = { top: true, middle: true, bottom: true }

const FloatingLines = ({
  linesGradient = DEFAULT_GRADIENT,
  enabledWaves = DEFAULT_WAVES,
  animationSpeed = 0.4,
  interactive = true,
  parallax = true,
  style = {},
  className = '',
}) => {
  const mountRef = useRef(null)
  const parallaxRef = useRef(new Vector2(0, 0))
  const targetParallaxRef = useRef(new Vector2(0, 0))

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const scene = new Scene()
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const renderer = new WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(el.clientWidth, el.clientHeight)
    el.appendChild(renderer.domElement)

    const gradientColors = linesGradient.map(c => new Vector3(c.r, c.g, c.b))
    while (gradientColors.length < 8) gradientColors.push(new Vector3(0, 0, 0))

    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        iTime:              { value: 0 },
        iResolution:        { value: new Vector3(el.clientWidth, el.clientHeight, 1) },
        animationSpeed:     { value: animationSpeed },
        enableTop:          { value: enabledWaves.top !== false },
        enableMiddle:       { value: enabledWaves.middle !== false },
        enableBottom:       { value: enabledWaves.bottom !== false },
        topLineCount:       { value: 6 },
        middleLineCount:    { value: 5 },
        bottomLineCount:    { value: 6 },
        topLineDistance:    { value: 0.12 },
        middleLineDistance: { value: 0.15 },
        bottomLineDistance: { value: 0.12 },
        topWavePosition:    { value: new Vector3(0, 0.65, 0.08) },
        middleWavePosition: { value: new Vector3(0, 0.3, 0.12) },
        bottomWavePosition: { value: new Vector3(0, -0.05, 0.08) },
        iMouse:             { value: new Vector2(0, 0) },
        interactive:        { value: interactive },
        bendRadius:         { value: 0.3 },
        bendStrength:       { value: 0.5 },
        bendInfluence:      { value: 0.3 },
        parallax:           { value: parallax },
        parallaxStrength:   { value: 0.02 },
        parallaxOffset:     { value: new Vector2(0, 0) },
        lineGradient:       { value: gradientColors },
        lineGradientCount:  { value: linesGradient.length },
      },
    })

    const geometry = new PlaneGeometry(2, 2)
    const mesh = new Mesh(geometry, material)
    scene.add(mesh)

    const clock = new Clock()
    let animId

    const animate = () => {
      animId = requestAnimationFrame(animate)
      material.uniforms.iTime.value = clock.getElapsedTime()
      if (parallax) {
        parallaxRef.current.lerp(targetParallaxRef.current, 0.05)
        material.uniforms.parallaxOffset.value.copy(parallaxRef.current)
      }
      renderer.render(scene, camera)
    }
    animate()

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      material.uniforms.iMouse.value.set(
        e.clientX - rect.left,
        el.clientHeight - (e.clientY - rect.top)
      )
      if (parallax) {
        targetParallaxRef.current.set(
          (e.clientX / window.innerWidth - 0.5) * 2,
          -(e.clientY / window.innerHeight - 0.5) * 2
        )
      }
    }

    const onResize = () => {
      renderer.setSize(el.clientWidth, el.clientHeight)
      material.uniforms.iResolution.value.set(el.clientWidth, el.clientHeight, 1)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        ...style,
      }}
    />
  )
}

export default FloatingLines
