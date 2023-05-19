function toggleWindow() {
    let el = document.getElementById('topMenu');
    el.classList.toggle('main-menu--active');
}

function makeActive() {
    let activeElement = document.getElementById('active-list-item');
    activeElement.style.setProperty('grid-area', 'initial');
    activeElement.removeAttribute('id');


    let element = document.getElementById('js_temp');
    element.classList.add('is-active');
    
}

document.addEventListener('scroll', (event) => {
    // lastKnownScrollPosition = window.scrollY;
    // console.log(lastKnownScrollPosition);
  
    // if (lastKnownScrollPosition > 0) {
    //     let topMenu = document.getElementById('topNav');
    //     topMenu.classList.add('is-fixed');
    // }


    
    // if (ticking) {
        
    //     window.requestAnimationFrame(() => {
    //     doSomething(lastKnownScrollPosition);
    //     ticking = false;
    //   });
  
    //   ticking = true;
    // }
  });
  