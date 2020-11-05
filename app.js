const arrayKeys = []
const secretCode = 'levinpogi'



window.addEventListener('keyup', (e) => {
    arrayKeys.push(e.key)
    arrayKeys.splice(-secretCode.length - 1, arrayKeys.length - secretCode.length)

    if (arrayKeys.join('').includes(secretCode)) {
        console.log("You are POGI POGI")
        cornify_add();
    }
    console.log(arrayKeys)
})