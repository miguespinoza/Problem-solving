/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
    
    let leafs = [];
    let i = 0;
    while(root != null){
        leafs[i] = [];
        getLeafs(root, leafs[i]);
        if(isLeaf(root)){
            leafs[i+1] = [root.val];
            break;
        }
        i++;
    }
    return leafs
};

function getLeafs(root, leafs){
    if(root){
        if(root.left && isLeaf(root.left)){
            leafs.push(root.left.val);
            root.left = null;
        } else {
            if(root.left)
                getLeafs(root.left, leafs);
        }

        if( root.right && isLeaf(root.right)){
            leafs.push(root.right.val);
            root.right = null;
        }else{
            if(root.right)
                getLeafs(root.right, leafs);
        }   
    }
     
    
}

function isLeaf(node){
    if(node){
        return node.left == null && node.right== null;
    }
    return true;
    
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);

findLeaves(root);