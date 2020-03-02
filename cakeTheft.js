/**
 *  While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

    weight: the weight of the cake in kilograms
    value: the monetary value of the cake in British shillings

For example:

  // Weighs 7 kilograms and has a value of 160 shillings
{ weight: 7, value: 160 }

// Weighs 3 kilograms and has a value of 90 shillings
{ weight: 3, value: 90 }

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold. 


 For example:

  const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer.


 */


 function maxDuffelBagValue(cakeTypes, capacity){
     /**
      * its a backtracing problem with
      * decision space = cakeTypes, you can repeat a cake
      * constraint: total weight <= capacity
      * goal: get the max value
      */
    let maxValue = 0;
    cakeTypes = cakeTypes.filter(c => c.weight > 0);
    
    function combineCakeTypes(bag, startIndex){
        if(bag.weight > capacity){
            return;
        }

        if(bag.value > maxValue){
            maxValue = bag.value;
        }

        for(let i = startIndex; i < cakeTypes.length; i++){
            let cake = cakeTypes[i];
            bag.cakes.push(cake);
            bag.value += cake.value;
            bag.weight += cake.weight;
            combineCakeTypes(bag, i);
            bag.cakes.pop();
            bag.value -= cake.value;
            bag.weight -= cake.weight;
        }
    }
    combineCakeTypes({value: 0, weight: 0, cakes: []}, 0);
    return maxValue;


 }

 const cakeTypes = [
    { weight: 0, value: 0 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
  ];
  
  const capacity = 20;
  
  console.log(maxDuffelBagValue(cakeTypes, 20))