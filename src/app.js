

const contenedor = document.getElementById('clip-home-container');
const imagen = document.getElementById('cliping-img');

contenedor.addEventListener('mousemove', function(event) {
  
    imagen.style.animation = '';

    const rectContainer = contenedor.getBoundingClientRect();
    const rectImage = imagen.getBoundingClientRect();

    const mouseXPercent = ((event.clientX - rectImage.left) / rectImage.width) * 100;

    const link = document.elementFromPoint(event.clientX, event.clientY);

    if(link.className == "home-link"){

      const dimensionsLink = link.getBoundingClientRect();

      const relativeX = dimensionsLink.left - rectContainer.left;

      const updatedClipPath = `polygon(${ relativeX-30 }px 0% ,${relativeX +dimensionsLink.width +30}px  0%, 50% ${rectContainer.height}px)`;

      imagen.style.clipPath = updatedClipPath;
    }
    else {
      

      const updatedClipPath = `polygon(${mouseXPercent-10}% 0% ,${mouseXPercent+10}%  0%, 50% ${rectContainer.height}px)`;

      imagen.style.clipPath = updatedClipPath;
    }
  });

  contenedor.addEventListener('mouseleave', function(event){
    imagen.style.animation = 'clip 10s infinite';
  });