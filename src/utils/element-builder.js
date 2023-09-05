import { ButtonElement, InputElement, CheckboxElement } from '../elements';

export class ElementBuilder {
  constructor(page, { frameSelectors = [] } = {}) {
    this._page = page;
    this._frameSelectors = frameSelectors;
  }

  button(signature, { qaId, selector } = {}) {
    return new ButtonElement(signature, this._page, {
      qaId,
      selector,
      frameSelectors: this._frameSelectors,
    });
  }

  input(signature, { qaId, selector } = {}) {
    return new InputElement(signature, this._page, {
      qaId,
      selector,
      frameSelectors: this._frameSelectors,
    });
  }

  checkbox(signature, { qaId, selector } = {}) {
    return new CheckboxElement(signature, this._page, {
      qaId,
      selector,
      frameSelectors: this._frameSelectors,
    });
  }
}
