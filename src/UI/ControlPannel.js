import { createElement } from './UI';

class ControlPannel{
    constructor(id) {
        this.root = document.getElementById(id);
        this.btnStart = this.createBtn('SORT');
        this.btnCreateArray = this.createBtn('NEW ARRAY');
        this.speedRange = this.createRange('speed', 2, 60);
        this.toggleAlgorithmSelectionMenu = this.createBtn('SELECT ALGORITHM');
    }

    createBtn(text) {
        const btn = createElement('button', {className:'header__btn', innerText: text});
        this.root.appendChild(btn)
        return btn;
    }

    createRange(text, min, max) {
        const label = createElement('label', {innerText: text, className:'range-field__label'});
        const input = createElement('input', {type:'range', className:'range-field__input', min: min, max: max});
        const range = createElement('div', {
            children: [label, input],
            className: 'range-field'
      })
      this.root.appendChild(range);
      return range;
    }

    connectSpeedRange(event) {
        this.speedRange.addEventListener('input', event);
    }

    connectStartEvent(event) {
        this.btnStart.addEventListener('click', event);
    }

    connectCreateNew(event) {
        this.btnCreateArray.addEventListener('click', event)
    }
    connectToggleAlgorithmMenuEvent(event) {
        this.toggleAlgorithmSelectionMenu.addEventListener('click', event)
    }
}

export default ControlPannel;