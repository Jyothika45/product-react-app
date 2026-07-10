import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAllProducts = () => {
const [data,changeData] = useState(
  [
 { "name": "Wireless Headphones", "brand": "Sony", "img": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", "price": "4,999", "stock": "Available", "qnty": 25 },
  { "name": "Smartphone", "brand": "Samsung", "img": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", "price": "22,999", "stock": "Available", "qnty": 15 },
  { "name": "Laptop", "brand": "Lenovo", "img": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", "price": "59,999", "stock": "Available", "qnty": 10 },
  { "name": "Smart Watch", "brand": "Apple", "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "price": "34,999", "stock": "Available", "qnty": 8 },
  { "name": "Bluetooth Speaker", "brand": "JBL", "img": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500", "price": "3,499", "stock": "Available", "qnty": 30 },
  { "name": "Running Shoes", "brand": "Nike", "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", "price": "5,999", "stock": "Available", "qnty": 18 }
  ]
)
  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row">

{data.map((value, index) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3"
      key={index}
    >
      <div className="card h-100 shadow-sm">
        <img
          src={value.img}
          className="card-img-top"
          alt={value.name}
          style={{
            height: "220px",
            objectFit: "cover"
          }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{value.name}</h5>

          <p className="card-text">
            <strong>Brand:</strong> {value.brand}
          </p>

          <p className="card-text">
            <strong>Price:</strong> ₹{value.price}
          </p>

          <p className="card-text">
            <strong>Stock:</strong> {value.stock}
          </p>

          <p className="card-text">
            <strong>Quantity:</strong> {value.qnty}
          </p>

          <button className="btn btn-primary mt-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
})}










        </div>
      </div>
    </div>
  )
}

export default ViewAllProducts