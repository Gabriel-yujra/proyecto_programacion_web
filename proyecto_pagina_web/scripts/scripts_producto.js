

document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    document.querySelectorAll('.añadir-carrito').forEach((button, index) => {
        button.addEventListener('click', () => {
            const producto = button.closest('.producto');
            const nombre = producto.querySelector('h3').innerText;
            const precio = parseFloat(producto.querySelector('.precio').innerText.replace('$', ''));
            const cantidad = parseInt(producto.querySelector('.cantidad').value);

            const itemIndex = carrito.findIndex(item => item.nombre === nombre);
            if (itemIndex > -1) {
                carrito[itemIndex].cantidad += cantidad;
            } else {
                const item = {
                    nombre,
                    precio,
                    cantidad
                };
                carrito.push(item);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(`Añadido ${cantidad} de ${nombre} al carrito.`);
        });
    });
});



