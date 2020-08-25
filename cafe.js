

var allItems=document.querySelectorAll('.item_img');

var len1=document.querySelectorAll('#item1');

cupcakes=()=>{

    console.log("helloooo");

    num=len1.length;
    document.getElementById("items").innerHTML=null;
    for(i=0;i<num;i++)
    {
        document.getElementById("items").innerHTML+=`<div>${len1[i].innerHTML}</div>`;
    }
}

all_items=()=>{

    let len=allItems.length;
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


searchContent=()=>{

    let Val=document.getElementById("input");
    console.log(typeof Val.value);

    if(Val.value=='cupcakes'||Val.value=='cupcake'){
         cupcakes();
    }
    else if(Val.value=='brownies'||Val.value=='brownie'){
         brownies();
    }
    else if(Val.value=='cakes'||Val.value=='cake'){
         cakes();
    }
    else if(Val.value=='sweets'||Val.value=='sweet'){
        sweets();
    }
    else if(Val.value=='cold coffee'||Val.value=='cold coffees'){
        cold_coffees();
    }
    else if(Val.value=='hot coffee'||Val.value=='hot coffees'){
        hot_coffees();
    }
    else if(Val.value=='juice'||Val.value=='fruit juice'){
        juice();
    }
    else if(Val.value=='shakes'||Val.value=='fruit shake'){
        shakes();
   }

}

add=()=>{
 
    
}





