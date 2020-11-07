import algorithms from '../../Models/Algorithms/algorithms';
import changeColorOfItems from '../../Views/CanvasGraphics/changeColorInVisualArray';

const GREEN = '#A4CF8A';
const RED = '#ffb3ba';

export function createAlgorithmIterator(name, array) {
    if(!algorithms[name]) throw new Error('Algorithm with this name is not supported. See Algorithms.js');
    const algorithm = algorithms[name];
    return algorithm(array);
};

export function renderAlgorithmStep(iterator, array) {
    const { value, done } = iterator.next();
    const { firstIndex, secondIndex, color } = getIterationData(value);
    changeColorOfItems(array, firstIndex, secondIndex, color);
    return done;
};

function getIterationData(value) {
    const firstIndex = value? value.firstIndex: null;
    const secondIndex = value? value.secondIndex: null;
    const swaped = value? value.isSwaped: null;
    const color = swaped? RED: GREEN;
    return { firstIndex, secondIndex, color };
};


