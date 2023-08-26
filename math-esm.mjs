//  ## first type of export method
// const add = (a,b) => {
//     return a+ b
// };

// export default add;

// ## second type of export method

// export default(a,b) => {
//     return a + b;
// }

// ## export type 3 one by one 

const add = (a, b) => {
    return a + b;
};

const substract = (a,b) => {
    return a -b ;

};

// export default {
//     add: add,
//     substract: substract,
// }

// short method to above if key and value are same
export default {
    add,
    substract,
}

