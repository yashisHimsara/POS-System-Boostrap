import itemModel from "../model/itemModel.js";
import {customer, items} from "../db/db.js";

function loadTable(){
    $('#ItemTable').empty();

    items.map((item, index) => {
        let record = `
            <tr>
                <td class="item-id-value">${item.id}</td>
                <td class="item-name-value">${item.name}</td>
                <td class="item-qty-value">${item.qty}</td>
                <td class="item-price-value">${item.price}</td>
            </tr>`;
        $("#ItemTable").append(record);
    });
}
$(document).ready(function(){
    $("#addItem").click(function(){
        var inputValueId = $("#itemId").val();
        var inputValuename = $("#ItemName").val();
        var inputValueQty = $("#itemQty").val();
        var inputValueprice = $("#unitPrice").val();

        var itemObj = new itemModel(inputValueId, inputValuename, inputValueQty, inputValueprice);

        items.push(itemObj);

        loadTable();

        $("#itemId").val("");
        $("#ItemName").val("");
        $("#itemQty").val("");
        $("#unitPrice").val("");
    });
});
var value;

$("#iTable").on('click','tr',function() {
    let index=$(this).index();
    value=index;

    let id=$(this).find(".item-id-value").text();
    let name=$(this).find(".item-name-vale").text();
    let qty=$(this).find(".item-qty-value").text();
    let price=$(this).find(".item-price-value").text();



    $("#itemId").val(id);
    $("#ItemName").val(name);
    $("#itemQty").val(qty);
    $("#unitPrice").val(price);
    console.log(id)
});

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
$("#updateItem").on('click', () => {
    var itemID = $('#itemId').val();
    var itemName = $('#ItemName').val();
    var itemQty = $('#itemQty').val();
    var unitPrice = $('#unitPrice').val();

    let itemUpdateObj = items[value];
    itemUpdateObj.id=itemID;
    itemUpdateObj.name=itemName;
    itemUpdateObj.qty=itemQty;
    itemUpdateObj.price=unitPrice;

    loadTable();
    // clearField();
});
function loadAllCustomerId() {
    $('#itemId').empty();
    for (let customerArElement of customer) {
        $('#itemId').append(`<option>${customerArElement.id}</option>`);
    }
}

