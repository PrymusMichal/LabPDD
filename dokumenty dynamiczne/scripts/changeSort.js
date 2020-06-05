function changeSort(){
    var sel = document.getElementById('sortowanie').value;
    switch (sel) {
        case '1':
            $("#myTable").trigger("sorton", [ [[4,"a"]] ]);
            break;
        case '2':
            $("#myTable").trigger("sorton", [ [[4,"d"]] ]);
            break;
        case '3':
            $("#myTable").trigger("sorton", [ [[7,"a"]] ]);
            break;
        case '4':
            $("#myTable").trigger("sorton", [ [[7,"d"]] ]);
            break;
        case '5':
            $("#myTable").trigger("sorton", [ [[0,"a"]] ]);
            break;
        case '6':
            $("#myTable").trigger("sorton", [ [[0,"d"]] ]);
            break;
    }
    alert(sel);

}