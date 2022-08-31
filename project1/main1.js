

const color =['green','red','blue','dark','purple','cyan','yellow','bluegreen','beige','silver','gold',];

var change =document.getElementById('change');

var btn =document.getElementById('btn');
btn.addEventListener("click", function(){
    var random = Math.floor(Math.random()*color.length);
    change.innerHTML=color[random];
    document.bgColor=color[random];
});
