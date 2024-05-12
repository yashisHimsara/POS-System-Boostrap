import itemModel from "../model/itemModel.js";
import {customer, items} from "../db/db.js";

function loadTable(){
    //$('#ItemTable').empty();

    items.map((items, index) => {
        let record = `
            <tr>
                <td class="customer-id-valu">${items.id}</td>
                <td class="customer-name-value">${items.name}</td>
                <td class="customer-address-value">${items.qty}</td>
                <td class="customer-salary-value">${items.price}</td>
            </tr>`;
        $("#iTable").append(record);
    });
}
$(document).ready(function(){
    $("#addItem").click(function(){
        var inputValueId = $("#itemId").val();
        var inputValueFname = $("#ItemName").val();
        var inputValueQty = $("#itemQty").val();
        var inputValueprice = $("#unitPrice").val();

        var itemObj = new itemModel(inputValueId, inputValueFname, inputValueQty, inputValueprice);

        items.push(itemObj);

        var newRow = `<tr>
            <td>${inputValueId}</td>
            <td>${inputValueFname}</td>
            <td>${inputValueQty}</td>
            <td>${inputValueprice}</td>
        </tr>`;

        $("#iTable").append(newRow);

        $("#itemId").val("");
        $("#ItemName").val("");
        $("#itemQty").val("");
        $("#unitPrice").val("");
    });
});

var value;
$("#iTable").on('dblclick','tr',function() {
    let alertConfrimDelete = confirm('Do you really want to delete this item');
    if (alertConfrimDelete==true) {
        let index = $(this).index();
        value = index;
        $('#deleteItem').click();
    }
});

$("#deleteItem").on('click', () => {
    items.splice(value, 1);
    loadTable();
    clearField();
});

function clearField(){
    $("#itemId").val('');
    $("#ItemName").val('');
    $("#itemQty").val('');
    $("#unitPrice").val('');
}

