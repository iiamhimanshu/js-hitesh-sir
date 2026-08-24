const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(form.querySelector("#height").value);

form.addEventListener("submit" , function(e){
    e.preventDefault();
    // ==> this stop the default action of the form when it is submitted

    const height = parseInt(form.querySelector("#height").value);
    const weight = parseInt(form.querySelector("#weight").value);
    const results = document.querySelector("#results");

    // now we will validate the height 
    if(height === "" || height < 0 || isNaN(height) ){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight) ){
        // now we will validate the weight
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        // show the result
        let category = "";
        if(bmi < 18.6){
            category = "Under Weight";
        }else if(bmi >= 18.6 && bmi <= 24.9){
            category = "Normal Range";
        }else if(bmi > 24.9){
            category = "Over Weight";
        }
        results.innerHTML = `<span>${bmi}</span>
        <br>
        <span>Your Category is : ${category}</span>`
    }

})