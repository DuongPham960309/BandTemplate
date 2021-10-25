let imageOrder = 0;
let homeObject = document.getElementById("Home");
let image = homeObject.getElementsByTagName("img");
let text = homeObject.getElementsByTagName("p");

function HomeLoop()
{
    imageOrder++;

    if (imageOrder == 1)
    {
        image[0].src = "Image/image1.png";
        text[0].innerHTML = "Chicago";
        text[1].innerHTML = "Thank you, Chicago - A night we won't forget.";
    }
    else if (imageOrder == 2)
    {
        image[0].src = "Image/image2.png";
        text[0].innerHTML = "New York";
        text[1].innerHTML = "The atmosphere in New York is lorem ipsum.";
    }
    else
    {
        image[0].src = "Image/image3.png";
        text[0].innerHTML = "Los Angeles";
        text[1].innerHTML = "We had the best time playing at Venice beach!";
        imageOrder = 0;
    }
}

setInterval(HomeLoop, 3000);