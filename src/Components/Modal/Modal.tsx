import React from "react";
import Helmet from 'react-helmet'
import { Button, Divider, Header, Icon, Image, Label, Modal, Statistic } from 'semantic-ui-react';
import Product from "../../Pages/Home/Products";
import { FiShoppingCart } from "react-icons/fi";
import './styles.css'
interface ModalProps{
    onClose:Function
    onAdd: Function
    open: boolean
    product: Product
    isInTheCart: boolean
}
const ModalProduct : React.FC <ModalProps> =({onClose, onAdd, open, product, isInTheCart})=>{
 return (
    <Modal
    className="modal"
    closeIcon
    closeOnDimmerClick={true}
    dimmer='blurring'
    open = {open}
    onClose={()=>onClose()}
    >
    <Modal.Header className="headermd">{product.name}</Modal.Header>
    <Modal.Content className="modalcontent">
        <div className="imgcontent">
        <img src= {product.imageUrl}  className='imgModal'/>
        </div>
   
   <Statistic horizontal color='blue' size='tiny'>
        <Statistic.Label className="labelpr">Preço:</Statistic.Label>
        <Statistic.Value className="priceValue">
            {(product.price).toLocaleString('pt-BR',
            {style:'currency',
             currency:'BRL'
            })}
        </Statistic.Value>
    </Statistic>
    
    </Modal.Content>

    <Modal.Actions className="actionsmodal">
        <Button onClick={()=>onClose()} className='btnVoltar'>Voltar</Button>
        {product && (
            <Button onClick={()=> onAdd(product)}
           
            color= {isInTheCart? 'grey':'blue'} className='onadd'>
                {isInTheCart?' já está no carrinho': 'adicionar ao carrinho'}
                 <FiShoppingCart size={40}/>
            </Button>
        )}

    </Modal.Actions>
    </Modal>
 )   
}
export default ModalProduct