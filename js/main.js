 var dayhtmlElement;
   for(var i=1 ;i<=31;i++)
   {
    dayhtmlElement += '<option value="'+i+'">'+i+'</option>';
   }
   document.getElementById('user birthdate day').innerHTML=dayhtmlElement;
  
   var monthhtmlElement;
   for(var i=1 ;i<=12;i++)
   {
    monthhtmlElement += '<option value="'+i+'">'+i+'</option>';
   }
document.getElementById('user birthdate month').innerHTML=monthhtmlElement

var yearhtmlElement;
for(var i=1900 ;i<=2025;i++)
{
 yearhtmlElement += '<option value="'+i+'">'+i+'</option>';
}
document.getElementById('user birthdate year').innerHTML=yearhtmlElement;

function validateusername(){
  var x =/^[a-z][A-Z]{2,}$/;
  if(x.test(username.value) == true){

  }
  false
}