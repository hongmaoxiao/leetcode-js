const bubbleSort = (arr) => {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  return arr
}

const origin = [3,29,15,2,13,27,20,19,30]
console.log(bubbleSort(origin))