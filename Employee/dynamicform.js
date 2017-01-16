// First Name Text Box//
var divi1=document.createElement('div');
var label1=document.createElement('lable');
label1.textContent='First Name :';
var fn=document.createElement('input');
fn.id='txtFirstName';
fn.type='text';
divi1.appendChild(label1)
divi1.appendChild(fn)
// Last Name Text Box//
var divi2=document.createElement('div');
var label2=document.createElement('lable');
label2.textContent='Last Name :';
var ln=document.createElement('input');
ln.id='txtLastName';
ln.type='text';
divi2.appendChild(label2)
divi2.appendChild(ln)
document.getElementById('register').appendChild( divi1);
document.getElementById('register').appendChild( divi2);