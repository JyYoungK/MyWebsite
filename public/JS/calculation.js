const URL = "../animal_model/";
const URL2 = "../mf_model/";

let labelContainer, model, maxPredictions, mfmodel, mfmaxPredictions;
var testImage = document.getElementById("face-image");

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    const mfmodelURL = URL2 + "model.json";
    const mfmetadataURL = URL2 + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    mfmodel = await tmImage.load(mfmodelURL, mfmetadataURL);
    mfmaxPredictions = mfmodel.getTotalClasses();
    predict()
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < 3; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }

}

async function predict() {
    const prediction = await model.predict(testImage, false);
    console.log(prediction[0].className + " : " + prediction[0].probability.toFixed(2));
    console.log(prediction[1].className + " : " + prediction[1].probability.toFixed(2));
    console.log(prediction[2].className + " : " + prediction[2].probability.toFixed(2));
    console.log(prediction[3].className + " : " + prediction[3].probability.toFixed(2));
    console.log(prediction[4].className + " : " + prediction[4].probability.toFixed(2));
    if (prediction[0].className == "dog" && prediction[0].probability.toFixed(2) > 0.9){
      labelContainer.childNodes[0].innerHTML = "Hmmm... According to my calculation this is a Dog";
    }
    else if (prediction[1].className == "cat" && prediction[1].probability.toFixed(2) > 0.9){
      labelContainer.childNodes[0].innerHTML = "Hmmm... According to my calculation this is a Cat";
    }
    else if (prediction[2].className == "bear" && prediction[2].probability.toFixed(2) > 0.9){
      labelContainer.childNodes[0].innerHTML = "Hmmm... According to my calculation this is a Bear";
    }
    else if (prediction[3].className == "bunny" && prediction[3].probability.toFixed(2) > 0.9){
      labelContainer.childNodes[0].innerHTML = "Hmmm... According to my calculation this is a Bunny";
    }
    else if (prediction[4].className == "bird" && prediction[4].probability.toFixed(2) > 0.9){
      labelContainer.childNodes[0].innerHTML = "Hmmm... According to my calculation this is a Bird";
    }
    else {
        const mfprediction = await mfmodel.predict(testImage, false);
        console.log(mfprediction[0].className + " : " + mfprediction[0].probability.toFixed(2));
        console.log(mfprediction[1].className + " : " + mfprediction[1].probability.toFixed(2));
        let largest1 = 0;
        let gender = "";
        for (let i = 0; i < mfmaxPredictions; i++) {
            if (mfprediction[i].probability.toFixed(2) > largest1){
              largest1 = mfprediction[i].probability.toFixed(2);
                gender = mfprediction[i].className;
            }
        }
        labelContainer.childNodes[0].innerHTML = "This person looks";
        labelContainer.childNodes[1].innerHTML = largest1*100 + "% " + gender + " and has ";

        let largest2 = 0;
        let animal = "";
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability.toFixed(2) > largest2){
              largest2 = prediction[i].probability.toFixed(2);
              animal = prediction[i].className;
            }
        }
        labelContainer.childNodes[2].innerHTML = (largest2*100).toFixed(0) + "% " + animal + " features according to my calculation.";

    }

}