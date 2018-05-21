
var quest = 0;
var score = 0;
var mistakes = 0;
var arr = []
var url = 'https://gist.githubusercontent.com/vergilius/6d869a7448e405cb52d782120b77b82c/raw/2ab0379eb07b2a7cd26c845b26ff5ed2a85b5064/history-flashcards.json'




function start(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(function(err){
    console.log(err)
  })
}

function parseJSON(res){
    return res.json()
  .then(function(parsedData){
      return parsedData;
    })
  }

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status)
  }
  
  return res;
}

function generate(index){
  document.querySelector(".question").innerHTML = json[index].question
  document.querySelector(".option1").innerHTML = json[index].answers[0].answer;
  document.querySelector(".option2").innerHTML = json[index].answers[1].answer;
  document.querySelector(".start").style.display = "none";
  document.querySelector(".option1").classList.add("show")
  document.querySelector(".option2").classList.add("show")
  document.querySelector(".rules").style.display = "none"
  console.log(json)

}


function check(){
  i=0;
  if(json[i].answers[0].correct){
    score++;
    document.querySelector(".score").innerText = "Your score: " + score;
    document.querySelector(".mistake").innerText = "Mistakes: " + mistakes;
    json.splice(i,1)
    if(!json[i]){
      gameOver();
    }

  }
  else {
    score -= 0.5
    document.querySelector(".score").innerText = "Your score: " + score;
    json.push(json[i])
    json.shift()
    mistakes++
    document.querySelector(".mistake").innerText = "Mistakes: " + mistakes;
  }
  generate(i)
}
function check1(){
  i=0;
  if(json[i].answers[1].correct){
    score++;
    document.querySelector(".score").innerText = "Your score: " + score;
    document.querySelector(".mistake").innerText = "Mistakes: " + mistakes;
    json.splice(i,1)
    if(!json[i]){
      gameOver();
    }
  }
  else {
    score -= 0.5
    document.querySelector(".score").innerText = "Your score: " + score;
    json.push(json[i])
    json.shift()
    mistakes++
    document.querySelector(".mistake").innerText = "Mistakes: " + mistakes;
  }
  generate(i)
}

function gameOver(){
  document.querySelector(".option1").classList.add("finish")
  document.querySelector(".option2").classList.add("finish")
  document.querySelector(".question").classList.add("finish")
  document.querySelector(".gameover").classList.add("show")
}