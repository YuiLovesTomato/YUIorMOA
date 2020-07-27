//quiz script
var MAXNUM=2;    //biggest number in image folder
var score=0;
var count=0;

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

    //random feature
    /*
    store used image's number in some array, and make roll() function to simplify.
    */
    if (0==Math.floor(Math.random()*2)) {   //yui folder or moa folder?
        randDir = 'yui';
    } else {
        randDir = 'moa';
    }
    randNum = Math.floor(Math.random()*MAXNUM);
    newSrc = "image/"+randDir+"/"+randNum+".jpg"
    document.getElementById("quiz").src = newSrc;
}
