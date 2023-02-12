const selectionSort = (arr) => {
  const len = arr.length
  let minIndex, temp

  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

const origin = [3,29,15,2,13,27,20,19,30]
console.log(selectionSort(origin))