/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import lng from '@lightningjs/core';

export default class FadeShader extends lng.shaders.WebGLDefaultShader {
  constructor(context) {
    super(context);
    this._margin = { left: 0, right: 0 };
  }

  set positionLeft(v) {
    this._positionLeft = v;
  }

  set positionRight(v) {
    this._positionRight = v;
  }

  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;

    if (this._positionLeft === 0) {
      this._positionLeft = 0.001;
    }
    if (this._positionRight === 0) {
      this._positionRight = 0.001;
    }

    const renderPrecision = this.ctx.stage.getRenderPrecision();
    this._setUniform(
      'margin',
      [
        this._positionLeft * renderPrecision,
        this._positionRight * renderPrecision
      ],
      this.gl.uniform1fv
    );
    this._setUniform(
      'resolution',
      new Float32Array([
        owner._w * renderPrecision,
        owner._h * renderPrecision
      ]),
      this.gl.uniform2fv
    );
  }
}

FadeShader.fragmentShaderSource = `
  #ifdef GL_ES
  precision lowp float;
  #endif

  #define PI 3.14159265359

  varying vec2 vTextureCoord;
  varying vec4 vColor;

  uniform sampler2D uSampler;
  uniform vec2 resolution;
  uniform float margin[2];

  void main() {
      vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
      vec2 halfRes = 0.5 * resolution.xy;
      vec2 point = vTextureCoord.xy * resolution;


      vec2 pos1 = vec2(point.x, point.y);
      vec2 pos2 = pos1;
      pos2.x += margin[0];

      vec2 d = pos2 - pos1;
      float t = dot(pos1, d) / dot(d, d);
      t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));

      vec2 pos3 = vec2(vTextureCoord.x * resolution.x, vTextureCoord.y);
      pos3.x -= resolution.x - margin[1];
      vec2 pos4 = vec2(vTextureCoord.x + margin[1], vTextureCoord.y);

      vec2 d2 = pos4 - pos3;
      float t2 = dot(pos3, d2) / dot(d2, d2);
      t2 = smoothstep(0.0, 1.0, clamp(t2, 0.0, 1.0));

      color = mix(vec4(0.0), color, t);
      color = mix(color, vec4(0.0), t2);

      gl_FragColor = color;
  }
`;
