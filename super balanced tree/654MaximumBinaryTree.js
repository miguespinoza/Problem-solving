var constructMaximumBinaryTree = function(nums) {
    // base case
    if(nums.lenght === 0){
         return null;
    }
    
    
    let maxI = 0;
    let max = -Infinity;
    for(let i =0; i < nums.length; i++){
        let n = nums[i];
        if( n > max){
            maxI = i;
            max = n;
        }    
    }
        
    let root = new TreeNode(nums[maxI]);
    
    root.left = constructMaximumBinaryTree(nums.slice(0,maxI));
    root.right = constructMaximumBinaryTree(nums.slice(maxI+1));
    
    return root;
};


console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}