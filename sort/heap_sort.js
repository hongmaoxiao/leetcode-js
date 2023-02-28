const heap_sort = (arr) => {
  buildMaxHeap(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0)
    heapify(arr, i, 0)
  }

  return arr
}

const buildMaxHeap = (arr) => {
  const len = arr.length
  for (let i = len >> 1; i >= 0; i--) {
    heapify(arr, len, i)
  }
}

const heapify = (arr, len, i) => {
  const left = i * 2 + 1
  const right = i * 2 + 2
  let largeIndex = i

  if (left < len && arr[left] > arr[largeIndex]) {
    largeIndex = left
  }

  if (right < len && arr[right] > arr[largeIndex]) {
    largeIndex = right
  }

  if (largeIndex !== i) {
    swap(arr, largeIndex, i)
    heapify(arr, len, largeIndex)
  }
}

const swap = (arr, s, e) => {
  [arr[s], arr[e]] = [arr[e], arr[s]]
}

const origin = [3,29,15,2,13,27,20,19,30]
console.log(heap_sort(origin))