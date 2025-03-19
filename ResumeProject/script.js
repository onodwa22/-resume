//wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded",function(){
    const body = document.body;
    const button = document.getElementById('dark-mode');

    //Toggle 'dark-mode'class on <body> when button is clicked
    button.addEventListener("click",function (){
        body.classList.toggle("dark-mode");
    });
});

