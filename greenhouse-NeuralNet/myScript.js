let model = undefined;

async function runModel() {
  const model1 = loadModel();
  const result = makePred(model1);
  console.log(result)
  document.getElementById("result1").value = result;
  document.getElementById("result2").value = result[1];
  document.getElementById("result3").value = result[2];
}
/*
https://github.com/diego-glm/diego-glm.github.io/blob/main/greenhouseGases-neuNet.io/model.json
  owner:diego-glm repo:diego-glm.github.io dir:greenhouseGases-neuNet.io/model.json
https://api.github.com/repos/<owner>/<repo>/contents/<path>
  https://api.github.com/repos/diego-glm/diego-glm.github.io/contents/greenhouseGases-neuNet.io/model.json ==> '2a1ab2a8a353b759655922c55e6322151758c54a'
https://api.github.com/repos/<user>/<repo>/git/blobs/<sha>
  https://api.github.com/repos/diego-glm/diego-glm.github.io/git/blobs/2a1ab2a8a353b759655922c55e6322151758c54a
  */
async function loadModel() { 
  const model = await tf.loadLayersModel('/model_tfjs/model.json');
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
