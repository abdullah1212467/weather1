const apikey="0b4c03fad16e4e2504cb32c002d815cd"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=lahore"

async function checkweather() {
   const response =await fetch(apiurl + `&appid=${apikey}`)
   let data =await response.json() 
   console.log(data)
   
}
// &appid=0b4c03fad16e4e2504cb32c002d815cd


checkweather()












