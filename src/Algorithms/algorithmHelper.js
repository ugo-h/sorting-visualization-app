export function visualSwap(first, second) {
    const temp = first.x;
    first.x = second.x;
    second.x = temp;
}

export function sortByDataSize(arr, i, j) {
    return arr[i].height < arr[j].height;
}
