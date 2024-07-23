const mongoose = require("mongoose")
main()
.then(()=>{
    console.log("connection success")
})
.catch((err)=>{
    console.log(err)
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}
const orderschema = new mongoose.Schema({
    item : String ,
    price : Number ,
}) ;

const order = mongoose.model("Order" , orderschema);
const customerschema = new mongoose.Schema({
    username :  String ,
    orders : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : order
        },
    ] ,
}) ;
// const addorder = async()=>{
//     await order.insertMany([
//         {
//         item : "chocolate" ,
//         price : 56 ,
//         },
//         {
//             item : "toou" ,
//             price : 90 ,
//         },
//         {
//             item : "jes" ,
//             price : 45 ,
//         },
//     ])
// }
const customer = mongoose.model("Customer" , customerschema);
// const addcustomer = async()=>{
//     let cust1 =  new customer({
//         username : "raha"
//     })
//     let order1 = await order.findOne({item : "chocolate"})
//     let order2 = await order.findOne({item : "jes"})
//     cust1.orders.push(order1)
//     cust1.orders.push(order2)
//     let res = await cust1.save() ;
//     console.log(res)
// }
//addorder() ;
// addcustomer();


//////////////////using populate ///////////////
const findcustomer = async ()=>{
    let res = await customer.find({}).populate("orders")
    console.log(res[0])
}
findcustomer() ;