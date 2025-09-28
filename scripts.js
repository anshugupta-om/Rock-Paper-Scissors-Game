   let  score = JSON.parse(localStorage.getItem
   ('score')) || {
     wins:0,
         losses:0,
         ties:0
   };
   updateScoreElement();

   /* if(!score){
      score={
         wins:0,
         losses:0,
         ties:0
      };
    }*/

   
   function playGame(playermove){
      pickComputerMove();                              
      let result='';
      if(playermove==='Scissors'){
         if(computerMove=== 'Scissors'){
            result ='Tie';
         }else if(computerMove==='rock'){
            result ='you lose';
         }else if(computerMove==='paper'){
            result='YOU WoN';
         }
      }
      else if(playermove==='paper'){
         if(computerMove=== 'paper'){
            result ='Tie';
         }else if(computerMove==='Scissors'){
            result ='you lose';
         }else if(computerMove==='rock'){
            result='YOU WoN';
         }
      }
      else if (playermove==='rock'){
         if(computerMove=== 'rock'){                
            result ='Tie';
         }else if(computerMove==='paper'){
            result ='you lose';
         }else if(computerMove==='Scissors'){
            result='YOU WoN';
         }
      }
   if(result==='YOU WoN'){
         score.wins+=1;
      }else if(result==='you lose'){
         score.losses+=1;
      }else if(result==='Tie'){
         score.ties+=1;
      }
      
   localStorage.setItem('score',JSON.stringify(score));
     
   updateScoreElement();
   document.querySelector('.js-result').innerHTML=result;

   // This line goes inside the playGame function
   document.querySelector('.js-moves').innerHTML = `You
    <img src="./images/${playermove.toLowerCase()}-emoji.png" class="move-icon">
    <img src="./images/${computerMove.toLowerCase()}-emoji.png" class="move-icon">
    Computer`;
   } 
   function updateScoreElement(){
       document.querySelector('.js-score')
        .innerHTML=`wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
   }
   let computerMove= '';  //globally declared ----------------------------
   function pickComputerMove(){                       //here is the function-------------------------
         const randonNumber= Math.random();
         if (randonNumber>=0 && randonNumber<1/3){
            computerMove='rock';
         }else if(randonNumber>=1/3 && randonNumber<2/3){
            computerMove='paper';
         }else if(randonNumber>=2/3 && randonNumber<1) {
            computerMove='Scissors'; 
         } 
       return computerMove;
 }
