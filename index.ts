#! /usr/bin/env node
import inquirer from "inquirer";
let password=1234;
let totalBal=10000  //$
 let userPinn=await inquirer.prompt(
    [
        {
         name :"pinn",
         type:"number",
         message:"please enter your password :"
        }
    ]
);
if(userPinn.pinn===password){
    let operation=await inquirer.prompt(
        [
            {
                name :"options",
                type:"list",
                message:"select your option",
                choices:["withdraw","balance inquiry"]
            }
        ]
    );
    if(operation.options==="withdraw"){
     let amount =await inquirer.prompt(
        [
            {
                name:"cash",
                type:"list",
                message:" select your optiion :",
                choices:["fast Cash","other"]
            },

        ]
     );
     if(amount.cash==="fast Cash"){
        let cashOption=await inquirer.prompt(
            [
                {
                    name :"rupees",
                    type:"list",
                    message:"select your amount",
                    choices:[1000,2000,3000,5000]


                }
            ]
        );
         totalBal-= cashOption.rupees;
        console.log(`your current balance is :${totalBal}`)
     }
     else{
        let inputAmnt=await inquirer.prompt(
            [
                {
                    name:"inputAmount",
                    type:"number",
                    message :"enter your amount"
                }
            ]
        );
        if(inputAmnt.inputAmount<totalBal){
        totalBal-= inputAmnt.inputAmount;
        console.log(`your current balance is: ${totalBal}`)}
        else{
            console.log(`your balance is insufficient for this amount`)
        }
     }
    }
    else{
        console.log(`your current balance is: ${totalBal}`)
    }
}
else{
    console.log(" please ener write password")
}

