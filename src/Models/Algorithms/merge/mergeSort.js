import { sortByHeight } from '../algorithmHelper';

export default function* mergeSort(arr) {
    yield* _mergeSort(arr, 0, arr.length - 1)
}

function* _mergeSort(arr, start, end) {
    if(start >= end) return;
    const mid  = Math.floor((start + end) / 2);
    yield* _mergeSort(arr, start, mid);
    yield* _mergeSort(arr, mid+1, end);
    yield* merge(arr, start, mid, end);
}

function* merge(arr, s, m, e) {
    const result = [];
    let i = s;
    let j = m + 1;
    let k = 0;
    while(i <= m && j <= e) {
        yield {firstIndex: i, secondIndex: j, isSwaped: false};
        if(sortByHeight(arr, i, j)) {
            if(arr[i-1]) arr[i-1].setColorToDefault();
            arr[j].setColorToDefault();
            yield {firstIndex: j, secondIndex: i, isSwaped: true};
            visualLift(arr[i], k);
            yield {firstIndex: j, secondIndex: i, isSwaped: false};
            result[k] = arr[i];
            i++;
            k++;
        } else {
            if(arr[j-1]) arr[j-1].setColorToDefault();
            arr[i].setColorToDefault();
            yield {firstIndex: i, secondIndex: j, isSwaped: true};
            visualLift(arr[j], k);
            yield {firstIndex: i, secondIndex: j, isSwaped: false};
            result[k] = arr[j];
            j++;
            k++;
        }
    }
    while(i <= m) {
        if(arr[i-1]) arr[i-1].setColorToDefault();
        yield {firstIndex: i, secondIndex: i, isSwaped: true};
        visualLift(arr[i], k);
        yield {firstIndex: i, secondIndex: i, isSwaped: false};
        result[k] = arr[i];
        i++;
        k++;
    }
    while(j <= e) {
        if(arr[j-1]) arr[j-1].setColorToDefault();
        yield {firstIndex: j, secondIndex: j, isSwaped: true};
        visualLift(arr[j], k);
        yield {firstIndex: j, secondIndex: j, isSwaped: false};
        result[k] = arr[j];
        j++;
        k++;
    }
    for(let x = s; x < e+1; x++) {
        arr[x] = result[x-s];
    }
    for(let x = s; x < e+1; x++) {
        
        if(arr[x-1]) arr[x-1].setColorToDefault();
        visualReturnToOrigin(arr[x], x)
        yield {firstIndex: x, secondIndex: x, isSwaped: false};
    }
}

function visualLift(item, index) {
    const width = item.getFullWidth();
    item.y = 300 + Math.abs(item.height)
    item.x = index * width + width/2+2;
}

function visualReturnToOrigin(item, index) {
    const width = item.getFullWidth();
    item.y = -item.height/2;
    item.x = index * width + width/2+2;
}
