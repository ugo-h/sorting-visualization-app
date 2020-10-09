import { createElement } from './UI';

class SideBar {
    constructor(id, algorithms) {
        this.root = document.getElementById(id);
        this.backdrop = document.getElementById('backdrop');
        this.backdrop.addEventListener('click', this.toggle.bind(this))
        const title = createElement('h2', {innerText: 'Select algorithm', className: 'sidebar__title'});
        this.root.appendChild(title);
        this.listOfAlgorithms = this.createList(algorithms)
    }
    createList(contents) {
        const ul = createElement('ul', {
            className: 'sorting-list',
            children: contents.map(el => createElement('li', {name: el, innerText: el, className: 'sorting-list__el'}))
        })
        this.root.appendChild(ul)
        return ul;
    }

    connectEvents(event) {
        this.listOfAlgorithms.addEventListener('click', (ev) => {
            if(!ev.target.classList.contains('sorting-list__el')) return;
            event(ev.target.name);
            this.toggle();
        })
    }

    toggle() {
        this.root.classList.toggle('invisible');
        this.backdrop.classList.toggle('invisible');
    }
}

export default SideBar;