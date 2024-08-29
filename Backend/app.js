const dotenv=require('dotenv')

dotenv.config()
const path=require('path')



const express=require('express')

const bodyParser=require('body-parser')


const sequelize= require('./database/database')

const helmet=require('helmet')

const fs=require('fs')

const morgan=require('morgan')

const authRoute=require('./route/route')

const orderRoute=require('./route/order')

const passwordRoute=require('./route/password')

const cors=require('cors');

const Auth=require('./model/auth')

const Expense=require('./model/expense')

const Order=require('./model/order')

const ForgotPasswordRequest=require('./model/forgotPasswordRequest')



const app = express();


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

Auth.hasMany(Expense)
Expense.belongsTo(Auth)

Auth.hasMany(Order)
Order.belongsTo(Auth)

Auth.hasMany(ForgotPasswordRequest)
ForgotPasswordRequest.belongsTo(Auth)

app.use(authRoute)
app.use(orderRoute)
app.use(passwordRoute)

const _dirname=path.dirname("")
const buildPath=path.join(_dirname,"../Frontend/expense-tracker/build")

app.use(express.static(buildPath))

app.use((req,res)=>{
    res.sendFile(
        path.join(__dirname,"../Frontend/expense-tracker/build/index.html")
    )
})
const accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})

app.use(helmet()) 
app.use(morgan('tiny'))

sequelize.sync()
.then(result=>{ 
    //console.log(result) 
    const port=process.env.PORT||3000
    app.listen(port, () => {
        console.log(`Sample app listening at http://51.20.129.197:${port}`)
     })
})
.catch((error)=>{
    console.log(error)
})

 