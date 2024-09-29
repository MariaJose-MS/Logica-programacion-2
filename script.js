//Temperature converter Main Function

function calculateTemperature(input, conversion) {
    let temperature = "";

    //Switch to determine to which unit to convert the temperature to
    switch (conversion) {
        case "F": //If the user selects Celsius to Fahrenheit
            temperature = (input * (9 / 5)) + 32;
            break;
        case "K": //If the user selects Celsius to Kelvin
            temperature = input + 273.15;
            break;
    }
    return temperature;
}

//Function for the conversion once the user sends the form

function convertInputDegree() {

    //Get the input value as a temperature
    let inputDegree = parseFloat($("#inputDegree").val()); //Degrees (input by user)
    let conversionType = $("#selectConversionType").val(); //Conversion Type (F or K)

    //Not-a-Number input alert
    if (isNaN(inputDegree)) {
        $("#convertedDegree").text("Invalid input. Please enter a valid number.");
        return;
    }

    //Invoke the Main Function
    let resultValue = calculateTemperature(inputDegree, conversionType);

    //Update the Degree Unit (F or K)
    $("#convertedUnit").text(conversionType);

    //Display the final result with 2 decimals
    $("#convertedDegree").text(resultValue.toFixed(2));
}

//Handle the form submit event
$('form').submit(function (event) {
    event.preventDefault(); //Prevent the page from reloading when the form is submitted
    convertInputDegree(); //Execute the conversion function
});