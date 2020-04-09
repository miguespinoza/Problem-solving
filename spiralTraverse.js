/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // traverse the matrix in spiral
    
    // boudaries
    let topB = -1;
    let rightB = matrix[0].length;
    
    let leftB = -1;
    let bottomB = matrix.length;
    
    let boundaries = [topB, rightB, bottomB, leftB];
    
    // directions is a circular queue with right, down, left, up movements
    let directions = [[0,1], [1,0], [0,-1], [-1,0]];
    function getNextMove(){
        // circuilar queue
        let nextMove = directions.shift();
        directions.push(nextMove);
        return nextMove;
    }
    
    // position [row, col] // direction [rowDelta, colDelta]
    function canMove(position, direction){
        let newPos = [position[0] + direction[0], position[1] + direction[1]]
        
        if( newPos[0] <= bottomB && newPos[0] >= topB && newPos[1] <= rightB && newPos[1] >= leftB){
            return true;
        } else {
            return false;
        }
    }
    
    let dir = getNextMove();
    let pos = [0,0]
    let result = []
    while(canMove(pos, dir)){
        result.push(matrix[pos[0]][pos[1]]);
        // move
        let oldPos = [...pos];
        pos = [pos[0] + dir[0], pos[1] + dir[1]]
        if(!canMove(pos, dir)){
            // get newDirection and update boundaries
            console.log(pos, boundaries)
            if(pos[0] === bottomB)
                rightB--
            else if(pos[0] === topB)
                leftB++;
            else if(pos[1] === rightB)
                topB++;
            else if(pos[1] === leftB)
                bottomB--;
            pos = oldPos;
            dir = getNextMove();
            pos = [pos[0] + dir[0], pos[1] + dir[1]]
            boundaries = [topB, rightB, bottomB, leftB];
        }
        
    }
    
    return result
    
    
    
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);