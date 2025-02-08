var buttonCount = 0;
document.getElementById("myButton").innerHTML = `Click me ! : ${buttonCount}`;
const updateButton = () => {
    buttonCount += 1;
    document.getElementById("myButton").innerHTML = `Click me ! : ${buttonCount}`
}
document.getElementById("myButton").addEventListener("click",updateButton);