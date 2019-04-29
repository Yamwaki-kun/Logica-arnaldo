/**
 * @author Arnaldo Victor Yamawaki Alves
 */

let i = 1, j = 1, a = 2
while(i < 11){
    document.write("<p> Tabuada do " + i +"</p>")
    while(j < 11 && a < 11){
        document.write("<p>"+ i + " x " + j + " = " + (i * j) +"</p>")
        j++
    } j = 0
    
    i++
}