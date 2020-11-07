import generateVisualArray from '../../Helper/ArrayHelper';
import { createAlgorithmIterator, renderAlgorithmStep } from './Algorithm'

export default class AlgorithmIteratorInterface {
    constructor(fps, width) {
        this.screenWidth = width;
        this.fps = fps;

        this.currentAlgorithmName = 'merge';
        
        this.iterator = null;
        this.array = null;

        this.generateNewArray();        
    };

    changeCurrentAlgorithm(value) {
        this.currentAlgorithmName = value;
        this.iterator = createAlgorithmIterator(value, this.array.visual);
    };

    startHandler(ev) {
        ev.currentTarget.innerText = this.isSorting? 'SORT': 'STOP';
        this.isSorting = !this.isSorting;
        if(!this.iterator) this.iterator = createAlgorithmIterator(this.currentAlgorithmName, this.array.visual);
    };
    
    generateNewArray() {
        this.isSorting = false;
        this.iterator = null;
        this.array = generateVisualArray(20, this.screenWidth);
    };

    renderIteration() {
        if(!this.isSorting || !this.iterator) return;
        const done = renderAlgorithmStep(this.iterator, this.array.visual);
        this.isSorting = !done;
        if(done) {
            this.iterator = null;
            document.getElementById('start-btn').innerText = 'SORT';
        }
    };
};