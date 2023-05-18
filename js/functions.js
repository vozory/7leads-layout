function makeActive() {
    let activeElement = document.getElementById('active-list-item');
    activeElement.style.setProperty('grid-area', 'initial');
    activeElement.removeAttribute('id');


    let element = document.getElementById("js_temp");
    element.classList.add("is-active");
    
}