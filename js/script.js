var numberSkills = 0;
var numberProjects = 0;
setInterval(() => {
    numberProjects = numberProjects + 7.35
    $("#Projects_b").css("left", "-"+ numberProjects + "vw");
    if (72.99999999999999 <= numberProjects) {
        numberProjects = 0
        $("#Projects_b").css("left","0px");
    }
    numberSkills = numberSkills + 7.8
    $("#Skills").css("left" , "-"+ numberSkills + "vw");
    if (54.599999999999994 <= numberSkills) {
        numberSkills = 0
        $("#Skills").css("left","0px");
    }
}, 1000);

function devToolsOpened(e){
    while (true) {
        window.location.reload();
    }
}
window.addEventListener('keydown', function(e) {
    if (
    // CMD + Alt + I (Chrome, Firefox, Safari)
    e.metaKey == true && e.altKey == true && e.keyCode == 73 ||
    // CMD + Alt + J (Chrome)
    e.metaKey == true && e.altKey == true && e.keyCode == 74 ||
    // CMD + Alt + C (Chrome)
    e.metaKey == true && e.altKey == true && e.keyCode == 67 ||
    // CMD + Shift + C (Chrome)
    e.metaKey == true && e.shiftKey == true && e.keyCode == 67 ||
    // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
    e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
    // Ctrl + Shift + J (Chrome, Edge)
    e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
    // Ctrl + Shift + C (Chrome, Edge)
    e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
    // F12 (Chome, Firefox, Edge)
    e.keyCode == 123 ||
    // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
    e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
    e.ctrlKey == true && e.keyCode == 85
    ){
        devToolsOpened(e);
    }
});