/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  quickSqrt(nums);
  return nums[nums.length - k];
};

const divide = (nums, s, e) => {
  const pivot = nums[e - 1];
  let i = s - 1;

  for (let j = s; j < e - 1; j++) {
    if (nums[j] <= pivot) {
      i++;
      swap(nums, i, j);
    }
  }
  i++;
  swap(nums, i, e - 1);
  return i;
};

const quickSqrt = (nums, s = 0, e) => {
  e = e || nums.length;
  if (s < e - 1) {
    const divide_index = divide(nums, s, e);
    quickSqrt(nums, s, divide_index);
    quickSqrt(nums, divide_index + 1, e);
  }
  return nums;
};

const swap = (arr, s, e) => {
  [arr[s], arr[e]] = [arr[e], arr[s]];
};

// 堆排序
const findKthLargest1 = (nums, k) => {
  buildMaxHeap(nums);

  for (let i = nums.length - 1; i >= nums.length - k; i--) {
    swap(nums, i, 0);
    heapify(nums, i, 0);
  }

  return nums[nums.length - k];
};

const buildMaxHeap = (arr) => {
  const len = arr.length;
  for (let i = len >> 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
};

const heapify = (arr, len, i) => {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let largeIndex = i;

  if (left < len && arr[left] > arr[largeIndex]) {
    largeIndex = left;
  }

  if (right < len && arr[right] > arr[largeIndex]) {
    largeIndex = right;
  }

  if (largeIndex !== i) {
    swap(arr, largeIndex, i);
    heapify(arr, len, largeIndex);
  }
};