import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';

const elementPrefix = document?.currentScript?.attributes.getNamedItem?.('prefix')?.value ?? 'app';

@customElement(elementPrefix + '-button')
export class ButtonElement extends LitElement {
  @property({ type: Boolean })
  disabled: boolean = false;

  static styles = css`
    /* :host {
      display: flex;
      flex-direction: column;
    } */
    button {
      display: block;
      background: var(--sec-light);
      color: var(--prim-main);
      font-weight: 600;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.9);
      transition: all 200ms ease-in-out;
      text-decoration: none;
      border: none;
      font-size: var(--S6);
      cursor: pointer;
      width: 100%;
    }

    button:hover {
      background: var(--sec-main);
    }
    button:disabled {
      background: var(--prim-light);
    }
  `;

  render() {
    return html`
      <button .disabled=${this.disabled}>
        <slot>button</slot>
      </button>
    `;
  }
}
