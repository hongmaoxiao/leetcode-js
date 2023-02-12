const quickSort = (arr, left, right) => {
  let len = arr.length,
  partitionIndex

  left = typeof left !== 'number' ? 0 : left
  right = typeof right !== 'number' ? len - 1 : right

  if (left < right) {
    console.log('arr: ', arr)
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  return arr
}

const partition = (arr, left, right) => {
  let pivot = left
  let index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }    
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


const origin = [3,29,15,2,13,27,20,19,30]
console.log(quickSort(origin))