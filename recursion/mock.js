//https://courses.thinkful.com/mi-dsa-v1/checkpoint/3

const str = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

const findOccurrence = (str) => {
    str = str.toLowerCase().replace(/[^a-zA-Z ]/ig,'')
    str = str.split(' ')
    // console.log(str)

    let occur = {} 
    for(let i of str) {
        if(occur[i]){
            occur[i]++
        } else {
            occur[i] = 1
        }
    }
    // console.log(occur)
    let result = ''
    for(let i in occur) {
        // console.log(occur[i])
        result += `${i} = ${occur[i]}, `
    }
    console.log(result)

    // console.log(Math.max(...Object.values(occur)))
}

findOccurrence(str)

/**---------------------------------------------------------- */
const str1 = "Dad gave mom a Tesla as a racecar"
// - Output: `Dad, mom, racecar, 3 Palindromes`
const mom = 'mom'

const findPalindromes = (str) => {
    const stack = []
    let count = 0
    str = str.split('')
    // console.log(str)
    for(let i of str) {
        stack.push(i)
    }
    // console.log(stack)
    // const ltr = stack.pop()
    for(let [i,v] of str.entries()) {
        let ltr = stack.pop()
        // console.log(i)
        if(ltr !== str[i]) {
            return false
        }
    }
    count++
    console.log(count)
}

// findPalindromes(mom)