var randomNumber1 = Math.floor(Math.random()*6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // we will generate random images with the help of concatenation --> dice(1-6).png
var randomImageSource = "images/" + randomDiceImage; // we wil have to generate images from the root folder , although it could have been done in the last step(images/dice1.png - images/dice6.png)
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

// Writing the same code again for the second image but in a more concised way

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

// If Player 1 wins
if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
    }

// If Player 2 wins 
else if(randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
    }
else
{
    document.querySelector("h1").innerHTML = "It's a Draw!...Kick ass!!!"
}



