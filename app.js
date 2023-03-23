const express = require("express");
let app = express();
const {products} = require("./data")

app.get("/",(req,res)=>{
    res.send('<h1>Home page </h1> <a href="/api/products">products </a>')
})
app.get("/api/products",(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return  {id,name,image}
    })
res.json(newProducts)
})

app.get("/api/products/:productID",(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product)=>
        product.id === Number(productID)
    )
    if(!singleProduct){
        return res.status(404).send("Product Does Not Exist")
    }
    res.json(singleProduct)
})

app.get("/api/v1/query",(req,res)=>{
    console.log(req.query);
    res.send("Hello world")
})

app.listen(5001, ()=>{
    console.log("Server is listening to port 5001");
})