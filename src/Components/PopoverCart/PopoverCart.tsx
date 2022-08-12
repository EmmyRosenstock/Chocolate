import React,{Fragment, useContext, useMemo, useState} from "react";
import {Link} from 'react-router-dom'
import ButtonRemoveItem from "../ButtonRemove/ButtonRemoveItem";
import { Button, Divider, Icon, Image, Label, List, Popup, Segment } from "semantic-ui-react";
import './styles.css'
import { FiShoppingCart,FiArrowRight, FiArrowLeft, FiChevronDown,FiChevronUp, FiTrash2 } from "react-icons/fi";
import { useCard } from '../../Context/CardContext/CartContext';
const PopoverCart: React.FC =() =>{
    const{ products, removeItem} = useCard()
    const [isOpen, setIsOpen] = useState(false)
    const haveProducts = products.length>0
    const totalCartValue = haveProducts ? products
    .map(p=>p.price||0)
    .reduce((accumulator, currentValue)=>accumulator + currentValue):0

    const trigger = (
        <Button fluid color="orange" onClick={() => setIsOpen(!isOpen)} className='buttonpop'>
          {isOpen ? <FiChevronUp size={40}/> : <FiChevronDown size={40}/>} 
          <FiShoppingCart size={40}/>
          {haveProducts && (
            <Label >
              {products.length}
            </Label>
          )}
        </Button>
      );
  
      const ListProducts = useMemo(() => {
        console.log('ENTROU NO MEMO');
    
        return products.map((product, index: number) => (
          <List.Item key={`${index}-PopoverCart-${product.id}`} className='itemList'>
            <div className="prodcard">
              <Image src={product.imageUrl} className='popimg' />
          <List.Content floated="right">
          <strong className="titlepop">{product.name}</strong>
              <Label className="lbPrice">
                {product.price &&
                 (product.price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </Label>
           
            </List.Content> </div>
            
            <br />
          
             </List.Item>
             
        ));
      }, [products, removeItem]);
    
      return (
        <Popup basic  wide trigger={trigger} on="click" open={isOpen} className='popups'>
          <Segment size="massive" className="segments">
            <strong className="mcarrinho"> Meu Carrinho</strong>
            <hr className="hr"/>
            
          </Segment>
    
          <div className='PopoverContent'>
            <List ordered size="massive" divided verticalAlign="middle">
              {ListProducts}
            </List>
            
          </div>
          <p className="total">
            <hr className="hr"/>
              <small>
                {haveProducts ? (
                  <Fragment>
                   
                    <br />
                    {`Total:  `}
                    <b>
                      {totalCartValue.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                     
                    </b>
                      <hr className="hr"/>
                  </Fragment>
                ) : (
                  <Fragment >
                    <br />
                    está vazio ...
                   
                  </Fragment>
                )}
              </small>
            
            </p>
   
            {totalCartValue >=10 &&(<div className="ftg">Parabéns,você ganhou frete grátis!</div>)}
          <Link className="link" to={haveProducts ? 'carrinho' : '/'}>
            <Button color="green" fluid animated className='btnProdutos'>
              <Button.Content visible className="btnfinish">
                {haveProducts ? 'Finalizar Compra' : 'Ver Produtos'}
              </Button.Content>
              <Button.Content hidden>
                {haveProducts ? <FiArrowRight size={20}/> : <FiArrowLeft size={20}/>} 
                
              </Button.Content>
            </Button>
          </Link>
        </Popup>
      );
    };
    
    export default PopoverCart;