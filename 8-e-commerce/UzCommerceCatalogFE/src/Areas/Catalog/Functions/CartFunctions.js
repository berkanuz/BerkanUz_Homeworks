import axios from "axios";

export const GetCart = async () =>
{    
    try {
        var url = `https://localhost:44306/api/cart`
        let res = await axios.get(url)   
         return res.data.data
     }
     catch (err) {
         console.error(err);
     }
}

export const AddToCart = async function(productId)
{  
    console.log("selam")
    var url = `https://localhost:44306/api/cart`
    
    let res =  await axios.post(url, {
        productId
    })
    return res.data
}


export const DeleteFromCart = async function(cartId)
{  
    console.log("selam")
    var url = `https://localhost:44306/api/cart/${cartId}`
    
    let res =  await axios.delete(url)
    return res.data
}
