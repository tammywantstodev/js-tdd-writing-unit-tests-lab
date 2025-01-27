// Your tests here
import {isPalindrome, pointsForWord} from "../utils.js"
import {pointsForWord} from "../utils.js"
describe("isPalindrome", () => {
        it("checks whether a word is a palindrome or not", () => {
           const word= 'racecar'
            const result=isPalindrome(word);
           expect(result).toBe(true);
        });
    const word= 'car'
    const result=isPalindrome(word);
    expect(result).toBe(false);
});
it("return true for words that are a combination of uppercase and lowercase letters", () => {
    const word = "RaCecar";

    const result = isPalindrome(word);

    expect(result).toBe(true);
});
it("throws an error if the input has any non-alphabetic characters", () => {
    const word = "race car";

    expect(() => isPalindrome(word)).toThrow();
});
it("throws an error if the input is an empty string", () => {
    const word = "";

    expect(() => isPalindrome(word)).toThrow();
});


