var colour=document.getElementById('bgcolour');
colour.addEventListener('keyup',color)
function color() {
    var textcolour=colour.value;
colour.style.color=textcolour

}
var colour=document.getElementById('bgcolour');
colour.addEventListener('mouseout',color1)
function color1() {
    var textcolour=colour.value;
 document.body.style.backgroundColor=textcolour

}
var colour=document.getElementById('bgcolour');
colour.addEventListener('mousemove',color2)
function color2() {
    var textcolour=colour.value;
 colour.style.backgroundColor=textcolour
}

 

