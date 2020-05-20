import React, { Component } from 'react';
import Products from './products.component'

export default class shop extends Component{

    render() {
        return(
            <div>
                <h1>available products</h1>
                <Products/>
            </div>
        )
    }

}