function addToCart()
{ 
    var itemList=JSON.parse(localStorage.getItem('koszyk'));
    var cena=0;
    $("#modalTable tbody tr").remove();
    for (var i=0;i<itemList.length;i++)
    {
        var row="<tr>\n"
        row+="<td>"+itemList[i].nazwa+"</td><td>"+itemList[i].brutto+"</td><td>1</td><td><input type='number' id='iloscSztuk' value=1 onchange='setCena()'></td>";
        row+="</tr>\n"
        $(row).appendTo("#modalTable tbody");
        cena+=parseFloat(itemList[i].brutto);
    }
    document.getElementById("cena").value=cena;
}
function setCena()
{
    var cena=0;
    var table = document.getElementById("modalTable");
    for (var i = 1, row; row = table.rows[i]; i++) {
       cena+=parseFloat(row.cells[1].innerText)*parseFloat(row.cells[3].firstChild.value);
    }

    document.getElementById("cena").value=cena+parseFloat(document.getElementById("dostawa").value);
}