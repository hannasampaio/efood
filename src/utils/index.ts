export const parseToBrl = (number = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number)
}

export const getTotalPrice = (items: { preco: number }[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return accumulator + currentItem.preco
    }
    return accumulator
  }, 0)
}
