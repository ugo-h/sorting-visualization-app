import Rect from './Rect';

class VisualArray {
    constructor(array, width) {
        this.array = array;
        this.length = array.length;
        this.currentIndex = 0;
        this.visual = this.createVisual(width);
    };

    createVisual(width) {
        return this.array.map((size, index) => {
            const rectWidth = (index) * width + width/2+2;
            size*=5
            return new Rect(rectWidth, size/2, width-2, -size);
        });
    };

    render(ctx) {
        if(!this.visual) return;
        this.visual.forEach(item => item.draw(ctx));
    };

};

export default VisualArray;