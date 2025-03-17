import React from "react";
import SingleItem from "./SingleItem";
const ItemList = ({title, itens}) => {
    console.log(itens)
    return (
<div className="item-list">
        <div className="item-list__header">
          <h2>{title} populares</h2>
          <a className="item-list__link" href="/">
            Mostrar tudo
          </a>
        </div>

        <div className="item-list__container">
       {Array (itens). fill().map(() => <SingleItem/>)}
        </div>
      </div>
        );
    };
    
    export default ItemList;