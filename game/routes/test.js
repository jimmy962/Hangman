var express = require('express');
var router = express.Router();
randomWord = "chicken";
currentWord ="";
len: Number;
/* GET home page. */
router.get('/tasks', function(req, res, next) {
  //res.send('Testing setup');
  res.render('index.html');
});

router.get('/starter', function(req, res, next){
  len =randomWord.length;
  for(i=0;i<len;i++){
    currentWord=currentWord + "_" + " ";
  }
  var initial={current: currentWord, state: 0, leng: len, wins: 0, losses: 0, progress: 2 };
  res.json(initial);
})

router.post('/submit',function(req,res,next){
  content: {stuff: String};
  content=req.body; //Unwrap the object and get the string
  temp= content.stuff;
  if(temp.length==1){ //single character submissions
      for(i=0;i<len;i++){
      k=0; //my currentWord string will count by 2 so I will need a seperate index k
      if(temp.charAt(0)==randomWord.charAt(i)){
        currentWord=currentWord.substring(0,2*(i))+temp+currentWord.substring(2*(i)+1,2*len-1);
      }
      k=k+2;
    }
  }
  console.log("current word is: "+currentWord); //show the word in terminal to see I have the right words
  updatedObj={current: currentWord, state: 4, leng: len, wins: 2, losses: 1, progress: 2};
  wrapper={stuff: "Got it!", current: updatedObj}
  res.json(wrapper);
  console.log(content.stuff);
})



module.exports = router;