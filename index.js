const { count } = require('console');
const express = require('express');//import express library
const server = express();//set up a server
server.use(express.json());//to send request via post body Raw json
//API#1:Calculate Car Value
server.post('/car_value', (req, res)=>{
    console.log(req.body.model);
    //the code to calculate alphabets is from https://copyprogramming.com/howto/convert-letter-to-number-in-javascript-and-calculator
    res.json({
        "car_value":parseInt(req.body.model.toLowerCase().split('')
        .map(model=>model.charCodeAt(0)-0x60)
        .filter(c => 1 <= c && c <= 26)
        .reduce((x,y)=> x+y, 0)) *100 +parseInt(req.body.year)
        
    });
});
//API#2 Convert Claim History to a Risk Rating
server.post('/risk_rating', (req,res)=>{
        
    const key_words = [];
    console.log(req.body.claim_history);
    
    if(req.body.claim_history.toLowerCase().includes('collide')
    && key_words.includes('collide')==false 
    ){        
        key_words.push('collide')
    }
    if(req.body.claim_history.toLowerCase().includes('crash')
    && key_words.includes('crash')==false 
    ){
        
        key_words.push('crash')
    }
    if(req.body.claim_history.toLowerCase().includes('scratch')
    && key_words.includes('scratch')==false 
    ){
        
        key_words.push('scratch')
    }
    if(req.body.claim_history.toLowerCase().includes('bump')
    && key_words.includes('bump')==false 
    ){
        
        key_words.push('bump')
    }
    if(req.body.claim_history.toLowerCase().includes('smash')
    && key_words.includes('smash')==false 
    ){
        
        key_words.push('smash')
    }
        
    res.json({
        "risk_rating": key_words.length
    });
    
});
//API#3 Convert "Car Value" and "Risk Rating" to a Quote
server.post('/quote',(req,res)=>{
    
    console.log(req.body.car_value);
    
    yearly_premium = Math.trunc((parseInt(req.body.car_value) * parseInt(req.body.risk_rating)) /100);
    monthly_premium=yearly_premium/12;   
    
       
    res.json({
        "monthly_premium": monthly_premium,
        "yearly_premium": yearly_premium
    });
});
//to run the server on port 8001
server.listen(8001,()=>{
    console.log('Server is started and listening on port 8001');
});
