const inputstr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function num_roll(count, str) {
    const target = document.getElementById("roll_" + count);
    const childCount = target.childElementCount;
    let text = document.createElement("a");
    text.classList.add("roll");
    console.log(text.clientHeight);
    const textHeight = parseInt(getComputedStyle(target).fontSize.replace("px", ""));

    if(str.toString().length > childCount) {
        for (let i=0; i<str.toString().length - childCount; i++) {
            let content = "<div style='bottom:0px'>";
            for (let l=0; l<inputstr.length; l++) { content += "<a style='height:1em'>" + inputstr[l] + "</a>"; }
            content += "</div>";
            target.innerHTML += content;
        }
    }

    target.style.width = target.childNodes[count-1].clientWidth*str.toString().length + "px";

    for (let i=0; i<str.toString().length; i++) {
        const pos = inputstr.indexOf(str.toString().split('')[i]);
        target.childNodes[i].style = "bottom:" + ((textHeight*pos)+4) + "px";
    }
}