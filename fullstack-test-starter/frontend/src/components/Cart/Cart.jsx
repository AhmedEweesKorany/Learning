import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import CartVisible from "../../Context/CartVisible";
import QunatityContext from "../../Context/QuantityContext";
import toast from "react-hot-toast";
import client from "../../ApolloClient";
import { gql } from "@apollo/client";

const Cart = ({ className }) => {
  const [cartData, setCartData] = useContext(CartContext); 
  const [cartVisible, setCartVisible] = useContext(CartVisible);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice)
  const [quan, setQuan] = useState({});
  const [quantity,setQuantity] = useContext(QunatityContext)
  console.log(cartData)
  const [attributes,setAttributes] = useState({
}) 

useEffect(()=>{
  cartData?.map((item,i)=>{
    setTotalPrice(totalPrice +(item.price))
    setQuantity(quantity+1)
    for(let j = i+1 ; j<cartData.length; j++){
      if(JSON.stringify(cartData[i].selectedAttr) == JSON.stringify(cartData[j].selectedAttr)){
        ++item.quantity
        setQuan({...quan,[JSON.stringify(cartData[i].selectedAttr)]:quan[JSON.stringify(cartData[i].selectedAttr)] ? quan[JSON.stringify(cartData[i].selectedAttr)] + 1 : 2})
        cartData.splice(j,1)
      }
    }
  })
},[cartData])

// delete one item from cart 
const deleteItem = (id)=>{
  console.log("true") 
  setCartData(cartData.filter((item,i)=>{
    return JSON.stringify(item.selectedAttr) !== id
  }))
  
}

// handle insert order 
const handleInsertOrder = ()=>{
  if(quantity == 0){
    return toast.error("Can't add Empty Order")
  }else{
    client
  .mutate({
    mutation: gql`
      mutation CreateOrder($details: String!, $status: String!, $total: Float!) {
        createOrder(details: $details, status: $status, total: $total) 
      }
    `,
    variables: {
      details: JSON.stringify(cartData), // or your dynamic data
      status: "pending", // or your dynamic data
      total: totalPrice, // or your dynamic data
    },
  })
  .then((result) => {
    toast.success(result.data.createOrder);
    setCartData([])
    setQuantity(0)
    setTotalPrice(0)
    // Handle success, like updating the UI or storing the order ID
  })
  .catch((error) => {
    console.error(error);
    // Handle error case
  });

  }
}
  return (
    cartVisible && (
      <div className="absolute top-10 right-0 w-[325px] h-[628px]  bg-white z-20 px-4 flex flex-col gap-4  " data-testid='cart-item-attribute-${attribute name in kebab case}'>
        <h1 className="text-lg mt-3">
          <span className="font-bold">My Bag,</span> {quantity} item
          {quantity > 1 && "s"}
        </h1>

       <div className="h-[500px] overflow-y-auto flex flex-col gap-20 pb-2 justify-between">
       {cartData.length > 0 &&
          cartData.map((item, i) => {
            console.log(item);
            
            return (
              <>
                <div className="flex gap-2 justify-between  ">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[30px] ">{item.name}</h1>

                    <p className="text-[16px] font-bold">
                      {item.currency}
                      {item.price}
                    </p>

                    {item.attributes?.map((attr, i) => {
                      console.log(attr);
                      return (
                      <>
                      
                      <div data-testid={`cart-item-attribute-${attr.id.toLowerCase()}`}>
                        <h2 className="text-xl cursor-default ">{attr.id}:</h2>
                          <ul className="flex gap-1 flex-wrap">
                            {JSON.parse(attr.items).map((pr,i)=>{
                              console.log(pr)
                                return attr.type == "swatch" ? (
                                    <>
                                <li  
  key={i} 
  data-testid={
    item?.selectedAttr[attr.id] === pr.value 
      ? `cart-item-attribute-${attr.id.replace(/\s+/g, '-').toLowerCase()}-${pr.id.replace(/\s+/g, '-').toLowerCase()}-selected` 
      : `cart-item-attribute-${attr.id.replace(/\s+/g, '-').toLowerCase()}-${pr.id.replace(/\s+/g, '-').toLowerCase()}`
  }
  className={`${item?.selectedAttr[attr.id] === pr.value ? "border-4 border-green-500" : ""} w-[20px] h-[20px] cursor-default`}
  onClick={() => setAttributes({...attributes, [attr.id]: pr.value})}
  style={{ background: `${pr.displayValue}` }}
  
>
</li>

                                    </>
                                  ) : (
                                    <>
                                     <li key={i}  data-testid={
    item?.selectedAttr[attr.id] === pr.value 
      ? `cart-item-attribute-${attr.id.replace(/\s+/g, '-').toLowerCase()}-${pr.id.replace(/\s+/g, '-').toLowerCase()}-selected` 
      : `cart-item-attribute-${attr.id.replace(/\s+/g, '-').toLowerCase()}-${pr.id.replace(/\s+/g, '-').toLowerCase()}`
  } className={`${item?.selectedAttr[attr.id] == pr.value ? "bg-black text-white":""} border-2 cursor-default  border-black p-1 w-[30px] h-[30px] text-[10px] font-bold flex justify-center items-center min-w-fit`}  onClick={()=>{
                
                setAttributes({...attributes,[attr.id]:pr.value})
              }}>
                {pr.displayValue}
</li>
                                    </>
                                  )
                            })}
                          </ul>
                        </div>
                      </>
                      );
                    })}
                  </div>
                        
                  <div className="flex flex-col justify-between">
                  <div
  className="w-[30px] h-[30px] border-2 border-black flex items-center justify-center"
  id="+"
  onClick={() =>{
    setTotalPrice(totalPrice +(item.price))
    setQuantity(quantity + 1)
    ++item.quantity
    setQuan({
      ...quan,
      [JSON.stringify(item.selectedAttr)]: quan[JSON.stringify(item.selectedAttr)] !== undefined ? quan[JSON.stringify(item.selectedAttr)] + 1 : item.quantity, 
    })
  }
  }

  data-testid='cart-item-amount-increase'
>
  +
</div>

<p data-testid='cart-item-amount'>{quan[JSON.stringify(item.selectedAttr)] !== undefined ? quan[JSON.stringify(item.selectedAttr)] : 1}</p> 

<div
  className="w-[30px] h-[30px] border-2 border-black flex items-center justify-center"
  onClick={() =>
   {
    setTotalPrice(totalPrice -(item.price))
    setQuantity(quantity - 1)

    if(quan[JSON.stringify(item.selectedAttr)] === undefined || quan[JSON.stringify(item.selectedAttr)]  == 1){
      deleteItem(JSON.stringify(item.selectedAttr))}


      if(quan[JSON.stringify(item.selectedAttr)] > 1 ){
        setQuan({
          ...quan,
          [JSON.stringify(item.selectedAttr)]: quan[JSON.stringify(item.selectedAttr)] - 1, 
        })
      }
      
    
   }
  }

  data-testid='cart-item-amount-decrease'
>
  -
</div>


                  </div>

                  <div>
                    <img src={JSON.parse(item.gallery)[0]} alt={item.name} className="h-full object-contain" />
                  </div>
                </div>
              </>
            );
          })}
       </div>
       <div>
        <div className="flex justify-between items-center">
          <h2>Total</h2>
          <p data-testid='cart-total'>${totalPrice.toFixed(2)}</p>     
        </div>

        <div className="my-4 ">
          <button className={`p-3 bg-green-500 text-white w-full uppercase text-lg ${quantity== 0 && "grayscale cursor-not-allowed"}`} disabled={quantity==0} onClick={()=>{
            handleInsertOrder()
          }}>Place Order </button>
        </div>
       </div>
      </div>
    ) 
  );
};

export default Cart;
