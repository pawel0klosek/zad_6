'use strict';

const form = document.querySelector('form');
const BMI = document.querySelectorAll('div')[0];
const result = document.querySelectorAll('div')[1];
const weight = document.querySelectorAll('input')[0];
const height = document.querySelectorAll('input')[1];

form.addEventListener ('submit', (e) => {
    
    //console.log(weight.value);
    //console.log(height.value);

    BMI.innerHTML =(10000 * parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value))).toFixed(2);

    const BMI_Number = parseFloat(BMI.innerText);

    //console.log(BMI_Number);
      
    if (BMI_Number < 16) {
        result.innerHTML = `wygłodzenie`;
        
    }
    
    else if (BMI_Number > 16 &&  BMI_Number <= 16.9) {
        result.innerHTML = `wychudzenie`;
    
    }
    else if (BMI_Number >= 17 && BMI_Number <= 18.5) {
        result.innerHTML = `niedowaga`;
    }
    
    else if (BMI_Number >= 18.6 && BMI_Number <= 24.9) {
        result.innerHTML = `waga prawidłowa`;
    
    }
    else if (BMI_Number > 25 && BMI_Number <= 29.9) {
        result.innerHTML = `nadwaga`;
    
    }
    else if (BMI_Number > 30 && BMI_Number <= 34.9) {
        result.innerHTML = `otyłość I stopnia`;
    
    }
    else if (BMI_Number > 35 && BMI_Number <= 39.9) {
        result.innerHTML = `otyłość II stopnia`;
    
    }
    else {
        result.innerHTML = `otyłość III stopnia`;
        
    };
    
    e.preventDefault();
});


