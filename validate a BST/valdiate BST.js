function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function isValidBST(root) {
    if(root == null){
        return true;
    }
    let stack = [[root, -Infinity, Infinity]];
    while(stack.length){
        let [node, min, max] = stack.pop();
        let {val, left, right} = node;
        if(val <= min || val >= max){
            return false;
        }
        if(right)
            stack.push([right, val, max])
        if(left)
            stack.push([left, min, val])
    }
    return true;
}

let node = new  TreeNode(1);
let l = new TreeNode(1);
node.left = l;

console.log(isValidBST(node))

/**
 * dont try to force recursion
 * 
 * DFS is better than BFS because it would fall in to the worst case less often for this case
 * 
 * time O(n)
 * space O(h)
 */