import { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productsactions";

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getProducts)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Fragment>
      <MetaData title={'Buy Best products'} />
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row"> 
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
           <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="./images/products/1.jpg"
              alt=""
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="/#">
                  OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage)
                </a>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$245.67</p>
              <a href="/#" id="view_btn" className="btn btn-block">
                View Details
              </a>{" "}
            </div>
          </div>
        
        </div>
        
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="./images/products/2.jpg"
              alt=""
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="/#">
                  WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery
                  life, V
                </a>
              </h5>
              <div className="ratings mt-auto">
                {" "}
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              I <p className="card-text"> "$150.32</p>
              <a href="/#" id="view_btn" className="btn btn-block">
                View Details
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="./images/products/3.jpg"
              alt=""
            />

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="/#">
                  Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB
                </a>
              </h5>
              <div className="ratings mt-auto">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$440.57</p>
              <a href="/#" id="view_btn" className="btn btn-block">
                View Details
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Fragment>
  );
}
