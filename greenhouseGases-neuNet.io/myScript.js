
let model = undefined;

async function runModel() {
  const model = loadModel();
  const result = makePred(model);
  console.log(result)
  document.getElementById("result1").value = result;
  document.getElementById("result2").value = result[1];
  document.getElementById("result3").value = result[2];
}

async function loadModel() { 
  model = await tf.loadlLayersModel('http://localhost:5500/model.json');
  // Specify Loss and Optimizer
  //model.compile({loss:'meanSquaredError', optimizer:'sgd'});
  model.summary();
  return model;
}

async function makePred(model) {
  //Should yeild close to ... 379,1774,318
  const myArr = [[1 ,19451,49051294,3300483246,1534205261,1717752,3331980,312618,12641455,63930910,98180110.0,81411510.0]];
  const inputTensor = tf.tensor(myArr);
  const prediction = await model.predict(inputTensor);
  return prediction;
}

function calc() {
  var num1 = parseFloat(document.getElementById("input1").value);
  var num2 = parseFloat(document.getElementById("input2").value);
  var sum = num1 + num2;
  document.getElementById("result1").value = sum;
}
