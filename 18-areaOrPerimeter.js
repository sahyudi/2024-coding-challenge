// 2024 coding challenge WPU
// 8/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(6, 10));
