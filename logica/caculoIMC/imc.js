/**
 * Cálculo do IMC
 * @author Professor José de Assis
 */

 function calcularImc(){
     let peso, altura, imc
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))
     imc = peso / (altura * altura)
     frmImc.txtImc.value = imc.toFixed(2)
    
    if(imc < 17)
     {
         frmImc.txtImctexto.value ="Muito abaixo do peso ";
         document.getElementById("dado").src ="imc1.png"
     }
    
    if(imc >= 17 &&  18.49)
    {
         frmImc.txtImctexto.value ="Abaixo do peso";
         document.getElementById("dado").src ="imc2.png"
        }
    if(imc >= 18.50 && 24.99)
    {
            frmImc.txtImctexto.value ="Peso Normal";
            document.getElementById("dado").src ="imc3.png"
        }
    if(imc >= 25 && 29.99) 
    {
        frmImc.txtImctexto.value ="Acima do peso";
        document.getElementById("dado").src ="imc4.png"
    }
    if(imc >= 30 && 34.99) 
    {
        frmImc.txtImctexto.value ="Obesidade I";
        document.getElementById("dado").src ="imc5.png"
    }
    if(imc >= 35 && 39.99) 
    {
        frmImc.txtImctexto.value ="Obesidade II";
        document.getElementById("dado").src ="imc6.png"
    }
if(imc > 40) 
{
    frmImc.txtImctexto.value ="Obesidade III";
    document.getElementById("dado").src ="imc7.png"
}
 }
