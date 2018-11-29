// function one(){
//     throw new Error("Error in one!")
// }
// function two(){
//  one()
// }
// function three(){
//  two()
// }
//
// three();

console.log('One');

setTimeout(function(){
   console.log('Two');
}, 0);

console.log('Three');