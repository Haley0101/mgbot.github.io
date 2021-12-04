inputstr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function num_roll(count, str) {
    var target = document.getElementById("roll_" + count);
    var childcount = target.childElementCount;
    var textheight = parseInt(getComputedStyle(target).fontSize.replace("px", ""));

    if(str.toString().length > childcount) {
        for (var i=0; i<str.toString().length - childcount; i++) {
            var content = "<div class='number' style='bottom:0px'>";
            for (var l=0; l<inputstr.length; l++) {
                content += "<a style='height:1em'>" + inputstr[l] + "</a>";
            }
            content += "</div>";
            target.innerHTML += content;
        }
    }

    target.style.height = "1em";
    target.style.width = target.childNodes[count-1].clientWidth*str.toString().length + "px";
    for (var i=0; i<str.toString().length; i++) {
        var pos = inputstr.indexOf(str.toString().split('')[i]);
        target.childNodes[i].style = "bottom:" + ((textheight*pos)+4) + "px";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    num_roll(1, "0");
});