const filters = document.querySelectorAll('.filter');

function filter (id){
    filters.forEach((f) => {
        f.classList.remove('active');
    });
    filters[id].classList.add('active');
    switch (id){
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
    }
}
