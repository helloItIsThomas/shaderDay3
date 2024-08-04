#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform float u_debug;
uniform float u_brightness;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    // gl_FragColor = vec4(0.0, smoothstep(0.5, 0.6, uv.x - uv.y), 0.0, 1.0);
    gl_FragColor = vec4(0.0, smoothstep(0.2, 0.3, uv.x - uv.y), 0.0, 1.0);
} 