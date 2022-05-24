const formatMoney = (val) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
    .format(val)
    .replace(/\D00(?=\D*$)/, '')
  return formattedPrice
}

export default formatMoney
