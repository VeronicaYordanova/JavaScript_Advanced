function personalBMI(name, age, weight, height) {
    let bmi = weight/ Math.pow(height/ 100, 2);
    let status = '';

    if(bmi < 18.5){
        status = 'underweight';
    }
    else if(bmi < 25){
        status = 'normal';
    }
    else if(bmi < 30){
        status = 'overweight';
    }
    else if(bmi >= 30){
        status = 'obese';
    }


    let mainObject = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(bmi),
        status: status
    };

    if(status === 'obese'){
        mainObject['recommendation'] = 'admission required';
    }

    return mainObject;
}

console.log(personalBMI('Honey Boo Boo', 9, 57, 137));;