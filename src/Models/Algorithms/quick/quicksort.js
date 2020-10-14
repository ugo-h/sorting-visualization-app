import { visualSwap, sortByHeight } from '../algorithmHelper';

export default function* quickSort(arr) {
    yield* _quickSort(arr, 0, arr.length-1)
}


function* _quickSort(arr, s, e) {
    if(s >= e) return;
    let pivot = e;
    let i = s;
    let j = s - 1;
    arr[pivot].setColor('blue');
    while(i < e) {
        if(arr[i-1]) arr[i-1].setColorToDefault();
        if(arr[j-1]) arr[j-1].setColorToDefault();
        yield {firstIndex: i, secondIndex: j, isSwaped: false};
        if(sortByHeight(arr, i, pivot)) {
            if(arr[j]) arr[j].setColorToDefault();
            j++;
            yield {firstIndex: i, secondIndex: j, isSwaped: false};
            yield {firstIndex: i, secondIndex: j, isSwaped: true};
            visualSwap(arr[i], arr[j])
            swap(arr, i, j);
        };
        i++;
    };
    yield {firstIndex: pivot, secondIndex: j+1, isSwaped: false};
    yield {firstIndex: pivot, secondIndex: j+1, isSwaped: true};
    visualSwap(arr[pivot], arr[j+1])
    swap(arr, pivot, j+1);
    arr[pivot].setColorToDefault();
    yield* _quickSort(arr, s, j);
    yield* _quickSort(arr, j+1, e);
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}