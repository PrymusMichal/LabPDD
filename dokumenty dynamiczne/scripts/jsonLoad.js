function jsonLoad() {
    let xhhtp = new XMLHttpRequest();
    var response = "";
    xhhtp.open("GET", "json.txt")
    xhhtp.send();
    xhhtp.onload = function () {
        response = JSON.parse(xhhtp.response);
        for (var i = 0; i < response.length; i++) {
            var row = "<tr><td>" + response[i].nazwa+
                "</td><td>" + response[i].id +
                "</td><td>" + response[i].netto +
                "</td><td>" + response[i].vat +
                "</td><td>" + response[i].brutto +
                "</td><td>" + response[i].category +
                "</td><td>" + response[i].options +
                "</td><td>" + response[i].rating +
                "<td><button type='button' class='btn btn-primary' onclick=\"deleteRow(this.closest('tr'))\" > Usuń </button></td>" +
                "<td><button type='button' class='btn btn-primary' onclick=\"updateRow(this.closest('tr'))\" >Edytuj</button></td>" +
                "<td><button type='button' class='btn btn-primary' onclick=\"addToStorage(this.closest('tr'))\" >Dodaj</button></td>" +
                "<td hidden>";
                if (response[i].obrazek=="")
                {
                    response[i].obrazek="https://semantic-ui.com/images/wireframe/image.png";
                } 
                row+="<img src="+response[i].obrazek+" style='max-width:90%; height:auto;display: block; margin-left: auto;margin-right: auto '>" +
                "</td></tr>";
            $(row).appendTo("#myTable tbody");
        }
    }

    $("#myTable").trigger("updateAll", [true, true]);

}