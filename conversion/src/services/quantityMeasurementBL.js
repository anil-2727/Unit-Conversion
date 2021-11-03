/**
 * ****************************************************************************
 * Purpose: The purpose of this program to measure the quantities like lenght,
 * temperature, and vovume.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 30-08-2021
 * ****************************************************************************
 */

 var readLine = require('readline-sync');

 let lenghtUnitsList = {
    milliMeter: 0,
    centiMeter: 1,
    meter: 2,
    kiloMeter: 3
 }

 let lengthScale = {
    milliMeter: [1, 0.1, 0.001, 0.000001],
    centiMeter: [10, 1, 0.01, 0.00001],
    meter: [1000, 100, 1, 0.001],
    kiloMeter: [100000, 10000, 1000, 1]
 }

 exports.measureLength = (userInput, valueIn, measureTo ) => {
   let mTo = lenghtUnitsList[measureTo];
   let val = lengthScale?.[valueIn]?.[mTo];
    return val * userInput;
 }

 //---------------Volume MEasurement-------------- /

 let volumeUnitsList = {
   liter: 0,
   milliLiter: 1,
   cubicInch: 2,
   cubicFoot: 3,
   cubicMeter: 4
}

let volumescale = {
   liter: [1, 1000, 61.0237, 0.0353147, 0.001],
   milliLiter: [0.001, 1, 0.0610237, 3.5315e-5, 1.000009439999746419e-6],
   cubicInch: [0.01638721869388, 16.387218693880004849, 1, 0.00057870916666651994568, 1.638721869388000575e-5],
   cubicFoot: [28.317113903024644372, 28317.113903024648607, 1728.0163123195618482, 1, 0.028317113903024646038],
   cubicMeter: [1000.0094399997462915, 1000009.4399997463915, 61024.320158861060918, 35.315000091933484327, 1]
}

exports.measureVolume = (userInput, valueIn, measureTo) => {
  let mTo = volumeUnitsList[measureTo];
  let val = volumescale?.[valueIn]?.[mTo];
  return val * userInput;
}

//------------------- Temperature Measurement -----------------/

exports.tempMeasurement = (userInput, valueIn, measureTo) => {

   switch (valueIn) {
       case "fahrenheit":
           if (measureTo == "celsius")
               return (userInput - 32) / 1.8;
           else if (measureTo == "kelvin")
               return ((userInput - 32) / 1.8) + 273.15;
           else
               return 1;
           break;
       case "celsius":
           if (measureTo == "fahrenheit")
               return (userInput * 1.8) + 32;
           else if (measureTo == "kelvin")
               return (userInput * 2) + 273.15 - userInput;
           else
               return 1;
           break;
       case "kelvin":
           if (measureTo == "fahrenheit")
               return ((userInput - 273.15) * 1.8) + 32;
           else if (measureTo == "celsius")
               return userInput - 273.15;
           else
               return 1;
           break;

   }
}