import { visualSwap, sortByHeight, swap } from '../algorithmHelper';

export function* bubbleSort(arr) {
    let counter = 0;
    for(let j = 0; j < arr.length-1; j++)  {
        for(let i = 0; i < arr.length-j-1; i++) {
            if(arr[arr.length-j]){
                 arr[arr.length-j].color = '#99b6d8';
                 arr[arr.length-j-1].color = '#ffdfba';
            }
            let swaped = false;
            counter++;
            if(counter> 1000) throw new Error('Overflow')
            if(sortByHeight(arr, i, i+1))  {
                yield {firstIndex: i, secondIndex: i+1, isSwaped: false};
                yield {firstIndex: i, secondIndex: i+1, isSwaped: true};
                visualSwap(arr[i], arr[i+1]);
                swap(arr, i, i+1);
                swaped = true; 
            }
            yield {firstIndex: i, secondIndex: i+1, isSwaped: swaped};
        }
    } 
}

