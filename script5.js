let input=document.querySelector(".product_name");
let submit=document.createElement("button");
document.body.appendChild(submit);



submit.innerHTML="Submit";
submit.style.backgroundColor="pink";

let result=document.querySelector(".result");
let product =input.value;
result.innerHTML="";

 submit.addEventListener("click",async()=>{
    try {
        let response= await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
        {
               method:"GET",
               body:JSON.stringify(),
               header:{
                   "Content-type":"application/json"
               }
    })
    let data=await response.json();
    console.log(data);
    if(data[0].brand==null){
        alert("Invalid Brand name");
    }else{
         result.innerHTML=`
    <div class="content">
     <h6>ID: ${data[0].id}</h6>
     <h6>Brand: ${data[0].brand}</h6>
     <h6>Product-Link: ${data[0].product_link}</h6>
     <h6>Category: ${data[0].category}</h6>
     <h6>Image-Link: ${data[0].image_link}</h6>
     <h6>Price: ${data[0].price}$</h6>
     </div>`
    }
    } catch (error) {
        alert("Brand is not available");
        
    }
 })