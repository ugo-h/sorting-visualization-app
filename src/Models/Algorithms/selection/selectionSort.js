import { visualSwap, sortByHeight, swap } from '../algorithmHelper';

export default function* selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i-1]){
                arr[i-1].color = '#99b6d8';
           }
            let swaped = false;
            if(sortByHeight(arr, i, j)) {
                yield {firstIndex: j, secondIndex: i, isSwaped: false};
                yield {firstIndex: j, secondIndex: i, isSwaped: true};
                visualSwap(arr[i], arr[j])
                swap(arr, i, j);
                swaped = true;
            }
            yield {firstIndex: j, secondIndex: i, isSwaped: swaped};
        }
    }
}




