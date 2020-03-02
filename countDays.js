
let monthDays = [31, 28, 31, 30, 31, 30,  
    31, 31, 30, 31, 30, 31 ] 

function countLeapYears(year, month){
let years = BigInt(year);
if(month <= 2){
years--;
}

let leapYears = years / 4n - years / 100n + years /400n;
return Number(leapYears);
}

/**
* @param {string} date1
* @param {string} date2
* @return {number}
*/
var daysBetweenDates = function(date1, date2) {


let d1Days = countDaysFrom0(date1);
let d2Days = countDaysFrom0(date2);

return Math.abs(d2Days - d1Days);



};


function countDaysFrom0(date){
let [year, month, days] = date.split("-").map(Number);

let d1Days = year * 365 + days;

for(let m = 0; m < month -1; m++){
d1Days+= monthDays[m];
}
d1Days += countLeapYears(year)
return d1Days;
}

console.log(daysBetweenDates("2020-01-1","2019-12-31"))
console.log(daysBetweenDates("2019-12-31", "2020-01-15"))


console.log(daysBetweenDates("2019-06-29", "2019-06-30"))