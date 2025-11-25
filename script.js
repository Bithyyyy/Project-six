const celsiusValValue = document.getElementById("celsius")
const fahrenheitValue = document.getElementById("fahrenheit")
const kelvinValue = document.getElementById("kelvin")

let isEditing = false;
//for conversion
document.getElementById("celsius").addEventListener("input",()=>{
    const celsius = parseFloat(document.getElementById("celsius").value)
    //console.log(celsius)
    if(isEditing) return;
    isEditing = true;

    const fahrenheit = ((celsius * 9/5) + 32).toFixed(2)
    document.getElementById("fahrenheit").value = fahrenheit

    const  kelvin = (celsius+ 273.15).toFixed(2)
    document.getElementById("kelvin").value = kelvin
    isEditing = false;
   
})

document.getElementById("fahrenheit").addEventListener("input",()=>{
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
    
    if(isEditing) return;
    isEditing = true;


    const celsius = ((fahrenheit - 32) * 5/9).toFixed(2);
    document.getElementById("celsius").value = celsius

    const  kelvin = (celsius+ 273.15).toFixed(2)
    document.getElementById("kelvin").value = kelvin
    isEditing = false
   
})

document.getElementById("kelvin").addEventListener("input",()=>{
    const kelvin = parseFloat(document.getElementById("kelvin").value)
    
    if(isEditing) return;
    isEditing = true;


    const celsius = (kelvin - 273.15).toFixed(2);
    document.getElementById("celsius").value = celsius

    const  fahrenheit = ((kelvin- 273.15) * 9/5 + 32).toFixed(2);
    document.getElementById("fahrenheit").value = fahrenheit
   isEditing = false
})

