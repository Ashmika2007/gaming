document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const itemName = button.getAttribute("data-name");
            const itemPrice = button.getAttribute("data-price");

            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems.push({ name: itemName, price: itemPrice });
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            alert(`${itemName} added to the cart.`);
            window.location.href = "cart.html";
        });
    });
});
