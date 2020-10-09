export function visualSwap(first, second) {
    const temp = first.x;
    first.x = second.x;
    second.x = temp;
}

export function sortByHeight(arr, i, j) {
    return arr[i].height < arr[j].height;
}

export function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;      
}