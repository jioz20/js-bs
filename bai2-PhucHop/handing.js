
//Lay bang ten Tag
let title = document.getElementsByTagName('h1');
title[0].innerHTML = "Anonymous"


//lay bang id
let caroul = document.getElementById('caroul');
caroul.innerHTML = "Anonymous by ID"


console.log("aaa");
//Lay bang class

let items = document.getElementsByClassName('items');

for(let i = 0; i < items.length; i ++)
{
    let b = i + 1;
    items[i].innerHTML = "Anonymous by ClassName Items " + b;
}


// querySelectorAll

let a = document.querySelectorAll('.container .items');

for(let i = 0 ; i < a.length; i++)
{
    if(i % 2 == 0)
    {
        a[i].innerHTML = '<button>Run ' + i + '</button>';
    }
    
}
