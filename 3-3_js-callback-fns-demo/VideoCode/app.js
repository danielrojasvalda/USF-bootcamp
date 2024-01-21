function countDown(number) {
  const printCount = (num) => {
    if (num === 0) {
      console.log("DONE!");
    } else {
      console.log(num);
      setTimeout(() => {
        printCount(num - 1);
      }, 1000);
    }
  };
  printCount(number);
}


/*function countdown(time){
  let timer = setInterval(function(){
    time--;
    if(time <= 0){
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  },1000)
}
countdown(4);
*/

function randomGame(){
  let num;
  let times = 0;
  let timer = setInterval(function(){
    num = Math.random();
    console.log(num)
    times++
    if(num > .75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  },1000)
}
