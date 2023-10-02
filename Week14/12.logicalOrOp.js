const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
//Returns expr1 if it can be converted to true; otherwise, returns expr2.

//OR Gate
// 1 0 --> 1
//0  1 --> 1
//1 1 --> 1
//0 0 --> 0
console.log(3 === 4);
