"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const wordArray = word.split('');
    const vowels = 'aeiou';
    let count = 0;
    // wordArray.forEach(word => {
    //   if(word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u') 
    //     count++
    // })
    wordArray.forEach(word => {
        if (vowels.includes(word))
            count++;
    });
    return count;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
