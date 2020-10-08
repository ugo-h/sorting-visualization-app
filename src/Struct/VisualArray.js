import Rect from '../Graphics/Rect';

class VisualArray {
    constructor(array, width) {
        this.array = array;
        this.length = array.length;
        this.currentIndex = 0;
        this.visual = this.createVisual(width);
    }

    createVisual(width) {
        return this.array.map((size, index) => new Rect((index) * width + width/2+2, 0, width-2, -size*10))
    }    

    render(ctx) {
        if(!this.visual) return
        this.visual.forEach(item => item.draw(ctx))
    }

}

export default VisualArray;