var btn = document.querySelector('#btn');

btn.addEventListener("mouseover", function(){
    this.style.backgroundColor = "hsl(240, 100%, 5%)";
});

btn.addEventListener("mouseout", function(){
    this.style.backgroundColor = "hsl(5, 85%, 63%)";
});


var close = document.querySelector('.close');

close.addEventListener("click", function(){

    
    var dropbtn = document.querySelector('.dropdown-content');

    dropbtn.style.display = 'none';

});

var show = document.querySelector('.dropbtn');

show.addEventListener("click", function(){

    var exibe = document.querySelector('.dropdown-content');

    exibe.style.display = 'block';

});