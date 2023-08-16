const express=require('express');

const cors = require('cors')
const router=require('./routes/productRoute')
const routerA =require('./routes/authenticationRoute')
const app = express();

app.use(cors());
app.use("/products",router.prodRoutes);
app.use("/",routerA.authRoute);



app.listen(process.env.PORT , () => {
    console.log("server listening on port 8080");
})
