/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class ClubInfoView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Informacion del club</h1>
        <p>En este club hacemos cosas</p>
        <p>
          Esta es una lista de cosas que hacemos en este club:
            <p>La cerámica de Talavera no es cosa menor, dicho de otra manera, es cosa mayor</p>
            <p>La segunda ya tal</p>
            <p>Fin de la cita</p>
        </p>
      </div>
    `;
  }
}

window.customElements.define('club-info-viwu', ClubInfoView);
