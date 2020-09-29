googlerecpchk = false;

function recaptchaCallback() {
    googlerecpchk = true;
    document.getElementById('formContact').disabled=false;
    document.getElementById('formContact').classList.remove("btn-dark");
    document.getElementById('formContact').classList.add("btn-primary");
    $( "#aviso" ).remove();
};

function recaptchaCallback2() {
    googlerecpchk = true;
    document.getElementById('formContact1').disabled=false;
    document.getElementById('formContact1').classList.remove("btn-dark");
    document.getElementById('formContact1').classList.add("btn-primary");
    $( "#aviso1" ).remove();
};

function validar(){
   if(!googlerecpchk){
     document.getElementById('formContact').disabled=true;
      return false;
   }
 };
