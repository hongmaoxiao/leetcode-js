/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let ls = 0, rs = 0
  if (n === 0) {
    return
  }
  if (m === 0) {
    while (rs < n) {
      nums1[ls] = nums2[rs]
      rs++
      ls++
    }
    return
  }

  while (ls < m) {
    if (nums1[ls] <= nums2[rs]) {
      ls++
    } else {
      [nums1[ls], nums2[rs]] = [nums2[rs], nums1[ls]]
      let j = rs
      while (j < n - 1) {
        if (nums2[j] > nums2[j + 1]) {
          [nums2[j], nums2[j + 1]] = [nums2[j + 1], nums2[j]]
          j++
        } else {
          break
        }
      }
    }
  }

  while (rs < n) {
    nums1[ls] = nums2[rs]
    rs++
    ls++
  }
};

const merge1 = (nums1, m, nums2, n) => {
  const res = new Array(m + n).fill(0)
  let l1 = 0, l2 = 0
  let curr = null
  while (l1 < m || l2 < n) {
    if (l1 === m) {
      curr = nums2[l2++]
    } else if (l2 === n) {
      curr = nums1[l1++]
    } else if (nums1[l1] <= nums2[l2]) {
      curr = nums1[l1++]
    } else {
      curr = nums2[l2++]
    }
    res[l1 + l2 - 1] = curr
  }
  for (let i = 0; i < res.length; i++) {
    nums1[i] = res[i]
  }
}