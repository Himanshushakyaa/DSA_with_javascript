//program to create Countdown timer


let countDownDate =  new Date().getTime() + 24 * 60 * 60 * 1000;

// console.log(countDownDate)

let x =  setInterval(function(){
    let now =  new Date().getTime();
    let timeLeft = countDownDate - now;


    const days =  Math.floor(timeLeft/(1000*60*60*24));
    const hours = Math.floor ((timeLeft/(1000*60*60))%2);
    const minutes = Math.floor((timeLeft/1000/60)%60);
    const seconds = Math.floor ((timeLeft/1000)%60);

    console.log(days +'d ' + hours +'h ' + minutes + 'm ' + seconds + 's ')
    if(timeLeft < 0 ){
        clearInterval(x)
        console.log( 'countDown finished')
    }

},2000)