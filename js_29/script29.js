const button = document.querySelector('.ripple')

button.addEventListener('click', (e) => {

    // Javascript clientX ve clientY kullanımı ile bir html elemanı üzerinde mouse kordinatlarını elde edebilmekteyiz.

    // mouse un click olduğundaki konumu bize verir

    const clientX = e.clientX
    const clientY = e.clientY
    //console.log(`clientX: ${clientX}, clientY: ${clientY}`)
    

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    //console.log(`buttonTop: ${buttonTop}, buttonLeft: ${buttonLeft}`)

    const xInside = clientX - buttonLeft
    const yInside = clientY - buttonTop
    //console.log(`xInside: ${xInside}, yInside: ${yInside}`)

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    //burada px i ayrı yazma bitişik yaz yoksa calışmaz.
    // circle.style.left = `${xInside}px`;
    // circle.style.top = `${yInside}px`;

    button.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
})