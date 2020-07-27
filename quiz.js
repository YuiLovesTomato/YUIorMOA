//quiz script
var MAXNUM=30;    //biggest number in image folder
var score=0;
var count=0;
var usedArr=[];

//device rotate lock
screen.orientation.lock();

//total amount of quiz
document.getElementById("score").innerText = String(score)+"/"+String(count);

function select(who) {
    //define variables
    src = document.getElementById("quiz").src;  //quiz image's src attribute
    answer = src.split('/')[4];         //yui or moa
    number = src.split('/')[5];         //number of quiz image
    number = number.split('.')[0];

    //correctness check
    if (who == answer) {
        score++;
        document.getElementById("correct").innerText = "Right!";
    } else {
        document.getElementById("correct").innerText = "Wrong!";
    }

    //displaying score
    count++;
    document.getElementById("score").innerText = String(score)+"/"+String(count);
    
    //storing used pic to array

    //random feature: here goes new pic
    if (0==Math.floor(Math.random()*2)) { //50%
        randDir = 'yui';
    } else {
        randDir = 'moa';
    }
    randNum = 1+Math.floor(Math.random()*MAXNUM);
    newSrc = "image/"+randDir+"/"+randNum+".jpg"
    if (usedArr.includes(newSrc)) {
        alert("test");
    }
    document.getElementById("quiz").src = newSrc;
}