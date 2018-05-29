var express = require('express');
var router = express.Router();
randomWord = "chicken";
updatedObj={current: "", state: 0, leng: Number, wins: 0, losses: 0, progress: 2};

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  //res.send('Testing setup');
  res.render('index.html');
});

router.get('/starter', function(req, res, next){
  updatedObj.leng =randomWord.length;
  for(i=0;i<updatedObj.leng;i++){
    updatedObj.current=updatedObj.current + "_" + " ";
  }
  
  res.json(updatedObj);
})

router.post('/submit',function(req,res,next){
  content: {stuff: String};
  content=req.body; //Unwrap the object and get the string
  temp= content.stuff;
  isFound=false;
  if(temp.length==1){ //single character submissions
      for(i=0;i<updatedObj.leng;i++){
      k=0; //my currentWord string will count by 2 so I will need a seperate index k
      if(temp.charAt(0)==randomWord.charAt(i)){//if I find a match 
        updatedObj.current=updatedObj.current.substring(0,2*(i))+temp+updatedObj.current.substring(2*(i)+1,2*len-1);
        isFound=true;
      }
      k=k+2;
    }
    if(isFound==false){//update the number of lives left
      updatedObj.state++;
    }
  }
  
  if(updatedObj.state==10){
    updatedObj.progress=0; //signify that the user has lost
    updatedObj.losses++;
  }
  wrapper={stuff: "Got it!", current: updatedObj}
  res.json(wrapper);
})



module.exports = router;