function showTable()
{
    if (document.getElementById("tableMode").value==1)
    {
        document.getElementById("myTable").hidden=false;
        document.getElementById("gallery").hidden=true;
    }
    else 
    {
        document.getElementById("myTable").hidden=true;
        document.getElementById("gallery").hidden=false;
        var div=document.getElementById("gallery");
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        var table = document.getElementById("myTable");
        var rowt=document.createElement("div");
        rowt.classList.add("row");
        for (var i=1, row;row=table.rows[i];i++)
        {
            var nazwa=row.cells[0].innerHTML;
            var netto=row.cells[2].innerHTML;
            var brutto=row.cells[4].innerHTML;
            var img="";
            if (row.cells[11]==undefined||row.cells[11].innerHTML=="")
            {
                img="https://semantic-ui.com/images/wireframe/image.png";
            }
            else 
                img=row.cells[11].innerHTML;
            
            let col= document.createElement("div");
            col.classList.add("col-3");
            if ((i-1)%3==0&&i!=1)
            {
                var pagebreaker=document.createElement("div");
                pagebreaker.classList.add("w-100");
                rowt.appendChild(pagebreaker);
            }
            var item=document.createElement("div");
            var item2=document.createElement("div");
            item.style="border: 2px solid #ccc;margin:5px";
            item2.style="border: 1px solid #ccc;margin:0 auto;margin-top:5px;margin-bottom:5px;text-align:center";
            item2.innerHTML+=img;
            item2.innerHTML+=nazwa;
            item2.innerHTML+="<br>";
            item2.innerHTML+=netto+"("+brutto+")";
            item.appendChild(item2);
            col.appendChild(item);
            rowt.appendChild(col);
        }
        var gallery = document.getElementById("gallery");
        gallery.appendChild(rowt);
    }
}
//width: calc(100% * (1/4) - 10px - 1px)