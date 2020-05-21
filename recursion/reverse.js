
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// https://stackoverflow.com/a/9724069

const reverse = (str) => {
    //base case
    if (str === '') return '';

    //recursive case
    // console.log(str.slice(1)+ str.charAt(0))
    return reverse(str.slice(1)) + str.charAt(0)


}

console.log(reverse('hello'))