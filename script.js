function predict(){

var checked = document.querySelectorAll('input[type=checkbox]:checked');

var symptoms = [];

checked.forEach(function(item){
symptoms.push(item.value);
});

var disease="Unknown Disease";

if(symptoms.includes("fever") && symptoms.includes("cough") && symptoms.includes("breath")){
disease="COVID-19";
}

else if(symptoms.includes("fever") && symptoms.includes("body_pain") && symptoms.includes("chills")){
disease="Malaria";
}

else if(symptoms.includes("rash") && symptoms.includes("fever")){
disease="Dengue";
}

else if(symptoms.includes("vomiting") && symptoms.includes("diarrhea") && symptoms.includes("stomach_pain")){
disease="Food Poisoning";
}

else if(symptoms.includes("headache") && symptoms.includes("nausea")){
disease="Migraine";
}

document.getElementById("result").innerHTML="Possible Disease: "+disease;

}
