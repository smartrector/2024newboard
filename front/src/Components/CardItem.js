import React from "react";

function CardItem({product}) {
  return <div className="border py-4 px-2">{product.title}</div>;
}

export default CardItem;
