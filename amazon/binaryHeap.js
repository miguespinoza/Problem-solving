class BinaryHeap{
    constructor(isMin, size){
        this.isMin = isMin;
        this.items = [];
        this.size  = size;
    }

    insert = (n) => {
        // check size
        if(this.items.length + 1  > this.size){
            // pop head if size it will overflow
            this.remove();
        }
        // insert at rightmnost position
        // trightmost is end of array
        this.items.push(n);
        let i = this.items.length-1;

        // bubble up if necesary
        while(!this.compare(this.getParentI(i), i)){
            this.swap(this.getParentI(i), i);
            i = this.getParentI(i);
        }

        


    }

    peek = () => {
        return this.items[0];
    }

    remove = () => {
        // delete root
        let i = 0;
        let val = this.items[i];
        // move the rightmost child up
        this.swap(i, this.items.length-1);
        // remove the head from the back of items;
        this.items.pop();
        // buble down if necesary
        while(!this.compare(i, this.getLeftI(i)) || !this.compare(i, this.getRightI(i))){

            if(this.isMin){
                // swap with smaller child
                let isLeftSmaller = this.items[this.getLeftI(i)] <= this.items[this.getRightI(i)];
                let toSwapI = isLeftSmaller ? this.getLeftI(i) : this.getRightI(i);
                this.swap(toSwapI, i);
                i = toSwapI;
            }else{
                // swap with bigger child
                let isLeftBigger = this.items[this.getLeftI(i)] >= this.items[this.getRightI(i)];
                let toSwapI = isLeftBigger ? this.getLeftI(i) : this.getRightI(i);
                this.swap(toSwapI, i);
                i = toSwapI;
            }
        }
        return val;
    }

    swap  = (i,j) =>{
        let t = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = t;
    }

    getLeftI(i){
        return i*2+1;
    }

    getRightI(i){
        return i*2+2;
    }

    getParentI(i){
        if(i === 0) return 0;
        return Math.floor((i -1)/2);
    }

    compare = (parentI,childI) => {
        if(this.isMin){
            // for a min heap children have to be greater or equal to parent
            return this.items[childI] == null || this.items[parentI] <= this.items[childI];
        }else{
            // for a min heap children have to be less or equal to parent
            return this.items[childI] == null || this.items[parentI] >= this.items[childI];
        }
    }
}

let heap = new BinaryHeap(false, 3);

heap.insert(10);
heap.insert(20);
heap.insert(12);
console.log(heap.remove());
heap.insert(0);
heap.insert(15);

console.log(heap)