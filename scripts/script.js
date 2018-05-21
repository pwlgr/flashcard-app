
let score = 0;
let mistakes = 0;


generateQuestion = (index) =>{
  document.querySelector(".question").innerHTML = json[index].question
  document.querySelector(".option1").innerHTML = json[index].answers[0].answer;
  document.querySelector(".option2").innerHTML = json[index].answers[1].answer;
  document.querySelector(".start").style.display = "none";
  document.querySelector(".option1").classList.add("show")
  document.querySelector(".option2").classList.add("show")
  document.querySelector(".rules").style.display = "none"
  console.log(json)

}


check =() => {
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
  generateQuestion(i)
}
check1 =() => {
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
  generateQuestion(i)
}

gameOver =() => {
  document.querySelector(".option1").classList.add("finish")
  document.querySelector(".option2").classList.add("finish")
  document.querySelector(".question").classList.add("finish")
  document.querySelector(".gameover").classList.add("show")
}