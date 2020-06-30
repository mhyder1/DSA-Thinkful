const Stack = require('./stack')

const parenMatch = (str) => {
    str = str.replace(/[^()]/ig,'')
    str = str.split('')
    const stack = new Stack()

    for(let i in str) {
        if(str[i] === '(') stack.push(str[i])
        else {
            if(stack.isEmpty()) return false
            else stack.pop()
        }
    } 
    return stack.isEmpty() ? true : false;
}

console.log(parenMatch('((()))(((())))'))
console.log(parenMatch(')'))

// def parChecker(symbolString):
//     s = Stack()
//     balanced = True
//     index = 0
//     while index < len(symbolString) and balanced:
//         symbol = symbolString[index]
//         if symbol == "(":
//             s.push(symbol)
//         else:
//             if s.isEmpty():
//                 balanced = False
//             else:
//                 s.pop()

//         index = index + 1

//     if balanced and s.isEmpty():
//         return True
//     else:
//         return False

