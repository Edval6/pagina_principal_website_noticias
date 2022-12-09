var btn = document.querySelector('#btn');

btn.addEventListener("mouseover", function(){
    this.style.backgroundColor = "hsl(240, 100%, 5%)";
});

btn.addEventListener("mouseout", function(){
    this.style.backgroundColor = "hsl(5, 85%, 63%)";
});
