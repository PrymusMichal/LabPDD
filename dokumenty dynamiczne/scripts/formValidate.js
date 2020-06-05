
function validateFormInputName() {
    document.getElementById("inputName").classList.remove("is-invalid");
    document.getElementById("inputName").classList.remove("is-valid");

    var x = document.forms["addProduct"]["inputName"].value;
    if (x == "") {
        document.getElementById("inputName").classList.add("is-invalid");
        return 0;
    }

    else if (!/^[a-zA-Z]*$/g.test(x)) {
        document.getElementById("inputName").classList.add("is-invalid");
        return 0;
    }

    else if (x.length > 10) {
        document.getElementById("inputName").classList.add("is-invalid");
        return 0;
    }
    else {
        document.getElementById("inputName").classList.add("is-valid");
        return 1;
    }

}
function validateFormInputID() {
    document.getElementById("inputID").classList.remove("is-invalid");
    document.getElementById("inputID").classList.remove("is-valid");


    var x = document.forms["addProduct"]["inputID"].value;
    if (x == "") {
        document.getElementById("inputID").classList.add("is-invalid");
        return 0;
    }
    else if (!/(^[a-zA-Z0-9][a-zA-Z0-9][-][a-zA-Z0-9][a-zA-Z0-9]$)/.test(x)) {
        document.getElementById("inputID").classList.add("is-invalid");
        return 0;
    }
    document.getElementById("inputID").classList.add("is-valid");
    return 1;
}

function validateFormInputNettoValue() {
    document.getElementById("inputNettoValue").classList.remove("is-invalid");
    document.getElementById("inputNettoValue").classList.remove("is-valid");
    var y = document.forms["addProduct"]["inputNettoValue"].value;
    if (y == "") {
        document.getElementById("inputNettoValue").classList.add("is-invalid");
        return 0;
    }

    else if (!/(^[0-9+.]*$)/.test(y)) {
        document.getElementById("inputNettoValue").classList.add("is-invalid");
        return 0;
    }

    else if (!(/\-?\d+\.\d+/).test(y)) {
        document.getElementById("inputNettoValue").value += ".00";
        document.getElementById("inputNettoValue").classList.add("is-valid");
        return 0;
    }

    else {
        document.getElementById("inputNettoValue").classList.add("is-valid");
        return 1;
    }

}
function validateFormInputVAT() {
    document.getElementById("inputVAT").classList.remove("is-invalid");
    document.getElementById("inputVAT").classList.remove("is-valid");

    var z = document.forms["addProduct"]["inputVAT"].value;
    if (z == "") {
        document.getElementById("inputVAT").classList.add("is-invalid");
        return 0;
    }

    else if (!/(^[0-9]*$)/.test(z)) {
        document.getElementById("inputVAT").classList.add("is-invalid");
        return 0;
    }
    else {
        document.getElementById("inputVAT").classList.add("is-valid");
        return 1;
    }
}

function calculateBruttoValue() {
    var y = document.forms["addProduct"]["inputNettoValue"].value;
    var z = document.forms["addProduct"]["inputVAT"].value;
    document.forms["addProduct"]["inputBruttoValue"].value = Number(y)/100 *Number(z)+Number(y);
}
function validateCategory() {
    if (!document.getElementById('gridCategory1').checked && !document.getElementById('gridCategory2').checked && !document.getElementById('gridCategory3').checked) {
        document.getElementById("gridCategory3").classList.add("is-invalid");
    }
}

function checkForm() {
    var table = document.getElementById('myTable');
    var row = table.rows.length;

    for (i = 1; i < row; i++) {
        var cells = table.rows.item(i).cells;
        //console.log(cells.innerHtml);

        var cellVal = cells[0].innerText;
        if (cellVal == document.forms["addProduct"]["inputName"].value) {
            alert("Taki towar juz istnieje");
            return;
        }

    }
    if (validateFormInputVAT() && validateFormInputID() && validateFormInputName() && validateFormInputNettoValue()) {
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

        var button1 = "<td><button type='button' class='btn btn-primary' onclick=\"showRow(this.closest('tr'))\" > Usuń </button></td>";
        var row = "<tr><td>" + document.forms["addProduct"]["inputName"].value +
            "</td><td>" + document.forms["addProduct"]["inputID"].value +
            "</td><td>" + document.forms["addProduct"]["inputNettoValue"].value +
            "</td><td>" + document.forms["addProduct"]["inputVAT"].value +
            "</td><td>" + document.forms["addProduct"]["inputBruttoValue"].value +
            "</td><td>" + cat +
            "</td><td>" + opt +
            "</td><td>" + rat +
            "<td><button type='button' class='btn btn-primary' onclick=\"deleteRow(this.closest('tr'))\" > Usuń </button></td>" +
            "<td><button type='button' class='btn btn-primary' onclick=\"updateRow(this.closest('tr'))\" >Edytuj</button></td>" +
            "<td><button type='button' class='btn btn-primary' onclick=\"addToStorage(this.closest('tr'))\" >Dodaj</button></td>" +
            "</td></tr>";
        $(row).appendTo("#myTable tbody");


        $("#myTable").trigger("updateAll", [true, true]);

    }
}


/*
    var checkboxCount = 0;
    checkboxCount += document.getElementById("goodsOptions1").checked;
    checkboxCount += document.getElementById("goodsOptions2").checked;
    checkboxCount += document.getElementById("goodsOptions3").checked;
    checkboxCount += document.getElementById("goodsOptions4").checked;
    checkboxCount += document.getElementById("goodsOptions5").checked;
    if (checkboxCount < 2) {

    }

    if (!document.getElementById('GoodsRating1').checked && !document.getElementById('GoodsRating2').checked && !document.getElementById('GoodsRating3').checked && !document.getElementById('GoodsRating4').checked && !document.getElementById('GoodsRating5').checked) {

    }

    return false;
*/