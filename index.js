document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-btn');
    const cartItems = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    let total = 0;

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const name = item.dataset.name;
            const price = parseFloat(item.dataset.price);

            const li = document.createElement('li');
            li.textContent = `${name} - $${price}`;
            cartItems.appendChild(li);

            total += price;
            totalSpan.textContent = total.toFixed(2);
        });
    });
});