module.exports = function check(str, bracketsConfig) {
    let symbols = bracketsConfig.join('').replace(/,/g, '');
    let stack = [];
for (let item of str) {
        let index = symbols.indexOf(item)

        if (index % 2 === 0) {
            
            if (item === symbols[index + 1] && stack[stack.length - 1] === index){
                stack.pop();
            } else if (item === symbols[index + 1] && stack[stack.length - 1] !== index) {
                stack.push(index);
            }
            else{
                stack.push(index);
            }
        } 
        else {
            if (stack.pop() !== index-1){
                return false;
            }
        }
        
    }
    return stack.length === 0
}