/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  const mapAB = new Map()
  let count = 0
  nums1.forEach(a => {
    nums2.forEach(b => {
      mapAB.set(a + b, mapAB.has(a + b) ? (mapAB.get(a + b) + 1) : 1)
    })
  })

  for (const c of nums3) {
    for (const d of nums4) {
      if (mapAB.has(-c - d)) {
        count += mapAB.get(-c - d)
      }
    }
  }

  return count
};