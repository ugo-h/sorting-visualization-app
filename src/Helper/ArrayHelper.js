import VisualArray from '../Views/CanvasGraphics/VisualArray';


function generateArray(n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(Math.random() * 43 + 2)
    }
    return arr;
}

export default function generateVisualArray(size, width) {
    const seedArray = generateArray(size);
    width = width/size - 0.5;
    return new VisualArray(seedArray, width);
}