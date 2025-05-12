// storing the varibles 

const weatherCity = document.querySelector(".weatherCity");
const searchBtn = document.querySelector(".search-btn");
const tempH1 = document.querySelector(".tempH1");
const humidH1 = document.querySelector(".humidH1");
const latitudeH1 = document.querySelector(".latitudeH1");
const longitudeH1 = document.querySelector(".longitudeH1");
const City = document.querySelector(".City");


    // in a function passing the city name value through the city argument value;
function renderData(city) {
    // creating a async function to hold the promises and the response 
    async function fetchingFunc () {
        // use the try methods in the asynscs function to try it like it is the best methods// 
        try{
            const data = await fetch(  // await the urls  and use the templetet string: and import the city name through the parameter;
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=93Y5PBPC3H2UWBWWP433VGUZ8`
            );

            const data1 = await data.json();  // transfer the data into the json.
            
            // used dom to render to the html ; 

            // append the json value to the each elements 

            City.textContent = city; // getting the city name; 
            tempH1.textContent = Math.round((data1.currentConditions.temp - 32 ) *(5/9)  // to find out the temperature;
         );
            humidH1.textContent = data1.currentConditions.humidity; // getting the currentConditions of the humidity;
            latitudeH1.textContent = data1.latitude;  // getting the latitude 
            longitudeH1.textContent = data1.longitude; // getting the longitude 
        } catch (error){ // if there is a error then send a message 
            alert("Something went wrong");
        }
    }

    fetchingFunc(); // calling the fetch functions; 
}


renderData("Kathmandu");  // rendering the default value 

searchBtn.addEventListener("click",() => {
    renderData(weatherCity.value); // render the input value to the throught the argument and passing to the all apis; and url and functions;
});