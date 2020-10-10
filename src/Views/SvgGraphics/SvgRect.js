class SvgRect extends Point2d{
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    setX(value){
        this.x = value;

    }
    setCoordinates(x, y) {
        x? this.x = x : null;
        y? this.y = y: null;
        this.element.setAttribute('transform',`translate(${this.x}, ${this.y})`);
    }
    setColor(color) {
        color? this.color = color: null;
        this.element.setAttribute('style', `fill: ${this.color}`)
    }
    renderToHTML(root) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        svg.dataset.size = this.height;
        svg.innerHTML = `<rect height="${this.height*5}" width="${this.width}" style="fill: ${this.color}"></rect>`
        this.setCoordinates();
        this.element = svg;
        root.append(svg);
    }
}

