const myName = 'sachin'
const reverse = function(string){
    let revName = []
    for (let index = string.length - 1; index >= 0; index--) {
        const currentCharacter = string[index];
        revName.push(currentCharacter);     
    }
    return revName.join('').toString();
}
console.log(reverse(myName));

const reverse1 = str => [...str].reverse().join('');
console.log(reverse1('krrish'));