import React, {Component} from "react";

export default class product extends Component{




    render() {
        const {product,onAddToCart} = this.props;

        return (

                <div className='col-sm-4'>
                    <div className="card text-center" style={{width: "20rem"}}>
                        <img className="card-img-top" src={product.imageUrl} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.item}</h5>
                            <p className="card-text">{product.price}</p>
                            <a  onClick={()=>onAddToCart(product)} className="btn btn-outline-secondary">Add To Cart</a>
                        </div>
                    </div>
                    <br/>
                </div>










        );
    }


}