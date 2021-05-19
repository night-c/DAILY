// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/climbing-stairs
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const impl = (num: number): number => {
  const nums: number[] = []
  nums[0] = nums[1] = 1
  for (let i = 2; i <= num; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
  }
  return nums[num]
}

console.log('2', impl(2))
console.log('10', impl(10))
