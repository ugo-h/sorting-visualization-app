import generateVisualArray from '../../Helper/ArrayHelper';
import algorithms from '../../Models/Algorithms/algorithms';
import AlgorithmIterator from './Algorithm'

export default class AlgorithmIteratorInterface {
    constructor(fps, width) {
        this.generateNewArray = this.generateNewArray.bind(this);
        this.startSortingHandler = this.start.bind(this);
        
        this.screenWidth = width;
        this.fps = fps;

        this.currentAlgorithmName = 'selection';
        
        this.iterator = null;
        this.array = null;
        this.generateNewArray();
        console.log(this.array)
        
    };

    changeCurrentAlgorithm(value) {
        if(!algorithms[value]) throw new Error('Algorithm with this name is not supported.');
        console.log(value);
        this.currentAlgorithm = value;
        this.iterator = new AlgorithmIterator(value, this.array.visual);
    }

    start(ev) {
        ev.currentTarget.innerText = this.isSorting? 'SORT': 'STOP';
        this.isSorting = !this.isSorting;
        if(!this.iterator) this.iterator = new AlgorithmIterator(this.currentAlgorithmName, this.array.visual);
        console.log(this.iterator)
    };
    
    generateNewArray() {
        this.isSorting = false;
        this.iterator = null;
        this.array = generateVisualArray(20, this.screenWidth);
    };

    renderIteration() {
        if(!this.isSorting || !this.iterator) return;
        const done = this.iterator.renderNextStep(this.array.visual);
        this.isSorting = !done;
        if(done) this.iterator = null;
    };
}