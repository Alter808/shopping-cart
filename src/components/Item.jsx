function Item({ item, addCart }) {
  return (
    <div className='product-card animate-fadein'>
      <div className='product-card-img-container'>
        <div className='product-card-img-sub-cont'>
          <img
            className='product-card-img'
            src={item.imageUrl}
            alt='sneaker photo'
          />
        </div>
        <div className='p-8'>
          <div className='product-card-title'>{item.name}</div>
          <p className='product-card-price'>${item.regPrice}</p>
          <p className='product-card-desc'>{item.itemDesc}</p>
          <button
            onClick={() => addCart(item)}
            className='btn btn-green rounded-full'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
