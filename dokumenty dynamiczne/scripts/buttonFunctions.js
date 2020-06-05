function showRow(x) {
}
function deleteRow(x) {
    document.getElementById("myTable").deleteRow(x.rowIndex);
    $("#myTable").trigger("updateAll", [true, true]);
}
class batchItem{
    constructor(nazwa,id,netto,vat,brutto,category,options,rating,obrazek)
    {
        this.nazwa=nazwa;
        this.id=id;
        this.netto=netto;
        this.vat=vat;
        this.brutto=brutto;
        this.category=category;
        this.options=options;
        this.rating=rating;
        this.obrazek=obrazek;
    }
}

function updateRow(x) {
    document.forms["addProduct"]["inputName"].value = x.cells[0].innerText;
    document.forms["addProduct"]["inputID"].value = x.cells[1].innerText;
    document.forms["addProduct"]["inputNettoValue"].value = x.cells[2].innerText;
    document.forms["addProduct"]["inputVAT"].value = x.cells[3].innerText;
    var category = x.cells[5].innerText;
    switch (category) {
        case '1':
            document.getElementById("gridCategory1").checked = true;
            break;
        case '2':
            document.getElementById("gridCategory2").checked = true;
            break;
        case '3':
            document.getElementById("gridCategory3").checked = true;
            break;
    }
    var category = x.cells[6].innerText;
    if (category.includes("1")) {
        document.getElementById("goodsOptions1").checked = true;
    }
    else {
        document.getElementById("goodsOptions1").checked = false;
    }
    if (category.includes("2")) {

        document.getElementById("goodsOptions2").checked = true;
    }
    else {
        document.getElementById("goodsOptions2").checked = false;
    }
    if (category.includes("3")) {

        document.getElementById("goodsOptions3").checked = true;
    }
    else {
        document.getElementById("goodsOptions3").checked = false;
    }
    if (category.includes("4")) {

        document.getElementById("goodsOptions4").checked = true;
    }
    else {
        document.getElementById("goodsOptions4").checked = false;
    }
    if (category.includes("5")) {

        document.getElementById("goodsOptions5").checked = true;
    }
    else {
        document.getElementById("goodsOptions5").checked = false;
    }

    var category = x.cells[7].innerText;
    switch (category) {
        case '1':
            document.getElementById("GoodsRating1").checked = true;
            break;
        case '2':
            document.getElementById("GoodsRating2").checked = true;
            break;
        case '3':
            document.getElementById("GoodsRating3").checked = true;
            break;
        case '4':
            document.getElementById("GoodsRating4").checked = true;
            break;
        case '5':
            document.getElementById("GoodsRating5").checked = true;
            break;
    }

    document.getElementById("submitButton").innerText="Edytuj";
    document.getElementById("submitButton").setAttribute("onClick","commitChanges('"+x.rowIndex+"')");
}

function commitChanges(x){
    if(validateFormInputVAT() && validateFormInputID() && validateFormInputName() && validateFormInputNettoValue())
    {
        //console.log(document.getElementById("myTable").rows[x].cells[0].innerText);
        document.getElementById("myTable").rows[x].cells[0].innerText=document.forms["addProduct"]["inputName"].value;
        document.getElementById("myTable").rows[x].cells[1].innerText=document.forms["addProduct"]["inputID"].value;
        document.getElementById("myTable").rows[x].cells[2].innerText=document.forms["addProduct"]["inputNettoValue"].value;
        document.getElementById("myTable").rows[x].cells[3].innerText=document.forms["addProduct"]["inputVAT"].value;
        calculateBruttoValue();
        document.getElementById("myTable").rows[x].cells[4].innerText=document.forms["addProduct"]["inputBruttoValue"].value;

        var cat;
        if (document.getElementById("gridCategory1").checked) {
            cat = document.getElementById("gridCategory1").value;
        }
        else if (document.getElementById("gridCategory2").checked) {
            cat = (document.getElementById("gridCategory2").value);
        }
        else if (document.getElementById("gridCategory3").checked) {
            cat = (document.getElementById("gridCategory3").value);
        }
        var opt = "";
        if (document.getElementById("goodsOptions1").checked) {
            opt += document.getElementById("goodsOptions1").value;
        }
        if (document.getElementById("goodsOptions2").checked) {
            opt += (document.getElementById("goodsOptions2").value);
        }
        if (document.getElementById("goodsOptions3").checked) {
            opt += (document.getElementById("goodsOptions3").value);
        }
        if (document.getElementById("goodsOptions4").checked) {
            opt += (document.getElementById("goodsOptions4").value);
        }
        if (document.getElementById("goodsOptions5").checked) {
            opt += (document.getElementById("goodsOptions5").value);
        }
        var rat;
        if (document.getElementById("GoodsRating1").checked) {
            rat = document.getElementById("GoodsRating1").value;
        }
        else if (document.getElementById("GoodsRating2").checked) {
            rat = (document.getElementById("GoodsRating2").value);
        }
        else if (document.getElementById("GoodsRating3").checked) {
            rat = (document.getElementById("GoodsRating3").value);
        }
        else if (document.getElementById("GoodsRating4").checked) {
            rat = (document.getElementById("GoodsRating4").value);
        }
        else if (document.getElementById("GoodsRating5").checked) {
            rat = (document.getElementById("GoodsRating5").value);
        }

        document.getElementById("myTable").rows[x].cells[5].innerText=cat;
        document.getElementById("myTable").rows[x].cells[6].innerText=opt;
        document.getElementById("myTable").rows[x].cells[7].innerText=rat;
    }
    document.getElementById("submitButton").setAttribute("onClick","checkForm()");
    document.getElementById("submitButton").innerText="Submit";
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function addToStorage(x) {
    if (!localStorage.getItem('koszyk'))
    {
        var item=new batchItem(x.cells[0].innerText,x.cells[1].innerText,x.cells[2].innerText,x.cells[3].innerText,x.cells[4].innerText,x.cells[5].innerText,
            x.cells[6].innerText,x.cells[7].innerText,"");
        var items=[];
        items[0]=item;
        localStorage.setItem('koszyk',JSON.stringify(items));
    }
    else 
    {
        var item=new batchItem(x.cells[0].innerText,x.cells[1].innerText,x.cells[2].innerText,x.cells[3].innerText,x.cells[4].innerText,x.cells[5].innerText,
            x.cells[6].innerText,x.cells[7].innerText,"");
        var storedItems=JSON.parse(localStorage.getItem('koszyk'));
        var length=storedItems.length;
        storedItems[length]=item;
        localStorage.setItem('koszyk',JSON.stringify(storedItems));
    }
   /* var item=new batchItem(x.cells[0].innerText,x.cells[1].innerText,x.cells[2].innerText,x.cells[3].innerText,x.cells[4].innerText,x.cells[5].innerText,
        x.cells[6].innerText,x.cells[7].innerText)
    var items=[];
    items[0]=item;
    alert("Dodano element do koszyka");
    
    localStorage.setItem('koszyk',JSON.stringify(items));
    console.log(localStorage.getObj('koszyk'));
    var storedItems=JSON.parse(localStorage.getItem('koszyk'));
    console.log(storedItems);*/
}