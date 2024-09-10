
function contentLoader() {
    fetch('/templates/recursos/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenidoHeader').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el header:', error));

    fetch('/templates/recursos/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenidoFooter').innerHTML = data;
        })
        .catch(error => console.log('Error al cargar el footer', error));
}



document.addEventListener('DOMContentLoaded', contentLoader);