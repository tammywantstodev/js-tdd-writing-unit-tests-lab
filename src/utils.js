// Your code here
export function isPalindrome(word){
    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error("Invalid input");
    }

    const normalisedWord=word.toLowerCase();
    const reversedWord=normalisedWord.split('').reverse().join('');

    if(normalisedWord!==reversedWord || normalisedWord===''){
        return false;
    }
    else{
        return true;
    }

}
console.log(isPalindrome('madam'));

export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
        points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points;
}