var color2=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];



var changeex = document.getElementById('change_hex');

var btnex = document.getElementById("b");

btnex.addEventListener("click", function(){
    var display ="#";

for (let index = 0; index<6; index++) {
    var random =Math.floor(Math.random() * color2.length);
    display += color2[random];

    }

    changeex.innerText=display;
    document.bgColor = display;
});

/*function getrand() {
    return Math.floor(Math.random() * color2.length);
}*/
