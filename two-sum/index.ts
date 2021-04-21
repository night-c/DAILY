// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


const twoSum = (nums: number[], target: number): [number, number] => {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    // 判断 map 里有没有 target 与当前数字的差值
    // 如果有直接返回索引
    // 如果没有将当前数字存入到 map{} value -> index
    const l = map[target - nums[i]]
    if (l !== undefined) {
      return [l, i]
    }
    map[nums[i]] = i
  }
  return [-1, -1]
}

const result = twoSum([2, 5, 6, 7], 9)

console.log(result);
