window.onload = function() {
    var pushed = [1,2,3,4,5];
    var popped = [4,5,3,2,1];
    console.log("isValid", validateStackSequences(pushed, popped));
}

// pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
function validateStackSequences(pushed, popped) {
    var stack = [];
    var index = 0;
    pushed.forEach(num => {
        stack.push(num);
        while(stack.length && stack[stack.length - 1] === popped[index]) {
            stack.pop();
            index++;
        }
    });

    return !stack.length;
}