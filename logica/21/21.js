/**
 * jogo de cartas - Exemplo de uso do array
 * @author Arnaldo Victor Yamawaki Alves
 */
let placar = frmplacar.txtplacar.value
let ponto1 ,ponto2 ,ponto3 ,ponto4
let cartas = [  { name: 'as', image: 'as.png' }]
let n = cartas[Math.floor(Math.random() * 1)]
let sorteio1 = Math.floor(Math.random() * 52 + 1);
let sorteio2 = Math.floor(Math.random() * 52 + 1);
let sorteio3 = Math.floor(Math.random() * 52 + 1);
let sorteio4 = Math.floor(Math.random() * 52 + 1);
function jogar(){
switch(sorteio1 ){
    case 1:
    document.getElementById("1").src="as.png"
    break 

        case 2:
        document.getElementById("1").src="ac.png"
        break
       case 3:
        document.getElementById("1").src="ao.png"
        break
        case 4:
        document.getElementById("1").src="ap.png"
        break
        case 5:
        document.getElementById("1").src="2a.png"
        break
        case 6:
        document.getElementById("1").src="2c.png"
        break
        case 7:
        document.getElementById("1").src="2d.png"
        break
        case 8:
        document.getElementById("1").src="2p.png"
        break
        case 9:
        document.getElementById("1").src="3s.png"
        break
        case 10:
        document.getElementById("1").src="3c.png"
        break
        case 11:
        document.getElementById("1").src="3d.png"
        break
        case 12:
        document.getElementById("1").src="3p.png"
        break  
        case 13:
        document.getElementById("1").src="4s.png"
        break
        case 14:
        document.getElementById("1").src="4c.png"
        break
        case 15:
        document.getElementById("1").src="4d.png"
        break
        case 16:
        document.getElementById("1").src="4p.png"
        break
        case 17:
        document.getElementById("1").src="5s.png"
        break
        case 18:
        document.getElementById("1").src="5c.png"
        break
        case 19:
        document.getElementById("1").src="5o.png"
        break
        case 20:
        document.getElementById("1").src="5p.png"
        break
        case 21:
        document.getElementById("1").src="6s.png"
        break
        case 22:
        document.getElementById("1").src="6c.png"
        break
        case 23:
        document.getElementById("1").src="6d.png"
        break
        case 24:
        document.getElementById("1").src="6p.png"
        break
        case 25:
        document.getElementById("1").src="7s.png"
        break
        case 26:
        document.getElementById("1").src="7c.png"
        break
        case 27:
        document.getElementById("1").src="7o.png"
        break
        case 28:
        document.getElementById("1").src="7p.png"
        break
        case 29:
        document.getElementById("1").src="8o.png"
        break
        case 30:
        document.getElementById("1").src="8c.png"
        break
        case 31:
        document.getElementById("1").src="8s.png"
        break
        case 32:
        document.getElementById("1").src="8p.png"
        break
        case 33:
        document.getElementById("1").src="9s.png"
        break
        case 34:
        document.getElementById("1").src="9c.png"
        break
        case 35:
        document.getElementById("1").src="9o.png"
        break
        case 36:
        document.getElementById("1").src="9p.png"
        break
        case 37:
        document.getElementById("1").src="10s.png"
        break
        case 38:
        document.getElementById("1").src="10c.png"
        break
        case 39:
        document.getElementById("1").src="10o.png"
        break
        case 40:
        document.getElementById("1").src="10p.png"
        break
        case 41:
        document.getElementById("1").src="js.png"
        break
        case 42:
        document.getElementById("1").src="jc.png"
        break
        case 43:
        document.getElementById("1").src="jo.png"
        break
        case 44:
        document.getElementById("1").src="jp.png"
        break
        case 45:
        document.getElementById("1").src="ks.png"
        break
        case 46:
        document.getElementById("1").src="kc.png"
        break
        case 47:
        document.getElementById("1").src="ko.png"
        break
        case 48:
        document.getElementById("1").src="kp.png"
        break
        case 49:
        document.getElementById("1").src="qs.png"
        break
        case 50:
        document.getElementById("1").src="qc.png"
        break
        case 51:
        document.getElementById("1").src="qo.png"
        break
        case 52:
        document.getElementById("1").src="qp.png"
        break
        
        
}
switch(sorteio2){
    case 1:
    document.getElementById("2").src="as.png"
    break 

        case 2:
        document.getElementById("2").src="ac.png"
        break
       case 3:
        document.getElementById("2").src="ao.png"
        break
        case 4:
        document.getElementById("2").src="ap.png"
        break
        case 5:
        document.getElementById("2").src="2a.png"
        break
        case 6:
        document.getElementById("2").src="2c.png"
        break
        case 7:
        document.getElementById("2").src="2d.png"
        break
        case 8:
        document.getElementById("2").src="2p.png"
        break
        case 9:
        document.getElementById("2").src="3s.png"
        break
        case 10:
        document.getElementById("2").src="3c.png"
        break
        case 11:
        document.getElementById("2").src="3d.png"
        break
        case 12:
        document.getElementById("2").src="3p.png"
        break  
        case 13:
        document.getElementById("2").src="4s.png"
        break
        case 14:
        document.getElementById("2").src="4c.png"
        break
        case 15:
        document.getElementById("2").src="4d.png"
        break
        case 16:
        document.getElementById("2").src="4p.png"
        break
        case 17:
        document.getElementById("2").src="5s.png"
        break
        case 18:
        document.getElementById("2").src="5c.png"
        break
        case 19:
        document.getElementById("2").src="5o.png"
        break
        case 20:
        document.getElementById("2").src="5p.png"
        break
        case 21:
        document.getElementById("2").src="6s.png"
        break
        case 22:
        document.getElementById("2").src="6c.png"
        break
        case 23:
        document.getElementById("2").src="6d.png"
        break
        case 24:
        document.getElementById("2").src="6p.png"
        break
        case 25:
        document.getElementById("2").src="7s.png"
        break
        case 26:
        document.getElementById("2").src="7c.png"
        break
        case 27:
        document.getElementById("2").src="7o.png"
        break
        case 28:
        document.getElementById("2").src="7p.png"
        break
        case 29:
        document.getElementById("2").src="8o.png"
        break
        case 30:
        document.getElementById("2").src="8c.png"
        break
        case 31:
        document.getElementById("2").src="8s.png"
        break
        case 32:
        document.getElementById("2").src="8p.png"
        break
        case 33:
        document.getElementById("2").src="9s.png"
        break
        case 34:
        document.getElementById("2").src="9c.png"
        break
        case 35:
        document.getElementById("2").src="9o.png"
        break
        case 36:
        document.getElementById("2").src="9p.png"
        break
        case 37:
        document.getElementById("2").src="10s.png"
        break
        case 38:
        document.getElementById("2").src="10c.png"
        break
        case 39:
        document.getElementById("2").src="10o.png"
        break
        case 40:
        document.getElementById("2").src="10p.png"
        break
        case 41:
        document.getElementById("2").src="js.png"
        break
        case 42:
        document.getElementById("2").src="jc.png"
        break
        case 43:
        document.getElementById("2").src="jo.png"
        break
        case 44:
        document.getElementById("2").src="jp.png"
        break
        case 45:
        document.getElementById("2").src="ks.png"
        break
        case 46:
        document.getElementById("2").src="kc.png"
        break
        case 47:
        document.getElementById("2").src="ko.png"
        break
        case 48:
        document.getElementById("2").src="kp.png"
        break
        case 49:
        document.getElementById("2").src="qs.png"
        break
        case 50:
        document.getElementById("2").src="qc.png"
        break
        case 51:
        document.getElementById("2").src="qo.png"
        break
        case 52:
        document.getElementById("2").src="qp.png"
        break
        
        
}
if (sorteio1 >= 1 && 4)
{
ponto1 = 1
}
if (sorteio1 >= 5 && 8)
{
ponto1 = 2
}
if (sorteio1 >= 9 && 12)
{
ponto1 = 3
}
if (sorteio1 >= 13 && 16)
{
ponto1 = 4
}
if (sorteio1 >= 17 && 20)
{
ponto1 = 5
}
if (sorteio1 >= 21 && 24)
{
ponto1 = 6
}
if (sorteio1 >= 25 && 28)
{
ponto1 = 7
}
if (sorteio1 >= 29 && 32)
{
ponto1 = 8
}
if (sorteio1 >= 33 && 36)
{
ponto1 = 9
}
if (sorteio1 >= 37 && 40)
{
ponto1 = 20
}
if (sorteio2 >= 1 && 4)
{
ponto2 = 1
}
if (sorteio2 >= 5 && 8)
{
ponto2 = 2
}
if (sorteio2 >= 9 && 12)
{
ponto2 = 3
}
if (sorteio2 >= 13 && 16)
{
ponto2 = 4
}
if (sorteio2 >= 17 && 20)
{
ponto2 = 5
}
if (sorteio2 >= 21 && 24)
{
ponto2 = 6
}
if (sorteio2 >= 25 && 28)
{
ponto2 = 7
}
if (sorteio2 >= 29 && 32)
{
ponto2 = 8
}
if (sorteio2 >= 33 && 36)
{
ponto2 = 9
}
if (sorteio2 >= 37 && 40)
{
ponto2 = 10
}

frmplacar.txtplacar.value=ponto1 + ponto2
if (placar == 21){
    alert("Você Ganhou")}
if (placar > 21) {
    alert("Você Perdeu")}
}

function maisUma(){
    switch(sorteio3 ){
        case 1:
        document.getElementById("3").src="as.png"
        break 
    
            case 2:
            document.getElementById("3").src="ac.png"
            break
           case 3:
            document.getElementById("3").src="ao.png"
            break
            case 4:
            document.getElementById("3").src="ap.png"
            break
            case 5:
            document.getElementById("3").src="2a.png"
            break
            case 6:
            document.getElementById("3").src="2c.png"
            break
            case 7:
            document.getElementById("3").src="2d.png"
            break
            case 8:
            document.getElementById("3").src="2p.png"
            break
            case 9:
            document.getElementById("3").src="3s.png"
            break
            case 10:
            document.getElementById("3").src="3c.png"
            break
            case 11:
            document.getElementById("3").src="3d.png"
            break
            case 12:
            document.getElementById("3").src="3p.png"
            break  
            case 13:
            document.getElementById("3").src="4s.png"
            break
            case 14:
            document.getElementById("3").src="4c.png"
            break
            case 15:
            document.getElementById("3").src="4d.png"
            break
            case 16:
            document.getElementById("3").src="4p.png"
            break
            case 17:
            document.getElementById("3").src="5s.png"
            break
            case 18:
            document.getElementById("3").src="5c.png"
            break
            case 19:
            document.getElementById("3").src="5o.png"
            break
            case 20:
            document.getElementById("3").src="5p.png"
            break
            case 21:
            document.getElementById("3").src="6s.png"
            break
            case 22:
            document.getElementById("3").src="6c.png"
            break
            case 23:
            document.getElementById("3").src="6d.png"
            break
            case 24:
            document.getElementById("3").src="6p.png"
            break
            case 25:
            document.getElementById("3").src="7s.png"
            break
            case 26:
            document.getElementById("3").src="7c.png"
            break
            case 27:
            document.getElementById("3").src="7o.png"
            break
            case 28:
            document.getElementById("3").src="7p.png"
            break
            case 29:
            document.getElementById("3").src="8o.png"
            break
            case 30:
            document.getElementById("3").src="8c.png"
            break
            case 31:
            document.getElementById("3").src="8s.png"
            break
            case 32:
            document.getElementById("3").src="8p.png"
            break
            case 33:
            document.getElementById("3").src="9s.png"
            break
            case 34:
            document.getElementById("3").src="9c.png"
            break
            case 35:
            document.getElementById("3").src="9o.png"
            break
            case 36:
            document.getElementById("3").src="9p.png"
            break
            case 37:
            document.getElementById("3").src="10s.png"
            break
            case 38:
            document.getElementById("3").src="10c.png"
            break
            case 39:
            document.getElementById("3").src="10o.png"
            break
            case 40:
            document.getElementById("3").src="10p.png"
            break
            case 41:
            document.getElementById("3").src="js.png"
            break
            case 42:
            document.getElementById("3").src="jc.png"
            break
            case 43:
            document.getElementById("3").src="jo.png"
            break
            case 44:
            document.getElementById("3").src="jp.png"
            break
            case 45:
            document.getElementById("3").src="ks.png"
            break
            case 46:
            document.getElementById("3").src="kc.png"
            break
            case 47:
            document.getElementById("3").src="ko.png"
            break
            case 48:
            document.getElementById("3").src="kp.png"
            break
            case 49:
            document.getElementById("3").src="qs.png"
            break
            case 50:
            document.getElementById("3").src="qc.png"
            break
            case 51:
            document.getElementById("3").src="qo.png"
            break
            case 52:
            document.getElementById("3").src="qp.png"
            break
    }
    if (sorteio3 >= 1 && 4)
{
ponto3 = 1
}
if (sorteio3 >= 5 && 8)
{
ponto3 = 2
}
if (sorteio3 >= 9 && 12)
{
ponto3 = 3
}
if (sorteio3 >= 13 && 16)
{
ponto3 = 4
}
if (sorteio3 >= 17 && 20)
{
ponto3 = 5
}
if (sorteio3 >= 21 && 24)
{
ponto3 = 6
}
if (sorteio3 >= 25 && 28)
{
ponto3 = 7
}
if (sorteio3 >= 29 && 32)
{
ponto3 = 8
}
if (sorteio3 >= 33 && 36)
{
ponto3 = 9
}
if (sorteio3 >= 37 && 40)
{
ponto3 = 10
}
frmplacar.txtplacar.value=ponto1 + ponto2 + ponto3
if (placar == 21){
    alert("Você Ganhou")}
if (placar > 21) {
    alert("Você Perdeu")}
}
function maisoutra(){
    switch(sorteio4 ){
        case 1:
        document.getElementById("4").src="as.png"
        break 
    
            case 2:
            document.getElementById("4").src="ac.png"
            break
           case 3:
            document.getElementById("4").src="ao.png"
            break
            case 4:
            document.getElementById("4").src="ap.png"
            break
            case 5:
            document.getElementById("4").src="2a.png"
            break
            case 6:
            document.getElementById("4").src="2c.png"
            break
            case 7:
            document.getElementById("4").src="2d.png"
            break
            case 8:
            document.getElementById("4").src="2p.png"
            break
            case 9:
            document.getElementById("4").src="3s.png"
            break
            case 10:
            document.getElementById("4").src="3c.png"
            break
            case 11:
            document.getElementById("4").src="3d.png"
            break
            case 12:
            document.getElementById("4").src="3p.png"
            break  
            case 13:
            document.getElementById("4").src="4s.png"
            break
            case 14:
            document.getElementById("4").src="4c.png"
            break
            case 15:
            document.getElementById("4").src="4d.png"
            break
            case 16:
            document.getElementById("4").src="4p.png"
            break
            case 17:
            document.getElementById("4").src="5s.png"
            break
            case 18:
            document.getElementById("4").src="5c.png"
            break
            case 19:
            document.getElementById("4").src="5o.png"
            break
            case 20:
            document.getElementById("4").src="5p.png"
            break
            case 21:
            document.getElementById("4").src="6s.png"
            break
            case 22:
            document.getElementById("4").src="6c.png"
            break
            case 23:
            document.getElementById("4").src="6d.png"
            break
            case 24:
            document.getElementById("4").src="6p.png"
            break
            case 25:
            document.getElementById("4").src="7s.png"
            break
            case 26:
            document.getElementById("4").src="7c.png"
            break
            case 27:
            document.getElementById("4").src="7o.png"
            break
            case 28:
            document.getElementById("4").src="7p.png"
            break
            case 29:
            document.getElementById("4").src="8o.png"
            break
            case 30:
            document.getElementById("4").src="8c.png"
            break
            case 31:
            document.getElementById("4").src="8s.png"
            break
            case 32:
            document.getElementById("4").src="8p.png"
            break
            case 33:
            document.getElementById("4").src="9s.png"
            break
            case 34:
            document.getElementById("4").src="9c.png"
            break
            case 35:
            document.getElementById("4").src="9o.png"
            break
            case 36:
            document.getElementById("4").src="9p.png"
            break
            case 37:
            document.getElementById("4").src="10s.png"
            break
            case 38:
            document.getElementById("4").src="10c.png"
            break
            case 39:
            document.getElementById("4").src="10o.png"
            break
            case 40:
            document.getElementById("4").src="10p.png"
            break
            case 41:
            document.getElementById("4").src="js.png"
            break
            case 42:
            document.getElementById("4").src="jc.png"
            break
            case 43:
            document.getElementById("4").src="jo.png"
            break
            case 44:
            document.getElementById("4").src="jp.png"
            break
            case 45:
            document.getElementById("4").src="ks.png"
            break
            case 46:
            document.getElementById("4").src="kc.png"
            break
            case 47:
            document.getElementById("4").src="ko.png"
            break
            case 48:
            document.getElementById("4").src="kp.png"
            break
            case 49:
            document.getElementById("4").src="qs.png"
            break
            case 50:
            document.getElementById("4").src="qc.png"
            break
            case 51:
            document.getElementById("4").src="qo.png"
            break
            case 52:
            document.getElementById("4").src="qp.png"
            break
    }
    if (sorteio4 >= 1 && 4)
{
ponto4 = 1
}
if (sorteio4 >= 5 && 8)
{
ponto4 = 2
}
if (sorteio4 >= 9 && 12)
{
ponto4 = 3
}
if (sorteio4 >= 13 && 16)
{
ponto4 = 4
}
if (sorteio4 >= 17 && 20)
{
ponto4 = 5
}
if (sorteio4 >= 21 && 24)
{
ponto4 = 6
}
if (sorteio4 >= 25 && 28)
{
ponto4 = 7
}
if (sorteio4 >= 29 && 32)
{
ponto4 = 8
}
if (sorteio4 >= 33 && 36)
{
ponto4 = 9
}
if (sorteio4 >= 37 && 40)
{
ponto4 = 10
}
frmplacar.txtplacar.value=ponto1 + ponto2 + ponto3 + ponto4
if (placar == 21){
    alert("Você Ganhou")}
if (placar > 21) {
    alert("Você Perdeu")}
}

