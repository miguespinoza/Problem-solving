class Solution{
    constructor(board, words){
        this.trie = this.makeTrie(words);
        console.log(this.trie["o"])
        this.width = board.length;
        this.board = board;
        this.height = board[0].length;
    }
    
    isInBounds(x,y){
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
    
    WORD_KEY = "!#"
    
    makeTrie(words){
        const trie = {};
        words.forEach(w => {
            let node = trie;
            w.split("").forEach(char => {
                if(node[char] == null)
                    node[char] = {};
                node = node[char];
            });
            node[this.WORD_KEY] = w;
        });
        return trie;
    }


    
    
    findWords(){
        const matchedWords = [];
        const board = this.board;
        const backtracking = (row,col, trie) =>{
            let char = board[row][col];
            let trieNode = trie[char];

            if(trieNode[this.WORD_KEY]){
                matchedWords.push(trieNode[this.WORD_KEY]);
                delete trieNode[this.WORD_KEY];
            }
            
            board[row][col] = "VISITED";
            
            [[-1,0],[0,1],[1,0],[0,-1]].forEach(([rowOff, colOff]) => {
                let newRow = row + rowOff;
                let newCol = col + colOff;

                if(this.isInBounds(newRow, newCol) && trieNode[board[newRow][newCol]] != null){
                    backtracking(newRow, newCol, trieNode)
                }
            })
            
            board[row][col] = char;
            

            
        }
        for(let i = 0; i < this.width; i++){
            for(let j = 0; j < this.height; j++){
                if(this.trie[this.board[i][j]]){
                    backtracking(i,j,this.trie);
                }
            }
        }
        return matchedWords;
    }
    
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let sol = new Solution(board, words);
    return sol.findWords();
};


//findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],["oath","pea","eat","rain"])


//[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
//



/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let directions = [[-1,0],[0,1],[1,0],[0,-1]];
var exist = function(board, word) {
    // construct a trie with word
    
    let trie = {}
    let node = trie;
    word.split("").forEach((c,i) =>{
        node[c] = {}
        node = node[c];
        if(i === word.length -1){
            node.end = true;
        }
    });
    let result = false;
    
    // use depth search with backtracking to search for the word
    function backtrack( row, col, parentNode){
        let char = board[row][col];
        let currentNode = parentNode[char];
        if(currentNode.end === true){
            result = true;
            return true;
        }
        board[row][col] = "VISITED";
        let res = false;
        for(let id= 0; id< directions.length; id++){
            let [rowOff, colOff] = directions[id];
            let newRow = row + rowOff;
            let newCol = col + colOff;
            if(isInBounds(board.length, board[0].length, newRow, newCol)){
                let newChar= board[newRow][newCol]
                if(currentNode[newChar]){
                    res =  backtrack( newRow, newCol, currentNode)
                    if(res){
                        board[row][col] = char;
                        return res;
                    }
                }
            }
        };
        board[row][col] = char;
        return res;
    }
    
    for(let row = 0; row < board.length; row ++){
        for(let col = 0; col < board[0].length; col ++){
            if(trie[board[row][col]]){
                res = backtrack(row, col, trie);
                if(res){
                    return res;
                }
            }   
        }
    }

    return result || false;
    
};
    
    
function isInBounds( height, width, row, col){
    return row >= 0 && row < height && col >= 0 && col < width;
}

//let r = exist([["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b"]], "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
let r = exist([["C","A","A"],["A","A","A"],["B","C","D"]], "AAB")
console.log(r)


