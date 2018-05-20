var btn = document.querySelector(".btn")
var answer = document.querySelector(".answer")
// var answer22 = document.querySelector(".answer2")
var quest = 0;
var score = 0;
var mistakes = 0;
var arr = []
var url = 'https://gist.githubusercontent.com/vergilius/6d869a7448e405cb52d782120b77b82c/raw/2ab0379eb07b2a7cd26c845b26ff5ed2a85b5064/history-flashcards.json'

var json = [
  {
    "question": "Who was the leader of Solidarity?",
    "answers": [
      {
        "answer": "Lech Wałęsa",
        "correct": true
      },
      {
        "answer": "Aleksander Kwaśniewski",
        "correct": false
      }
    ]
  },
  {
    "question": "Which city used to be the capital of Poland?",
    "answers": [
      {
        "answer": "Kraków",
        "correct": true
      },
      {
        "answer": "Poznań",
        "correct": false
      }
    ]
  },
  {
    "question": "When did Poland become a member of the European Union?",
    "answers": [
      {
        "answer": "January 1, 2001",
        "correct": false
      },
      {
        "answer": " May 1, 2004",
        "correct": true
      }
    ]
  },
  {
    "question": "Was Józef Piłsudski the President of Poland?",
    "answers": [
      {
        "answer": "Yes",
        "correct": false
      },
      {
        "answer": "No",
        "correct": true
      }
    ]
  },
  {
    "question": "How many countries border Poland?",
    "answers": [
      {
        "answer": "7",
        "correct": true
      },
      {
        "answer": "5",
        "correct": false
      }
    ]
  },
  {
    "question": "What sea does Poland border to?",
    "answers": [
      {
        "answer": "North Sea",
        "correct": false
      },
      {
        "answer": "Baltic Sea",
        "correct": true
      }
    ]
  },
  {
    "question": "When did Poland convert to Christianity?",
    "answers": [
      {
        "answer": "1000",
        "correct": false
      },
      {
        "answer": "966",
        "correct": true
      }
    ]
  },
  {
    "question": "When do Polish people celebrate the Independence Day?",
    "answers": [
      {
        "answer": "On 3rd May",
        "correct": false
      },
      {
        "answer": "On 11th November",
        "correct": true
      }
    ]
  },
  {
    "question": "What is the highest mountain in Poland?",
    "answers": [
      {
        "answer": "Giewont",
        "correct": false
      },
      {
        "answer": "Rysy",
        "correct": true
      }
    ]
  },
  {
    "question": "When did Poland regain its independence after 123 years of partition?",
    "answers": [
      {
        "answer": "1918",
        "correct": true
      },
      {
        "answer": "1921",
        "correct": false
      }
    ]
  }
]


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
  console.log(json)
}
generate(0);
i=0;
function check(){
  if(json[i].answers[0].correct){
    score++;
    document.querySelector(".score").innerText = "Your score: " + score;
    document.querySelector(".mistake").innerText = "Mistakes: " + mistakes;
    json.splice(i,1)

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

