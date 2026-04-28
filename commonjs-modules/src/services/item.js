//casos de uso dos itens
//criar item comsubtotal certo
async function createItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export default createItem;