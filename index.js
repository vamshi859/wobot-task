const express=require ("express")
const app=express()
const cors=require ("cors")
app.use(cors({origin:"*"}))
const bodyParser=require('body-parser');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
var dbconnection=require('./db')
var userRoutes=require('./routes/userRouter')
var productRoutes=require('./routes/productRouter');

app.get('/',(req,res)=>{
    res.send("hello world")

})


app.use('/',userRoutes)
app.use('/product',productRoutes)

app.listen(5000,()=>{
    console.log('server started')
})