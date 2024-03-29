/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer;
init();

//document.querySelector('#score-'+activePlayer).textContent=dice;
//document.querySelector('#score-'+activePlayer).innerHTML='<em>'+dice+'</em>';

document.querySelector('.btn-roll').addEventListener('click',function(){
     var dice0=Math.floor((Math.random()*6)+1);
     var dice1=Math.floor((Math.random()*6)+1);

   var diceDom0=document.querySelector('.dice-0'); 
   var diceDom1=document.querySelector('.dice-1'); 
    diceDom0.style.display='block';
    diceDom1.style.display='block';
    diceDom0.src='dice-'+dice0+'.png';
    diceDom1.src='dice-'+dice1+'.png';
   
    if(dice0!==1&&dice1!==1)
        {
             roundScore+=dice0+dice1;
    document.getElementById('current-'+activePlayer).textContent=roundScore;
        }
    else{
        roundScore=0;
        setTimeout(function(){ document.querySelector('.dice-0').style.display='none'},300);
        setTimeout(function(){ document.querySelector('.dice-1').style.display='none'},300);
        //document.querySelector('.dice').style.display='none';
        document.getElementById('current-0').textContent='0';
document.getElementById('current-0').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        activePlayer===0?activePlayer=1:activePlayer=0;
    }
   
});
//anonymous function
document.querySelector('.btn-hold').addEventListener('click',function(){
   scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100)
        {
            document.getElementById('name-'+activePlayer).textContent='WINNER!!';
                        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    roundScore=0;
    document.querySelector('.dice-0').style.display='none';
    document.querySelector('.dice-1').style.display='none';
      document.getElementById('current-0').textContent='0';
document.getElementById('current-0').textContent='0';
        }
    else
        {
             activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice-0').style.display='none';
    document.querySelector('.dice-1').style.display='none';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        }
       
});
document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}