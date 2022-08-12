import React from 'react';
import { Grid } from 'semantic-ui-react';
import Loadding from '../Layout/Loadding';
import Product from '../../Pages/Home/Products';
import './style.css'
interface GridProps {
  products: Product[];
  isLoadding: boolean;
  renderProduct: (product: Product) => React.ReactNode;
}

const GridProucts: React.FC<GridProps> = ({ products, isLoadding, renderProduct }) => (
  <Grid container textAlign="center" className='Grid' >
    {isLoadding && <Loadding />}
    {products.map((product, index: number) => (
      <Grid columns={10}>
      <Grid.Row className='GridRow'  key={`${index}-GridProucts-${product.id}`}>
        {renderProduct(product)}
        
      </Grid.Row>
      </Grid>
     
    ))}
  </Grid>
  
);

export default GridProucts;