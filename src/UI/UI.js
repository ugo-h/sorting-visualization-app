export function createElement(type, props) {
    const {children} = props;
    const element = document.createElement(type.toUpperCase());
    if(children) {
        children.forEach(child => {
            element.appendChild(child);
        });
    }
    for(const prop in props) {
        if(prop === 'children' || prop === 'innerHtml') continue;
        element[prop] = props[prop];
    }
    return element;
}

export function connectClickEvent(target, handler) {
    target.addEventListener('click', handler)
}
export function connectInputEvent(target, handler) {
    target.addEventListener('input', handler);
}