function toReversedTernary(n) {
    out_str = ""
    while (n != 0) {
        var r = n % 3
        n = Math.floor(n / 3)
        out_str += r
    }
    return out_str
}

function addElement(digit, position) {
    const newRect = document.createElement("div")

    newRect.style.position = "absolute"
    newRect.style.top = "90%"
    newRect.style.left = `${95 - position * 2}%`
    newRect.style.width = `${20}px`
    newRect.style.height = `${50}px`

    if (digit == 0) {newRect.className = "ternary-zero"}
    if (digit == 1) {newRect.className = "ternary-one"}
    if (digit == 2) {newRect.className = "ternary-two"}

    document.body.appendChild(newRect)
}

function addText(t) {
    const newText = document.createElement("span")
    newText.textContent = t

    newText.style.position = "absolute"
    newText.style.top = "60%"
    newText.style.left = "50%"
    newText.className = "ternary-text"

    document.body.appendChild(newText)
}

const target_num = Math.round(Math.random() * 6560)
const ternary_string = toReversedTernary(target_num)

for (let idx = 0; idx < ternary_string.length; idx++) {
    addElement(parseInt(ternary_string[idx]), idx)
}

addText(target_num.toString())