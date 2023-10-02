const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false

//And Gate
// 1 1 --> 1
//0  1 --> 0
//1 0 --> 0
//0 0 --> 0
//Returns expr1 if it can be converted to false; otherwise, returns expr2.
