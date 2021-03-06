import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css';
const SingleProduct = (props) => {
    console.log(props.product);
    const {setCartCount} = props;
    return (
        <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1500"  className='col-md-4'>
            <div className="card p-2 border m-2">
                <img className='w-50 m-auto' height={250} src={props.product.image} alt="" />
              <h1>{props.product.title.slice(0,10)}</h1>
              <div className='d-flex justify-content-around'>
              <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
              <button className='btn btn-danger'>Delete</button>
              {/* <button className='btn btn-info'>Details</button>  */}
              <ReactModal product={props.product}></ReactModal>
             </div>   
            </div>
        
        </div>
    );
};

export default SingleProduct;