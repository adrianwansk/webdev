for (var i = 0; i < document.querySelectorAll("button").length; i++) {

document.querySelectorAll("button")[i].addEventListener("click", function() {
    console.log("clicked");

    var clicked = this.innerHTML;

    switch (clicked) {
        case "delpo":
            var delpo = new Audio ("./Delpo/Grunt-Male24a.wav");
            delpo.play();
            break;
    
        case "djoko":
            var delpo = new Audio ("./Djokovic/Grunt-Male05b.wav");
            delpo.play();
            break;
        
        case "federer":
            var delpo = new Audio ("./Federer/Grunt-Male26b.wav");
            delpo.play();
            break;

        case "nadal":
            var delpo = new Audio ("./Nadal/Grunt-Male02a.wav");
            delpo.play();
            break;

        case "wawrinka":
            var delpo = new Audio ("./Wawrinka/Grunt-Male10a.wav");
            delpo.play();
            break;

        default:
            break;
    }


}
);
}

