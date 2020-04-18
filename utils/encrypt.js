const encrypt = (key, str, action) => {
    const oldLetterOrder = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';
    const newLetterArr = [];
    const indexFirstEl = 26 - key;

    function reorderLettersInStr(arr) {
        const lettersArr = arr.split('');
        for (let i = indexFirstEl; i < lettersArr.length; i++) {
            newLetterArr.push(lettersArr[i])
        }
        for (let i = 0; i < indexFirstEl; i++) {
            newLetterArr.push(lettersArr[i])
        }
    }

    reorderLettersInStr(upperCaseStr)
    reorderLettersInStr(lowerCaseStr)
    
    const newLetterOrder = newLetterArr.join('');

    if (action === 'encode') {
        const index = x => newLetterOrder.indexOf(x);
        const translate = x => index(x) > -1 ? oldLetterOrder[index(x)] : x;
        return str.split('').map(translate).join('');
    }
    if (action === 'decode') {
        const index = x => oldLetterOrder.indexOf(x);
        const translate = x => index(x) > -1 ? newLetterOrder[index(x)] : x;
        return str.split('').map(translate).join('');
    }
}

module.exports = { encrypt };