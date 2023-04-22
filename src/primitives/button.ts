import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';

const elementPrefix = document?.currentScript?.attributes.getNamedItem?.('prefix')?.value ?? 'app';

@customElement(elementPrefix + '-button')
export class ButtonElement extends LitElement {
  @property({ type: Boolean })
  disabled?: boolean = false;
  /* padding: var(--S5) var(--S6); */

  @property({ type: String })
  size?: 'sm' | 'md';

  @property({ type: String })
  variant?: 'primary' | 'secondary' | 'ghost';

  static styles = css`
    button {
      display: flex;
      color: var(--prim-main);
      font-weight: 600;
      border-radius: var(--S2);
      box-shadow: rgba(0, 0, 0, 0.9);
      transition: all 200ms ease-in-out;
      text-decoration: none;
      border: none;
      cursor: pointer;
      user-select: none;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      background: var(--sec-main);
    }
    button:disabled {
      background: var(--prim-light);
    }

    .sm {
      gap: var(--S1);
      padding-left: var(--S2);
      padding-right: var(--S2);
      height: var(--S8);
    }
    .md {
      gap: var(--S4);
      font-size: var(--S6);
      padding-left: var(--S6);
      padding-right: var(--S6);
      height: var(--S13);
    }
    .primary {
      background: var(--sec-light);
    }

    .secondary {
      background: var(--prim-main);
    }

    .ghost {
      background: transparent;
    }
  `;

  render() {
    const classes = [this.variant || 'primary', this.size || 'md'].join(' ');

    return html`
      <button class=${classes} .disabled=${!!this.disabled}>
        <slot>button</slot>
      </button>
    `;
  }
}
