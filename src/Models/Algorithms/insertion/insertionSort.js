import { visualSwap, sortByHeight, swap } from '../algorithmHelper';

export default function* insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[i-1]){
                // arr[j-1].color = '#99b6d8';
                arr[i-1].color = arr[i-1].dColor;
           }
           if(arr[i-2]){
                arr[i-2].color = arr[i-2].dColor;
       }
            let swaped = false;
            if(sortByHeight(arr, j, i)) {
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