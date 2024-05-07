let index =0;

function changeColour() {
    let colors =["red","blue","orange","yellow","green","purple"];
    let alif = document.getElementsByTagName("body")[0].
    style.background =colors[index++];
    if(index> colors.length-1){
        index =0;
    }
     
}