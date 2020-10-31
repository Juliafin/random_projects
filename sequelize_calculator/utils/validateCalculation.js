module.exports = (num1, num2, operator) => {
  // Do num1 num2, and operator exist?
  // Is num1 num2 a number
  // Is the operator one of the four operations we are supporting?

  if (!num1 || !num2 || !operator) {
    return false
  }

  if (!parseInt(num1) || !parseInt(num2)) {
    return false
  }

  const operations = ['+', '-', '*', '/']

  if (!operations.includes(operator)) {
    return false
  }

  return true
}