import React from 'react'
import './App.css'

const curDate=new Date().getHours();
// curDate = curDate.getHours();

let greeting='';

const gcolor = {};

if(curDate >= 1 && curDate < 12)
{
    greeting="Good Morning";
    gcolor.color="green";
}
else if(curDate >= 12 && curDate < 19)
{
    greeting="Good Evening";
    gcolor.color="orange";
}            
else
{
    greeting="Good Night";
    gcolor.color="black";
}
export default function App(){
        return(
            <>
            <div>

            <h1> Hello Sir, <span style={gcolor}>{greeting}</span></h1>
            
            </div>
            </>
        );    
}