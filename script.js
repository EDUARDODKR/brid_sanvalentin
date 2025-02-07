
function showLove() {
     // Ocultar el primer mensaje y los botones
    document.querySelector('h1').style.display = 'none'; // Oculta el primer h1
    document.querySelector('p').style.display = 'none'; // Oculta el párrafo
    document.querySelectorAll('h1')[1].style.display = 'none'; // Oculta el segundo h1
    document.querySelector('.flower-image').style.display = 'none'; // Oculta la imagen
    document.getElementById('siBtn').style.display = 'none'; // Oculta el botón "Sí"
    document.getElementById('noBtn').style.display = 'none'; // Oculta el botón "No"

    // Mostrar el mensaje de amor y el botón de descarga
    document.getElementById('love-message').style.display = 'block';
    document.getElementById('downloadPdf').style.display = 'inline-block';

//            document.getElementById('love-message').style.display = 'block';
//            document.getElementById('downloadPdf').style.display = 'inline-block';
        };
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

function downloadLetter() {
            const link = document.createElement('a');
            link.href = 'cartitabrid.pdf';
            link.download = 'cartitabrid.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

