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