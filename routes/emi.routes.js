const express=require("express")
const { EmiModel } = require("../model/emi.model")
const emiRouter=express.Router()

emiRouter.get("/emical",async(req,res)=>{
    try{
        const {loan,annual,tenure}=req.query
        loan=+loan
        annual=+annual
        tenure=+tenure
    const rate=(annual/100)/12
    
    const emi = loan * rate* (1 + rate)**tenure / ((1 + rate)**tenure - 1) 
   
   const interest_pay=emi*tenure-loan;
   const total_payment=emi*tenure
   let data={
    emi:emi.toFixed(2),
    interest_pay:interest_pay.toFixed(2),
    total_payment:total_payment.toFixed(2)
   }
    
    res.status(200).send(data)
}catch(error){
    res.status(400).send({"err":error.message})
}
})

module.exports={emiRouter}