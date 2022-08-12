import React from 'react';
import Helmet from 'react-helmet';
import { Header, Segment } from 'semantic-ui-react';
import { RouteProps } from 'react-router';
import ListProductsCart from '../../Components/ListProducts/ListProducts';

const Cart:React.FC<RouteProps> = () =>{
    return(
        <div className='helmet' >
        <Helmet >
            <title>Carrinho</title>
        </Helmet>
        <ListProductsCart/>
        </div>
    )

}
export default Cart;