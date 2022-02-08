module.exports = function check(str, bracketsConfig) {
  let str_brackets = bracketsConfig.join('').replace(/,/g,'');
  let empty_stack = [];
  for (let str_bracket of str) {
    let str_bracketsIndex = str_brackets.indexOf(str_bracket)
    if (str_bracketsIndex % 2 === 0) {
      if (str_bracket === str_brackets[str_bracketsIndex + 1] && empty_stack[empty_stack.length - 1] === str_bracketsIndex){
        empty_stack.pop();
      }
      else {
        empty_stack.push(str_bracketsIndex)
      }
    }
    else {
      if(empty_stack.pop() !== str_bracketsIndex -1) {
        return false;
      }
    }
  } return empty_stack.length === 0;
}