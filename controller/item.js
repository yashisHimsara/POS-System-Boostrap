import itemModel from "../model/itemModel";
import {item} from "../db/db";

var recordIndex;

function loadTable(){
    $('#ItemTable').empty();

    items.map((item, index) => {
        let record = `
            <tr>
                <td class="item-id-value">${item.id}</td>
                <td class="item-name-value">${item.name}</td> 
                <td class="item-price-value">${item.price}</td>
                <td class="item-qty-value">${item.qty}</td> 
            </tr>`;
        $("#ItemTable").append(record);
    });
}

$(".item_save_btn").on('click', () => {

    let alertConfrim = confirm('Do you really want to add this item');
    if (alertConfrim==true) {

        var itemId = $('#itemId').val();
        var itemName = $('#ItemName').val();
        var itemPrice = $('#unitPrice').val();
        var itemQty = $('#itemQty').val();

        let itemObj = new itemModel(
            itemId, itemName, itemPrice, itemQty
        );

        items.push(itemObj);

        loadTable();
        clearField();
    }else {
        clearField();
    }
});

$("#ItemTable").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".item-id-value").text();
    let name = $(this).find(".item-name-value").text();
    let price = $(this).find(".item-price-value").text();
    let qty = $(this).find(".item-qty-value").text();


    $("#itemId").val(id);
    $("#ItemName").val(name);
    $("#unitPrice").val(price);
    $("#itemQty").val(qty);
});
$("#ItemTable").on('dblclick','tr',function() {
    let alertConfrimDelete = confirm('Do you really want to delete this item');
    if (alertConfrimDelete==true){
        let index = $(this).index();
        recordIndex = index;
        $('.item_delete_btn').click();
    }
});

$(".item_delete_btn").on('click', () => {
    items.splice(recordIndex, 1);
    loadTable();
    clearField();
});

function clearField(){
    $("#itemId").val('');
    $("#ItemName").val('');
    $("#unitPrice").val('');
    $("#itemQty").val('');
}

$(".item_update_btn").on('click', () => {
    var itemId = $('#itemId').val();
    var itemName = $('#ItemName').val();
    var itemPrice = $('#unitPrice').val();
    var itemQty = $('#itemQty').val();

    let itemUpdateObj = items[recordIndex];
    itemUpdateObj.id=itemId;
    itemUpdateObj.name=itemName;
    itemUpdateObj.price=itemPrice;
    itemUpdateObj.qty=itemQty

    loadTable();
    clearField();
});