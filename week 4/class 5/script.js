api_key = "http://api.weatherapi.com/v1/current.json?key=36717966e1d6486e88452016240107&q="
const searchValue = document.getElementById("value")
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    console.log(searchValue)
    e.preventDefault();
    if(searchValue.value != ""){
        callApi(searchValue.value)
    }


})

const callApi= (city) =>{
    fetch(api_key+city)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        document.getElementById("city").innerText = data.location.name
        document.ge
    })
}

