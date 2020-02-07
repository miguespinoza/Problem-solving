/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
       X
   X   XX X
_X_XX_XXXXXX

 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // find for each height what is the max height at left and right, store them to a separate array
  let maxLeft = [];
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i];
    }
    maxLeft.push(max);
  }

  let maxRight = [];
  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    console.log(i);
    if (height[i] > max) {
      max = height[i];
    }
    maxRight[i] = max;
  }

  // trapped watter is min(maxLeft, maxRight) - height at each position

  const trapped = height.map((h, i) => Math.min(maxLeft[i], maxRight[i]) - h);
  console.log(trapped, maxLeft, maxRight);
  return trapped.reduce((a, t) => a + t, 0);
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
