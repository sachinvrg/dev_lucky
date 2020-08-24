//let allItems=document.getElementById("items").innerHTML;
//temp=allItems;
//console.log(allItems);

var allItems=document.querySelectorAll('.item_img');
console.log(allItems);

var len1=document.querySelectorAll('#item1');
console.log(len1);

test = () => {
console.log(1);
}

cupcakes=()=>{

    //console.log('cupcakes');
    num=len1.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
        document.getElementById("items").innerHTML+=`<div>${len1[i].innerHTML}</div>`;
    }
}

all_items=()=>{

    let len=allItems.length;
    console.log(len);
    num=len;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${allItems[i].innerHTML}</div>`;
    }
}

let len2=document.querySelectorAll('#item2');

sweets=()=>{
    
    num=len2.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${len2[i].innerHTML}</div>`;
    }
}

let len3=document.querySelectorAll('#item3');

shakes=()=>{
    
    num=len3.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${len3[i].innerHTML}</div>`;
    }
}

let len4=document.querySelectorAll('#item4');

juice=()=>{
    
    num=len4.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${len4[i].innerHTML}</div>`;
    }
}

let len5=document.querySelectorAll('#item8');

cakes=()=>{
    
    num=len5.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${len5[i].innerHTML}</div>`;
    }
}

let len6=document.querySelectorAll('#item5');

hot_coffees=()=>{
    
    num=len6.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${len6[i].innerHTML}</div>`;
    }
}

let len7=document.querySelectorAll('#item6');

cold_coffees=()=>{
    
    num=len7.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${len7[i].innerHTML}</div>`;
    }
}

let len8=document.querySelectorAll('#item7');

brownies=()=>{
    
    num=len8.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
    document.getElementById("items").innerHTML+=`<div>${len8[i].innerHTML}</div>`;
    }
}





