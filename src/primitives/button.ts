import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators';
import { getPrefixes } from './prefixes';

const { elementPrefix, stylePrefix } = getPrefixes();

@customElement(elementPrefix + 'button')
export class ButtonElement extends LitElement {
  @property({ type: Boolean })
  disabled?: boolean = false;
  /* padding: var(--${unsafeCSS(stylePrefix)}S5) var(--${unsafeCSS(stylePrefix)}S6); */

  @property({ type: String })
  size?: 'sm' | 'md';

  @property({ type: String })
  variant?: 'primary' | 'secondary' | 'ghost';

  static styles = css`
    button {
      display: flex;
      color: var(--${unsafeCSS(stylePrefix)}prim-main);
      font-weight: 600;
      border-radius: var(--${unsafeCSS(stylePrefix)}S2);
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
      background: var(--${unsafeCSS(stylePrefix)}sec-main);
    }
    button:disabled {
      background: var(--${unsafeCSS(stylePrefix)}prim-light);
    }

    .sm {
      gap: var(--${unsafeCSS(stylePrefix)}S1);
      padding-left: var(--${unsafeCSS(stylePrefix)}S2);
      padding-right: var(--${unsafeCSS(stylePrefix)}S2);
      height: var(--${unsafeCSS(stylePrefix)}S8);
    }
    .md {
      gap: var(--${unsafeCSS(stylePrefix)}S4);
      font-size: var(--${unsafeCSS(stylePrefix)}S6);
      padding-left: var(--${unsafeCSS(stylePrefix)}S6);
      padding-right: var(--${unsafeCSS(stylePrefix)}S6);
      height: var(--${unsafeCSS(stylePrefix)}S13);
    }
    .primary {
      background: var(--${unsafeCSS(stylePrefix)}sec-light);
    }

    .secondary {
      background: var(--${unsafeCSS(stylePrefix)}prim-main);
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

// declare global {
//   interface HTMLElementTagNameMap {
//     [elementPrefix + '-button']: ButtonElement
//   }
// }
