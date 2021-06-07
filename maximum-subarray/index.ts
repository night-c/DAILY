// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-subarray
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const maxSubArray = (nums: number[]): number => {
  let result = nums[0]
  let sum = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    result = result > sum ? result : sum
  }
  return result
}

console.log('[-2, 4, 5, -2, 3]', maxSubArray([-2, 4, 5, -2, 3]))
console.log('[-2, 4, 5, -2, 1]', maxSubArray([-2, 4, 5, -2, 1]))
