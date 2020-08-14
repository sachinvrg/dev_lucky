function add()
{
    let val=document.getElementById("input");
    let app=document.getElementById("ul");
    let newE=document.createElement("li");
    //let remove=document.createElement("button");
    newE.innerHTML=`<input type='checkbox'>${val.value}&nbsp&nbsp&nbsp<button type="click" class="rebtn">remove</button>`;
    app.appendChild(newE);
    //app.appendChild(remove);
}




