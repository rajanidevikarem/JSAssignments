  var content ="";
  var str = document.getElementById("Str");
//pTag.textContent = content;
content = str.textContent;
  function StrOccuance()
  {
  var stringsearch = "A";
       
    for(var i=count=0; i<content.length; count+=+(stringsearch===content[i++]));
  document.getElementById('result').innerHTML = "Number of Occurance of A is " +count;
  }
