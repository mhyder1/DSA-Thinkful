
    const sheep = (num) => {
        //base case
        if(num === 0) {
            console.log('All sheep jumped over the fence')
            return
        }

        console.log(`${num}: Another sheep jumps over the fence`)

        //recursive case
        sheep(num - 1)
    
    }

sheep(10)