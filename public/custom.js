onload = () => {
    document.on = 0
    document.char = document.createElement("img")
    document.char.style.position = "absolute"
    document.char.style.pointerEvents = "none"
    document.body.appendChild(document.char)
    document.addEventListener("mousemove", (event) => {
        if (!document.on) return
        document.char.style.left = `${event.pageX - 95}px`
        document.char.style.top = `${event.pageY - 160}px`
    })
    document.char.style.display = "none"
    document.char.style.width = "200px"
    document.char.style.height = "200px"
    document.body.innerHTML('<ins class="kakao_ad_area"style="display:none;"data-ad-unit="DAN-adfREtfFWxy50pGB"data-ad-width="300"data-ad-height="250"></ins>;')
}

function charcter(name, on) {
    document.on = on
    if (on) {
        document.char.src = `https://cdn.chocolily.dev/${name}.webp`
        document.char.style.display = "block"
    }

    if (!on) document.char.style.display = "none"
}
