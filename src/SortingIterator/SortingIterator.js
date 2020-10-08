import generateVisualArray from '../Helper/ArrayHelper';
import algorithms from '../Algorithms/algorithms';

const GREEN = '#A4CF8A';
const RED = '#ffb3ba';


export default class SortingIterator {
    constructor(fps, width) {
        this.generateNewArray = this.generateNewArray.bind(this);
        this.startSortingHandler = this.startSortingHandler.bind(this);
        
        this.screenWidth = width;
        this.fps = fps;

        this.currentAlgorithm = 'insertion';

        this.array = null;
        this.generateNewArray();
    };

    changeCurrentAlgorithm(value) {
        if(!algorithms[value]) throw new Error('Algorithm with this name is not supported.')
        console.log(value)
        this.currentAlgorithm = value;

    }

    startSortingHandler(ev) {
        ev.currentTarget.innerText = this.isSorting? 'SORT': 'STOP';
        this.isSorting = !this.isSorting
        const algorithm = algorithms[this.currentAlgorithm];
        if(!this.iterator) this.iterator = algorithm(this.array.visual);
    };

    generateNewArray() {
        this.isSorting = false;
        this.iterator = null;
        this.array = generateVisualArray(20, this.screenWidth);
    };

    handleSorting() {
        const { value, done } = this.iterator.next()
        const firstIndex = value? value.firstIndex: null;
        const secondIndex = value? value.secondIndex: null;
        const swaped = value? value.isSwaped: null;
        
        let color = swaped? RED: GREEN;
        this.changeColorOfCurrentItems(firstIndex, secondIndex, color);
        this.isSorting = !done;
        if(done) this.iterator = null;
    };
    
  

    changeColorOfCurrentItems(firtsIndex, secondIndex, color) {
        this.changeColorInArray(secondIndex, color);
        this.changeColorInArray(firtsIndex, color);
        this.changeColorInArray(firtsIndex - 1);
    }

    changeColorInArray(index, color='default') {
        if(this.array.visual[index]){
            const defautColor = this.array.visual[index].dColor;
            color = color === 'default'? defautColor: color;
            this.array.visual[index].color = color;
        }
    }

}