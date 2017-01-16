function reversestr()
{
    var str=document.getElementById('txtstr').value;
    
    var newstr= "";
    for(i=str.length-1;i >= 0; i--)
    {
        newstr+= str[i];
    }
   document.getElementById('result').innerHTML = "Reverse of a String is " +newstr;
}