/// start with set timeout concept and callback of function

//mini task of ice cream project
/*steps
 1. place order
 2. cut the fruit
 3. add water and ice
 4. start the machine
 5. select container
 6. select topping
 7. serve the ice cream
 */

 //let firstly store the ingrideints in the warehouse

 let stocks = {
    Fruits:["Apple", "Mango", "Banana", "Strawberry", "grapes"],
    liquid:["water","ice"],
    Holder:["cup","cone", "stick"],
    Toppings:["choclate", "sprinkles"],
    
 }


 // now all the production of ice cream depends upon the order of the customers
 // how steps followed
//order from customer --> fetch ingridients --> start production --> serve the ice cream

// so here i make a order function which have a parameter that helps to callback the production function
// let order = (call_production)=>{
//     console.log("order placed, please call the production")
//     //call the variable
//    call_production();
// }

// let production = () =>{
//     // below line is printed if production function is called
//    console.log("production has started")
// }
// //trigger
// order(production);




//lets try something different
//call the production by selecting and showing the fruit

// let order = (fruit_name,call_production)=>{
//     setTimeout(function(){
//         console.log(`${stocks.Fruits[fruit_name]} was selected`)

//         //order placed please start the production
//         call_production();

//     },2000)
// }

// let production = ()=>{
//     // console.log("Production is started. Ice Cream ready soon. Thank you!")
// }

// order(0,production)



//now i make logic in which i show the all steps step by step in a time frame with the help of set time out

// let production = ()=>{
//    setTimeout(()=>{
//        console.log('production is started');
//        setTimeout(()=>{
//         console.log('the fruit has been chopped');
//         setTimeout(() => {
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//             setTimeout(()=>{
//                 console.log('start the machine')
//                 setTimeout(() => {
//                     console.log(`ice cream is placed on ${stocks.Holder[1]}`);
//                     setTimeout(() => {
//                         console.log(`${stocks.Toppings[0]} as toppings`)
//                         setTimeout(() => {
//                             console.log('serve the ice cream')
//                         }, 2000);
//                     }, 3000);
                    
//                 }, 2000);
//             },1000)
//         }, 1000);
//        },2000)
       
//    },1000)
// }

// production();

//Now as you see above the code in which timeout and timeout and callback of a function which leads to callback hell. It means to hard to maintain the code and also nested very deep




//for resolving the issue of callback hell there are promises. It has two parts resolve or reject. lets see below

// let is_shop_open = false;
// //pass two parameters  time and work and pass the output based upon two paramenters
// let order = (time,work)=>{
//     return new Promise((resolve,reject)=>{
//           if(is_shop_open){

//             setTimeout(()=>{
//                 //work is getting done here
//                 resolve(work())
//             },time)
            
//           } else{
//             reject(console.log('our shop is closed'));
//             ;
            
//           }

//         })
// }


// //now so far we use promises with the keywords methods then and finally and also with the catch
// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
// .then(()=>{
//     return order(1000,()=>{
//          console.log('production has started');
         
//     })
// })
// .then(()=>{
//     return order(1000,()=>{
//          console.log('Fruits has been chopped');
         
//     })
// })
// .then(()=>{
//     return order(1000,()=>{
//          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
         
//     })
// })
// .then(()=>{
//     return order(2000,()=>{
//          console.log('start the machine');
         
//     })
// })
// .then(()=>{
//     return order(3000,()=>{
//          console.log(`ice cream placed on ${stocks.Toppings[0]} as Toppings`);
         
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//          console.log(`ice cream served`);
         
//     })

// })  
// //iff any error occurs
// .catch(()=>{
//     console.log("customer left");
    
// })
// //runs the code anyways and do the final job and finish it
// .finally(()=>{
//     console.log("end of the day");
    
// })



// now in next we saw about async await 
//with this we saw the try and catch keyword also a finally keyword.
//to make regular function which always retrurn a promise just type the async keyword in front of the function name.
//so  below a function which return a promise in which selection of topping is shwn 
// function topping_choice(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve(console.log("What Toppings would you love?"));
//          },3000)
//     })
// }


// //below you see the async await function but as now just focus on await keyword
// async function kitchen(){
//     console.log("Customer entered");
//     console.log("ordered regular icecream");
//     console.log("no toppings selection");

//     //when we use await keyword it not means js engine or js actually waits for resolving. no, definitely not. so then what it means? it means the function execution is suspended till resolving. so if i print on the console all the statements above await statement is printed imeediately but the statements after await or bundeled inside the function is executed after resolving. 

//     await topping_choice();  
//     console.log("another customer entered");
//     console.log("one customer paid bill");
//     console.log("Customer use a voucher and get 50%off above order of 200");
    
    
    
    
// }

// kitchen();


// console.log("clean the tables ");
// console.log("clean the windows ");
// console.log("clean the floor ");



//now lets back to ice cream make example use the async await.
let shop_is_open = true;
function time(ms){
    return new Promise((resolve,reject)=>{
        if(shop_is_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("shop is closed"));
        }
    })
}

async function kitchen(){
    try{
        //time taken to resolve the promise
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(1000)
        console.log("production started");
        
        await time(2000)
        console.log('fruit has been chopped');

        await time(1000)
        console.log((`${stocks.liquid[0]} and ${stocks.liquid[1]} added`));

        await time(1000)
        console.log('start the machine');

        await time(2000)
        console.log(`ice cream placed on the ${stocks.Holder[1]}`);
        
        await time(3000)
        console.log(`${stocks.Toppings[0]} as toppings`);

        await time(2000)
        console.log('serve the ice cream');
            
    }
    catch(error){
        console.log('Customer left',error);
        
    }
    finally{
        console.log("end of the day. bye bye");
        
    }
}

kitchen()