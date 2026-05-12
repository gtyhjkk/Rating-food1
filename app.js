const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

function slide(i,id){
    document.querySelector('#'+id+' .track')
    .style.transform=`translateX(-${i*100}%)`;
}


const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
    reveals.forEach(el=>{
        const top=el.getBoundingClientRect().top;
        if(top<window.innerHeight-100){
            el.classList.add('active');
        }
    });
});

const initSlider = () => {
    const DEFAULT_SPEED = 2;

    const carousel = document.querySelector(".story__carousel");
    if (!carousel) return;

    const wrapper = document.querySelector(".carousel__track");

    wrapper.innerHTML += wrapper.innerHTML;

    let speed = DEFAULT_SPEED;
    let position = 0;

    carousel.addEventListener("mouseenter", () => {
      speed = DEFAULT_SPEED / 2;
    });

    carousel.addEventListener("mouseleave", () => {
      speed = DEFAULT_SPEED;
    });

    function animate() {
      position -= speed;

      if (Math.abs(position) >= wrapper.scrollWidth / 2) {
        position = 0;
      }

      wrapper.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  initSlider();