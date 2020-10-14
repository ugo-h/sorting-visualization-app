import { bubbleSort }  from './bubble/bubbleSort';
import selectionSort from './selection/selectionSort';
import insertionSort from './insertion/insertionSort';
import mergeSort from './merge/mergeSort';
import quicksort from './quick/quicksort';

export default {    
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort,
    merge: mergeSort,
    quick: quicksort
}