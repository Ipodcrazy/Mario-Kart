"use script";

document.getElementById("itemboxbtn").addEventListener("click", spin);



//all the variables needed
let box;
let Banananum = 0;
console.log(Banananum);
let Greenshellnum = 0;
console.log(Greenshellnum);
let Starnum = 0;
console.log(Starnum);
let GoldenMushroomnum = 0;
console.log(GoldenMushroomnum);
let BulletBillnum = 0;
console.log(BulletBillnum);



function spin() {
    let box = Math.random();
    let MKPlace = Number(document.getElementById("htmlposition").value);



    //if user is in 1st - 6th place
    if (MKPlace > 0 && MKPlace <= 6) {
        if (box <= 0.45) { //banana
            console.log("Banana");
            Banananum += 1;
            console.log(Banananum);
            document.getElementById("Bananatotal").innerHTML = "Banana: " + Banananum;
            document.getElementById("result").innerHTML += '<img src = "images/banana.png" width="100px" height="100px">';
        } else if (box > 0.45 && box <= 0.80) { //Greenshell
            console.log("Green Shell");
            Greenshellnum += 1;
            console.log(Greenshellnum);
            document.getElementById("Greenshelltotal").innerHTML = "Green Shell: " + Greenshellnum;
            document.getElementById("result").innerHTML += '<img src = "images/Green Shell.png" width="100px" height="100px">';
        } else if (box > 0.80 && box <= 0.95) { //Star
            console.log("Star");
            Starnum += 1;
            console.log(Starnum);
            document.getElementById("Startotal").innerHTML = "Star: " + Starnum;
            document.getElementById("result").innerHTML += '<img src = "images/Stars.png" width="100px" height="100px">';
        } else if (box > 0.95 && box <= 0.99) { //Golden Mushroom 
            console.log("Golden Mushroom");
            GoldenMushroomnum += 1;
            console.log(GoldenMushroomnum);
            document.getElementById("GoldenMushroomtotal").innerHTML = "Golden Mushroom: " + GoldenMushroomnum;
            document.getElementById("result").innerHTML += '<img src = "images/Golden Mushroom.png" width="100px" height="100px">';
        } else if (box > 0.99 && box <= 1){ //Bullet Bill
            console.log("Bullet Bill");
            BulletBillnum += 1;
            console.log(BulletBillnum);
            document.getElementById("Bulletbilltotal").innerHTML = "Bullet Bill: " + BulletBillnum;
            document.getElementById("result").innerHTML += '<img src = "images/Bullet Bill.jpg" width="100px" height="100px">';
        } else{
            alert("so you broke the website. somehow");
        }   
    }



    //if user is 7th - 12th place  
    else if (MKPlace > 6 && MKPlace <= 12) {        
        if (box <= 0.05) { //banana
            console.log("Banana");
            Banananum += 1;
            console.log(Banananum);
            document.getElementById("Bananatotal").innerHTML = "Banana: " + Banananum;
            document.getElementById("result").innerHTML += '<img src = "images/banana.png" width="100px" height="100px">';
        } else if (box > 0.05 && box <= 0.10) { //Greenshell
            console.log("Green Shell");
            Greenshellnum += 1;
            console.log(Greenshellnum);
            document.getElementById("Greenshelltotal").innerHTML = "Green Shell: " + Greenshellnum;
            document.getElementById("result").innerHTML += '<img src = "images/Green Shell.png" width="100px" height="100px">';
        } else if (box > 0.10 && box <= 0.35) { //Star
            console.log("Star");
            Starnum += 1;
            console.log(Starnum);
            document.getElementById("Startotal").innerHTML = "Star: " + Starnum;
            document.getElementById("result").innerHTML += '<img src = "images/Stars.png" width="100px" height="100px">';
        } else if (box > 0.35 && box <= 0.70) { //Golden Mushroom 
            console.log("Golden Mushroom");
            GoldenMushroomnum += 1;
            console.log(GoldenMushroomnum);
            document.getElementById("GoldenMushroomtotal").innerHTML = "Golden Mushroom: " + GoldenMushroomnum;
            document.getElementById("result").innerHTML += '<img src = "images/Golden Mushroom.png" width="100px" height="100px">';
        } else if (box > 0.70 && box <= 1){ //Bullet Bill
            console.log("Bullet Bill");
            BulletBillnum += 1;
            console.log(BulletBillnum);
            document.getElementById("Bulletbilltotal").innerHTML = "Bullet Bill: " + BulletBillnum;
            document.getElementById("result").innerHTML += '<img src = "images/Bullet Bill.jpg" width="100px" height="100px">';
        }
    }
    
}