window.onload = function()
{
    //mm is base 0
    //DATE WHEN USING new Date(yyyy,mm,dd);

    var Title = document.getElementById('title');
    document.getElementById('NYBut').onclick = function() 
    {
        document.body.style.backgroundImage = "url('imgs/New\ Years\ Day.png')";      
        Title.innerHTML = "Countdown to New Years Day"
        document.body.style.color = "black";
        DatetoCountTo = new Date((DateCurrent.getFullYear()+1),0,1);
    }
    document.getElementById("ValBut").onclick = function()
    {
        document.body.style.backgroundImage = "url('/imgs/ValentinesDay.jpg')";
        Title.innerHTML = "Countdown to Valentines Day";
        document.body.style.color = "black";
        //check if this year's has past or not
        if(DateCurrent.getMonth() == 2 && DateCurrent.getDay() > 14 || DateCurrent.getMonth() > 2)
                DatetoCountTo = new Date((DateCurrent.getFullYear()+1),1,14);
        else
            DatetoCountTo = new Date((DateCurrent.getFullYear()),1,14);
    }
    document.getElementById("HallowBut").onclick = function() 
    {        
        document.body.style.backgroundImage = "url('/imgs/Halloween.jpg')";
        Title.innerHTML = "Countdown to Halloween";
        document.body.style.color = "green";
        if(DateCurrent.getMonth() > 9 || DateCurrent.getMonth() == 9 && DateCurrent.getDay() > 31 )
            DatetoCountTo = new Date((DateCurrent.getFullYear()+1),9,31);
        else
            DatetoCountTo = new Date((DateCurrent.getFullYear()),9,31);
    };
    document.getElementById("ChrisBut").onclick = function() 
    {
        document.body.style.backgroundImage = "url('/imgs/Christmas.jpg')";
        Title.innerHTML = "Countdown to Christmas";
        document.body.style.color = "white";
        if(DateCurrent.getMonth() > 11 || DateCurrent.getMonth() == 11  && DateCurrent.getDay() > 25 )
            DatetoCountTo = new Date((DateCurrent.getFullYear()+1),11,25);
        else
        DatetoCountTo = new Date((DateCurrent.getFullYear()),11,25);
    };
}

var DateCurrent = new Date();

//this should make it until the next year
var DatetoCountTo = new Date((DateCurrent.getFullYear()+1),0,1);

//every second it will update
setInterval(UpdateTime,1000);

function UpdateTime()
{
    //reset to current date everytime
    DateCurrent = new Date();

    //this is the number of seconds between the current date and the want to find date
    var DiffInSec = (DatetoCountTo-DateCurrent) / 1000;    

    console.log(`Current Date Time: ${DateCurrent}`);

    console.log(`findDate: ${DatetoCountTo}`);

    console.log(`Dif in sec: ${DiffInSec}`);
 
    //this is how many FULL days
    document.getElementById("days").innerHTML = Math.floor(DiffInSec/(60*60*24));
    //% 24 because we want to get the remainder after we divide by 24
    document.getElementById("hours").innerHTML = Math.floor(DiffInSec/(60*60) % 24);
    //Remainder after Sec-> Min then %60 to get remainder of hours
    document.getElementById("minutes").innerHTML = Math.floor((DiffInSec/(60) % 60));

    document.getElementById("seconds").innerHTML = Math.floor(DiffInSec % 60);
}