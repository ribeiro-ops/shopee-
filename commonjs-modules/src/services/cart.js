// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// calcular o total
async function calcularTotal(userCart) {
    const result = userCart.reduce(
        (total, item) => total + item.subtotal(),
        0
    );

    console.log("\n💰 Total:", result);
}

// deletar item do carrinho (remove tudo)
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover apenas 1 unidade
async function removerItem(userCart, index) {
    if (userCart[index].quantity > 1) {
        userCart[index].quantity -= 1;
        return;
    }

    if (userCart[index].quantity === 1) {
        userCart.splice(index, 1);
    }
}

// mostrar carrinho (muitos da DIO usam isso no index, mas vou incluir)
async function displayCart(userCart) {
    console.log("\n🛒 Shopee cart list:");

    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`
        );
    });
}

export {
    addItem,
    calcularTotal,
    deleteItem,
    removerItem,
    displayCart
};
