// slider to hide images and display one image
const images = document.querySelectorAll('.header-slider ul img');

//select control button
const prev_btn = document.querySelector('.control_previous');
const next_btn = document.querySelector('.control_next');

// Create variables
let n = 0; // first image

// Create a function
function changeSlide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'; // the image will hide;
    }

    // to display first image
    images[n].style.display = 'block'; // the image will be visible
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = images.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if (n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})


// Let's add scroll
const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt => {
        // remove default feature
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    }));
}