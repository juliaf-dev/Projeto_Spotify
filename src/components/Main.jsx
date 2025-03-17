import React from "react";
import ItemList from "./itemList";


const Main = () => {
  return (
    <div className="main">

      <ItemList title="Artistas" itens={5}/>

      <ItemList title="Musicas" itens={10}/>

    </div>
  );
};

export default Main;
