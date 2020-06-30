function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    // console.log('middle', middle)
    array = quickSort(array, start, middle);

    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            console.log(array)
            
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};


// const arr = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]

// console.log(quickSort(arr))

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(let i of arr) {
    const rand1 = Math.floor(Math.random() * (14 - 0)) + 0;
    const rand2 = Math.floor(Math.random() * (14 - 0)) + 0;
    swap(arr, rand1, rand2)
}
console.log(arr)