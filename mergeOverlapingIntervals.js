function mergeIntervals(intervals){
    let i =0;
    let j = 1;
    intervals = intervals.sort((a,b) => a[0] - b[0])
    while(i < intervals.length && j < intervals.length){
        let left = intervals[i];
        let right = intervals[j];
        
        if(left[1] >= right[0]){
            mergeUtil(intervals, i, j);
        } else{
            i++;
            j++;
        }

    }
    return intervals;
}

function mergeUtil(intervals, i, j){
    intervals[i][0] = Math.min(intervals[j][0], intervals[j][0]);
    intervals[i][1] = Math.max(intervals[j][1], intervals[j][1]);
    intervals.splice(j,1);
}

mergeIntervals([[1,4],[0,2],[3,5]])