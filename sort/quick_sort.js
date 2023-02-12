const quickSort = (arr, left, right) => {
  let len = arr.length,
    partitionIndex;

  left = typeof left !== "number" ? 0 : left;
  right = typeof right !== "number" ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
};

const partition = (arr, left, right) => {
  let pivot = left;
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// const origin = [3, 29, 15, 2, 13, 27, 20, 19, 30];
const origin = [15,12,3,2,7];
console.log(quickSort(origin, 0, origin.length));

const divide = (arr, s, e) => {
  const pivot = arr[e - 1]
  let i = s - 1
  for (let j = s; j < e - 1; j++) {
    if (arr[j] <= pivot) {
      i++
      swap(arr, i, j)
    }
  }
  swap(arr, e - 1, i + 1)
  return i + 1
}

const qsort = (arr, s = 0, e) => {
  e = e || arr.length
  if (s < e - 1) {
    const divide_index = divide(arr, s, e)
    qsort(arr, s, divide_index)
    qsort(arr, divide_index + 1, e)
  }

  return arr
}

console.log(qsort(origin));