var express = require('express');
var router = express.Router();
var path=require('path');
randomWord = "";
updatedObj={current: "", state: 0, leng: Number, wins: 0, losses: 0, progress: 2};
randomNumb: Number;


//for reading
var fs = require('fs');

function get_line(filename, line_no, callback) { //Got this from stacksOverflow 
  //https://stackoverflow.com/questions/6394951/read-nth-line-of-file-in-nodejs
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if(+line_no > lines.length){
      throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line_no]);
}

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  //res.send('Testing setup');
  res.render('index.html');
});

//Send the data
router.get('/starter', function(req, res, next){
  //Get a word first

  //generate random number 
  randomNumb=Math.floor(Math.random() * 50);
  //get the word associated with the random number
  get_line(path.join(__dirname,"/listofwords.txt"), randomNumb, function(err, line){
    randomWord=line.substring(0,line.length-1);
    console.log(line);
  });
  
  updatedObj={current: "", state: 0, leng: Number, wins: 0, losses: 0, progress: 2};
  updatedObj.leng =randomWord.length;
  for(i=0;i<updatedObj.leng;i++){
    updatedObj.current=updatedObj.current + "_" + " ";
  }
  
  res.json(updatedObj);
})

router.get('/restart',function(req,res,next){
  if(updatedObj.progress==2){//If game was still in progress
    updatedObj.losses++;
  }
  
  //generate a new randomWord
  randomNumb=Math.floor(Math.random() * 50);
  //get the word associated with the random number
  get_line(path.join(__dirname,"/listofwords.txt"), randomNumb, function(err, line){
    randomWord=line.substring(0,line.length-1);
    console.log(line);
  });

  //give them the new word
  updatedObj.current=""; //clear it out first 
  updatedObj.state=0;
  updatedObj.leng =randomWord.length;
  updatedObj.progress=2;
  for(i=0;i<updatedObj.leng;i++){
    updatedObj.current=updatedObj.current + "_" + " ";
  }
  res.json(updatedObj);
})


//This is the back and forth while the game is still running
router.post('/submit',function(req,res,next){
  content: {stuff: String};
  content=req.body; //Unwrap the object and get the string
  temp= content.stuff;
  temp=temp.toLowerCase();
  console.log(temp);
  isFound=false;
  if((temp.length==1)&&(updatedObj.progress==2)){ //single character submissions and when the game is still in progress
      for(i=0;i<updatedObj.leng;i++){
      k=0; //my currentWord string will count by 2 so I will need a seperate index k
      if(temp.charAt(0)==randomWord.charAt(i)){//if I find a match 
        updatedObj.current=updatedObj.current.substring(0,2*(i))+temp+updatedObj.current.substring(2*(i)+1,2*updatedObj.leng-1);
        isFound=true;
      }
      k=k+2;
    }
    if(isFound==false){//update the number of lives left
      updatedObj.state++;
    }
  }
  else if((temp.length==randomWord.length)&&(updatedObj.progress==2)){//Client tries to submit the word
    if(temp==randomWord){
      updatedObj.progress=1; //means you won
      updatedObj.wins++; //user has another win

      updatedObj.current="";//erase it...put in the whole word
      for(i=0;i<updatedObj.leng;i++){
        updatedObj.current=updatedObj.current + randomWord.charAt(i) + " ";
      }
    }
    else{
      updatedObj.state++;
    }
  }

  tempString=""; //For checking if I won yet
  if(updatedObj.progress==2){ //if the game hasn't been won or lost yet
    if(updatedObj.state>=10){
      updatedObj.progress=0; //signify that the user has lost
      updatedObj.losses++;
      //show the word
      updatedObj.current="";//erase it...put in the whole word
      for(i=0;i<updatedObj.leng;i++){
        updatedObj.current=updatedObj.current + randomWord.charAt(i) + " ";
      }
    }  
    else{ //User has not lost...check if he has won
      //Why can't I declare tempString here?
      length= updatedObj.leng;
      for(i=0;i<length;i++){
        tempString=tempString+updatedObj.current.substring(2*i,2*i+1);
      }
      if(tempString==randomWord){
        updatedObj.progress=1;
        updatedObj.wins++;
      }
    }
  }
  wrapper={stuff: "Got it!", current: updatedObj}
  console.log("state is: "+updatedObj.state+". Progress is: "+updatedObj.progress);
  res.json(wrapper);
})

module.exports = router;