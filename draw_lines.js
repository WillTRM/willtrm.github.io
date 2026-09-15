function addElement() {
    const topval = Math.round(Math.random() * 100 - 25)
    const leftval = Math.round(Math.random() * 100 - 150)
    const size = Math.round(Math.random() * 2000 + 4000)
    const newCircle = document.createElement("div")

    newCircle.style.position = "absolute"
    newCircle.style.top = `${topval}%`
    newCircle.style.left = `${leftval}%`
    newCircle.style.width = `${size}px`
    newCircle.style.height = `${size}px`
    newCircle.className = "circle"

    document.body.appendChild(newCircle)
}

for (let idx = 0; idx < 10; idx++)
{
    addElement()
}