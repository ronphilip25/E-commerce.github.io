import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img src="/assets/bg3.jpg" class="card-img" alt="..." height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">SHOP NOW</h5>
            <p className="card-text lead fs-2">
             CHECK OUT ALL THE TRENDS
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Home