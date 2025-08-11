const filters = document.querySelectorAll('.filter');
const images = document.querySelectorAll('.image');
const f1 = document.querySelectorAll('.f1');
const f2 = document.querySelectorAll('.f2');
const f3 = document.querySelectorAll('.f3');
const f4 = document.querySelectorAll('.f4');

function filter(id){
    filters.forEach((f) => {
        f.classList.remove('active');
    });
    filters[id].classList.add('active');
    images.forEach(hide)
    switch (id){
        case 0:
            images.forEach(show);
            break;
        case 1:
            f1.forEach(show);
            break;
        case 2:
            f2.forEach(show);
            break;
        case 3:
            f3.forEach(show);
            break;
        case 4:
            f4.forEach(show);
            break;
    }
}

function hide(content){
   content.classList.add('hidden');
}

function show(content){
    content.classList.remove('hidden');
}
