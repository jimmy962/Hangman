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
  content=req.body; //I have the string
  temp= content.stuff;
  if(temp.length==1){
    //single character

    for(i=0;i<len;i++){
          console.log("I entered this loop");

      k=0;
      if(temp==randomWord[i]){
        currentWord[k]=temp;
      }
      k=k+2;
    }
  }
  var initial={current: currentWord, state: 0, leng: len, wins: 0, losses: 0, progress: 2};
  var other={stuff: "Got it!", otherObj:initial}
  res.json(other);
  console.log(content.stuff);
})



module.exports = router;