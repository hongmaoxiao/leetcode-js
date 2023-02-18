/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  return set_intersection(set1, set2)
};

const set_intersection = (set1, set2) => {
  console.log(set1.size)
  console.log(set2.size)
  if (set1.size > set2.size) {
    return set_intersection(set2, set1)
  }
  const res = new Set()
  for (const item of set1) {
    if (set2.has(item)) {
      res.add(item)
    }
  }

  return [...res]
}