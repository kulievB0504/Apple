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



const priceElement = document.getElementById('price');
const buttn = document.querySelectorAll('.sdd-storage');
let currentPrice = parseInt(priceElement.getAttribute('data-value'));

buttn.forEach(button => {
    button.addEventListener('click', () => {
        const addPrice = parseInt(button.getAttribute('data-add'));
        
        if (!button.classList.contains('selected')) {
            currentPrice += addPrice;
            button.classList.add('selected');
        } else {
            currentPrice -= addPrice;
            button.classList.remove('selected');
        }
        
        priceElement.textContent = '$' + currentPrice.toLocaleString();
        priceElement.setAttribute('data-value', currentPrice);
    });
});