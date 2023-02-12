const shellSort = (arr) => {
  let temp,
    len = arr.length,
    gap = 1

  while (gap < len / 3) {
    gap = 3 * gap + 1
  }

  for (; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      let j = i - gap

      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }

  return arr
}

const origin = [3,29,15,2,13,27,20,19,30]
console.log(shellSort(origin))