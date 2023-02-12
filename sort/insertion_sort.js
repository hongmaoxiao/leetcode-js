const insertionSort = (arr) => {
  const len = arr.length
  let prev, curr

  for (let i = 1; i < len; i++) {
    prev = i - 1
    curr = arr[i]

    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev]
      prev--
    }
    arr[prev + 1] = curr
  }

  return arr
}

const origin = [3,29,15,2,13,27,20,19,30]
console.log(insertionSort(origin))