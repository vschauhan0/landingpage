const nav = document.getElementsByClassName('navbar')[0]; // Assuming there's only one element with the class 'navbar'
const list = document.getElementById('list'); // Assuming 'list' is an element with id 'list'
const close = document.getElementById('close'); // Assuming 'close' is an element with id 'close'

if (list) {
    list.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
