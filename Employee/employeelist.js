function buildEmptable()
{
  var emptbl=document.getElementById('EmpTbl');
   var l=emp.length;
   for(i=0;i<emp.length;i++)
   {
        var row = buildtblrow(emp[i]);
      
        emptbl.appendChild(row);
   }
}
function buildtblrow(emp)
{
  var trow = document.createElement("tr");
  var Sn=buildtblcolumn(emp.SNo);
   var name=buildtblcolumn(emp.EmpName);
    var department=buildtblcolumn(emp.Department);
     var grade=buildtblcolumn(emp.Grade);
      trow.appendChild(Sn);
       trow.appendChild(name);
        trow.appendChild(department);
         trow.appendChild(grade);
         return trow;
     
}
function buildtblcolumn(emp)

{
var tcolumn = document.createElement("td");
    tcolumn.innerText = emp;
    return tcolumn;
}

buildEmptable();