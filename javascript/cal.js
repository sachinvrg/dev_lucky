
    console.log("this is api");

    let mybtn=document.getElementById("mybtn");

    let content=document.getElementById("content");

    /*function getData(){

         url="chinu.txt";
        fetch(url).then((Response)=>{
            
            return Response.text();
        }).then((data)=>{
            
            document.write(data);
        })
    }*/


    function getData(){

        url="https://jsonplaceholder.typicode.com/posts";
       fetch(url).then((Response)=>{
           
           return Response.json();
       }).then((data)=>{
           
           console.log(data);
       })
   }

   function postData(){

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
}
    


    






