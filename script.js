function predictDisease(symptom){

let disease="General Illness";
let data=[70,30];

if(symptom=="fever") disease="Viral Fever";
else if(symptom=="cough") disease="Common Cold";
else if(symptom=="headache") disease="Migraine";
else if(symptom=="vomiting") disease="Food Poisoning";
else if(symptom=="cold") disease="Flu";
else if(symptom=="fatigue") disease="Anemia";
else if(symptom=="rash") disease="Skin Allergy";
else if(symptom=="dizziness") disease="Low BP";
else if(symptom=="chestpain") disease="Heart Issue";
else if(symptom=="stomachpain") disease="Gastric Problem";
else if(symptom=="sorethroat") disease="Throat Infection";
else if(symptom=="sneezing") disease="Allergy";
else if(symptom=="bodypain") disease="Viral Infection";
else if(symptom=="nausea") disease="Stomach Infection";
else if(symptom=="diarrhea") disease="Food Poisoning";
else if(symptom=="breathing") disease="Asthma";
else if(symptom=="chills") disease="Malaria";
else if(symptom=="sweating") disease="Fever Infection";
else if(symptom=="jointpain") disease="Arthritis";
else if(symptom=="lossofappetite") disease="Digestive Disorder";
else if(symptom=="blurredvision") disease="Eye Problem";
else if(symptom=="backpain") disease="Spinal Issue";
else if(symptom=="toothpain") disease="Dental Infection";
else if(symptom=="earpain") disease="Ear Infection";
else if(symptom=="anxiety") disease="Stress Disorder";
else if(symptom=="depression") disease="Mental Health Issue";
else if(symptom=="itching") disease="Skin Infection";
else if(symptom=="weightloss") disease="Thyroid";
else if(symptom=="weightgain") disease="Hormonal Disorder";
else if(symptom=="sleepproblem") disease="Insomnia";

document.getElementById("resultBox").innerHTML=
"Possible Disease: "+disease;

drawGraph(disease,data);

}

function drawGraph(disease,data){

const ctx=document.getElementById('diseaseChart').getContext('2d');

new Chart(ctx,{

type:'bar',

data:{

labels:[disease,"Other Diseases"],

datasets:[{

label:'Prediction Probability %',

data:data,

backgroundColor:['#ff4b5c','#36a2eb']

}]

},

options:{responsive:true}

});

}
