class Node { 
    constructor(data) { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

class BinarySearchTree {
    constructor() { 
        // root of a binary seach tree 
        this.root = null; 
    } 

    // helper method which creates a new node to  
    // be inserted and calls insertNode
    insert(data) { 
    // Creating a node and initailising  
    // with data  
    var newNode = new Node(data); 
                      
    // root is null then node will 
    // be added to the tree and made root. 
    if(!this.root) 
        this.root = newNode; 
    else
        // find the correct position in the  
        // tree and add the node 
        this.insertNode(this.root, newNode); 
    } 

    /* ###########################  INSERT ############################*/
    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) { 
        // if the data is less than the node 
        // data move left of the tree  
        if(newNode.data < node.data) 
        { 
            // if left is null insert node here 
            if(node.left === null) 
                node.left = newNode; 
            else
    
                // if left is not null recurr until  
                // null is found 
                this.insertNode(node.left, newNode);  
        } 
    
        // if the data is more than the node 
        // data move right of the tree  
        else { 
            // if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else
    
                // if right is not null recurr until  
                // null is found 
                this.insertNode(node.right,newNode); 
        } 
    } 

    /*###########################  MAX DEPTH ############################*/
    maxDepth = (node) => { 
        if (!node) 
            return 0; 
        else { 
            /* compute the depth of each subtree */
            const lDepth = this.maxDepth(node.left); 
            const rDepth = this.maxDepth(node.right); 
   
            /* use the larger one */
            if (lDepth > rDepth) 
                return (lDepth + 1); 
             else 
                return (rDepth + 1); 
        } 
    } 

    depth = () => {
        return this.maxDepth(this.root)
    }

}

function main() {
    const bst = new BinarySearchTree()
    bst.insert(3)
    bst.insert(1)
    bst.insert(4)
    bst.insert(6)
    bst.insert(9)
    bst.insert(2)
    bst.insert(5)
    bst.insert(7)
    // console.log(bst)
    console.log(bst.depth())
}

main()