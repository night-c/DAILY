// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const bracket = {
  '{': '}',
  '(': ')',
  '[': ']',
}

const isValid = (str: string): boolean => {
  if (str.length % 2) {
    return false
  }

  const stack = []
  for (const char of str) {
    if (char in bracket) {
      stack.push(char)
    } else {
      const top = stack.pop()
      if (char !== bracket[top]) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log('{{}}[]()', isValid('{{}}[]()'))
console.log('[][', isValid('[]['))
