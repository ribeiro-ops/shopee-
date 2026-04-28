//quais ações o carrinho pode fazer
//adicionar item no carrinho
async function addItem(userCart) {
    userCart.push(item);
}
//calcular o total
async function calcularTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(result);
}
//deletar item do carrinho
async function deleteItem(userCart, name) {
    
}
//remover um item
async function removerItem(userCart, index) {
    
}


export{addItem, calcularTotal, deleteItem, removerItem };