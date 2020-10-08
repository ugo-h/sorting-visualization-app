const GREEN = '#A4CF8A';
const RED = '#ffb3ba';


export default class AlgorithmGenerator {
    constructor(name, array) {
        const algorithm = algorithms[name];
        this.generator = algorithm(array);
        this.array = array;
    }

    renderNextStep() {
        const { value, done } = this.generator.next();
        const firstIndex = value? value.firstIndex: null;
        const secondIndex = value? value.secondIndex: null;
        const swaped = value? value.isSwaped: null;
        
        let color = swaped? RED: GREEN;

        this.changeColorOfCurrentItems(firstIndex, secondIndex, color);
        return done;
    }
    changeColorOfCurrentItems(firtsIndex, secondIndex, color) {
        this.changeColorInArray(secondIndex, color);
        this.changeColorInArray(firtsIndex, color);
        this.changeColorInArray(firtsIndex - 1);
    }
    changeColorInArray(index, color='default') {
        if(this.array[index]){
            const defautColor = this.array[index].dColor;
            color = color === 'default'? defautColor: color;
            this.array[index].color = color;
        }
    }
}