let buttons = document.querySelectorAll('.choose-macbook-color button')

let macImages = document.querySelector('.macbook-images')

let spanColor = document.querySelector('.white_to_blue')
let current = spanColor.innerHTML

const imageMacbook = {
    "White": "./img/mbp14-silver-select-202110.png",
    "Gray": "./img/mbp14-spacegray-select-202110.png"
}


buttons.forEach(btn => {
    const key = btn.getAttribute('data-col');


    btn.onclick = () => {
        buttons.forEach(btn => btn.classList.remove('mac-background-active'))

        macImages.style.backgroundImage = `url(${imageMacbook[key]})`;


        btn.classList.add('mac-background-active')

        current = `${key}`

        spanColor.innerHTML = current


    }

    // btn.onmouseenter = () => {
    //     spanColor.innerHTML = `${key}`
    // }

    btn.onmouseleave = () => {
        spanColor.innerHTML = current
    }


});



let price = document.querySelector('.mac-bfe-font span[date-value]')
let priceAdd = document.querySelectorAll('.sdd-storage span[date-add]')
let currents = 0
priceAdd.forEach(btns => {
    btns.onclick = () => {
        let Allprice = +btns.getAttribute('data-add')
        let total = currents + Allprice
        price.className.add('mac-bfe-font') = total

    }
})