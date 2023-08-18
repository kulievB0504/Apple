// const deep = document.querySelector('.Deep')
// const gold = document.querySelector('.Gold')
// const silver = document.querySelector('.Silver')
// const space = document.querySelector('.Space')
// const img = document.querySelector('.img')




// deep.onclick = () => {
//     img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896")`
// }

// gold.onclick = () => {
//     img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907")`
// }

// silver.onclick = () => {
//     img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841892")`
// }

// space.onclick = () => {
//     img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841897")`
// }




let btns = document.querySelectorAll(".colors-iphone-buttons-click button")
let img = document.querySelector(".img")
let spanColor = document.querySelector(".span-color-brake span")

let current = 'Color'

const images = {
    "deep": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896",
    "gold": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907",
    "silver": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841892",
    "space": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841897",
}


btns.forEach(btn => {
    const key = btn.getAttribute('data-col');


    btn.onclick = () => {
        btns.forEach(btn => btn.classList.remove('border-iphone-active'))

        img.style.backgroundImage = `url(${images[key]})`;


        btn.classList.add('border-iphone-active')
        current = `Color - ${key}`

        spanColor.innerHTML = current
    }

    btn.onmouseenter = () => {
        spanColor.innerHTML = `Color - ${key}`
    }

    btn.onmouseleave = () => {
        spanColor.innerHTML = current
    }
});


let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal__background')
let btnClose = document.querySelectorAll('[data-close]')
let btn = document.querySelector('.modal__window')



btn.onclick = () => {

    modal.style.display = "block"
    modal_bg.style.display = "block"

    setTimeout(() => {
        modal.style.opacity = "1"
        modal_bg.style.opacity = "1"
        modal.style.scale = "1.2"
        modal_bg.style.scale = "1.2"
    }, 100)

}

btnClose.forEach(btn => {

    btn.onclick = () => {
        modal.style.opacity = "0"
        modal_bg.style.opacity = "0"
        modal.style.scale = "1"
        modal_bg.style.scale = "1"


        setTimeout(() => {
            modal.style.display = "none"
            modal_bg.style.display = "none"
        }, 500)

    }

})



const fieldHeader = document.querySelector('.field-header');
const fieldContent = document.querySelector('.field-content');
const fileRotate = document.querySelector('.modal__rotate')

fieldHeader.addEventListener('click', () => {
    setTimeout(() => {
        if (fileRotate.style.rotate === '180deg') {
            fileRotate.style.rotate = '360deg';
          } else {
            fileRotate.style.rotate = '180deg';
          }
        fieldContent.classList.toggle('open');
    }, 300);
});

const fieldHeaderTwo = document.querySelector('.field-header-two');
const fieldContentTwo = document.querySelector('.field-content-two');
const fileRotateTwo = document.querySelector('.modal__rotate__two')

fieldHeaderTwo.addEventListener('click', () => {
    setTimeout(() => {
        if (fileRotateTwo.style.rotate === '180deg') {
            fileRotateTwo.style.rotate = '360deg';
          } else {
            fileRotateTwo.style.rotate = '180deg';
          }
        fieldContentTwo.classList.toggle('open');
    }, 300);
  });

