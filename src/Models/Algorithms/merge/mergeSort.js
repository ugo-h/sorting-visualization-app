import { sortByHeight, swap } from '../algorithmHelper';

export default function* mergeSort(arr) {
    yield* _mergeSort(arr, 0, arr.length - 1)
    console.log(arr)
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
    let j = m+1;
    let k = 0;
    const hash = {};
    while(i <= m && j <= e) {
        if(sortByHeight(arr, i, j)) {
            yield {firstIndex: i, secondIndex: i, isSwaped: false};
            if(arr[i-1]) arr[i-1].color = arr[i-1].dColor;
            arr[j].color = arr[j].dColor;
            visualLift(arr[i], k);
            result[k] = arr[i];
            hash[k] = i;
            i++;
            k++;
        } else {
            yield {firstIndex: j, secondIndex: j, isSwaped: false};
            if(arr[j-1]) arr[j-1].color = arr[j-1].dColor;
            arr[i].color = arr[i].dColor;
            visualLift(arr[j], k);
            result[k] = arr[j];
            hash[k] = j;
            j++;
            k++;
        }
    }
    while(i <= m) {
        yield {firstIndex: i, secondIndex: i, isSwaped: false};
        if(arr[i-1]) arr[i-1].color = arr[i-1].dColor;
        visualLift(arr[i], k);
        result[k] = arr[i];
        hash[k] = i;
        i++;
        k++;
    }
    while(j <= e) {
        yield {firstIndex: j, secondIndex: j, isSwaped: false};
        if(arr[j-1]) arr[j-1].color = arr[j-1].dColor;
        visualLift(arr[j], k);
        result[k] = arr[j];
        hash[k] = j;
        j++;
        k++;
    }
    let y = 0;
    for(let x = s; x < e+1; x++) {
        yield {firstIndex: x, secondIndex: x, isSwaped: false};
        if(arr[x-1]) arr[x-1].color = arr[x-1].dColor;
        arr[x] = result[y];
        visualSwap(arr[x], x)
        y++;
    }
}

function visualLift(item, index) {
    const width = item.getFullWidth();
    item.y+=250-item.height;
    item.x = index * width + width/2+2;
}

function visualSwap(item, index) {
    const width = item.getFullWidth();
    item.y=0;
    item.x = index * width + width/2+2;
}