class _Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class Linkedlist {
    constructor() {
        this.head = null
    }

    isEmpty = () => {
        return this.head === null
    }

    insertFirst = (data) => {
        this.head = new _Node(data)
    }

    checkEmpty = () => {
        if(this.isEmpty) return null
    }

    insertLast = (data) => {
        this.checkEmpty()

        let tempNode = this.head
        while(tempNode.next) {
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(data)
    }

    display = () => {
        this.checkEmpty()

        let tempNode = this.head
        while(tempNode.next) {
            console.log(tempNode.value)
            tempNode = tempNode.next
        }
        console.log(tempNode.value)
        console.log('-----------------------')
    }
}

const main = () => {
    const LL = new Linkedlist()
    console.log(LL.isEmpty())

    LL.insertFirst('Muhammad')
    LL.display()
    console.log(LL.isEmpty())
    const names = ['John', 'Jack', 'Jill', 'Sam', 'Alice', 'Frank']
    names.forEach(name => LL.insertLast(name))
    LL.display()


}

main()