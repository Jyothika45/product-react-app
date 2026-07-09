import React from 'react'
import NavBar from './NavBar'

const ViewAllProducts = () => {
  return (
    <div>
        <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="row">

              <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    src="https://th.bing.com/th/id/OIP.A3BgySU2RWl6daTr-WYi9wHaE7?w=305&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    src="https://th.bing.com/th/id/OIP.A3BgySU2RWl6daTr-WYi9wHaE7?w=305&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    src="https://th.bing.com/th/id/OIP.A3BgySU2RWl6daTr-WYi9wHaE7?w=305&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 mt-3">
                <button className="btn btn-danger">SELECT</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllProducts