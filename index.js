



/*Just ingore the UI Design it  I am practice to build logic rather than UI 
I wll fouce UI Next time so please check the logic and improvement you can share me or also chage the code */

 const apikey='e8e8a7dee332eedeb39c128bc96caedd';
  async function fetchWeatherData(city){
   const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
   const data=await response.json();

   weatherUpdate(data);
   
}


const placeName =document.querySelector(".name");
const temperature=document.querySelector("#temp");
const weather=document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");
const day=document.querySelector("#day");


// Upadate the weather //
function weatherUpdate(data){

 placeName.textContent=data.name;
 temperature.innerHTML = `${Math.round(data.main.temp)}&degC`;

 /*temperature.textContent=`${Math.round(data.main.temp&deg,C)}`;*/
 weather.textContent=data.weather[0].main;
 weather.style.fontfamily="monospace";
 weather.style.fontweight="bolder"
 const currentDate=new Date();
 day.textContent=currentDate.toDateString();

}

const btn=document.querySelector(".btn");
const inputElement=document.querySelector(".box");


// function foe deting data 
  function getData(){
    btn.addEventListener('click',()=>{
      const city=inputElement.value;
      if(city!==''){
        fetchWeatherData(city);
        inputElement.value='';
      }
    });
  }
  getData();