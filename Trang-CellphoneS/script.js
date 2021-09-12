const IMG_WIDTH = 700;
const slideContainer = $('.slides')
const slideImages = [...$$('.slide')]

slideContainer.style.width = `${slideImages.length * IMG_WIDTH}px`

let index = 0;

function next() {
    if (index < slideImages.length - 1) {
        index++
    }
    else {
        index = 0
    }
    slideContainer.style.transform = `translateX(${-IMG_WIDTH * index}px)`
}

setInterval(() => {
    next()
}, 2 * 1000)