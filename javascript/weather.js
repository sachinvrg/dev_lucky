window.addEventListener('load',()=>{
    let long;
    let lati;
    let tempratureDescription=document.querySelector(".temprature-description");
    let tempratureDegree=document.querySelector(".temprature-degree");
    let locationCity =document.querySelector(".location-city");
    //let icon=document.querySelector(".icn");
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lati=position.coords.latitude;

            const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=f41882887419b3e063e8f0c8b2e3e5e0`

            fetch(api)
            .then(Response =>{
                return Response.json();
            })
            .then(data =>{
                console.log(data);
                const temp = data.main.temp;
                tempratureDegree.textContent=temp;
                const des =data.weather[0].description;
                tempratureDescription.textContent=des;
                const city =data.name;
                locationCity.textContent=city;
                const icon=data.weather[0].description; 
                setIcons(icon,document.querySelector(".icon"));


            });
        });
    }

    function setIcons(icon,iconID){
        console.log(icon);
        const skycons=new Skycons({color:" solid black"});
        const currentIcon=icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);

    }

});