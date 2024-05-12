import customerModel from "../model/customerModel.js";
import {customer} from "../db/db.js";


function loadTable(){
    $('#customerTable').empty();

    customer.map((item, index) => {
        let record = `
            <tr>
                <td class="customer-id-valu">${customer.id}</td>
                <td class="customer-name-value">${customer.name}</td>
                <td class="customer-address-value">${customer.address}</td>
                <td class="customer-salary-value">${customer.salary}</td>
            </tr>`;
        $("#cusTable").append(record);
    });
}

$(document).ready(function(){
    $("#addCustomer").click(function(){
        // console.log("addcustomer")
        var inputValueId = $("#cusID").val();
        var inputValueFname = $("#cusName").val();
        var inputValueAddress = $("#cusAddress").val();
        var inputValueSalary = $("#cusSalary").val();

        var cusObj = new customerModel(inputValueId, inputValueFname, inputValueAddress, inputValueSalary);

        customer.push(cusObj);

        var newRow = `<tr>
            <td>${inputValueId}</td>
            <td>${inputValueFname}</td>
            <td>${inputValueAddress}</td>
            <td>${inputValueSalary}</td>
        </tr>`;

        $("#cusTable tbody").append(newRow);

        // Clear input fields
        $("#cusID").val("");
        $("#cusName").val("");
        $("#cusAddress").val("");
        $("#cusSalary").val("");
    });
});
var value;
$("#cusTable").on('dblclick','tr',function() {
    let alertConfrimDelete = confirm('Do you really want to delete this customer');
    if (alertConfrimDelete==true) {
        let index = $(this).index();
        value = index;
        $('#deleteCustomer').click();
    }
});

$("#deleteCustomer").on('click', () => {
    customer.splice(value, 1);
    loadTable();
    clearField();
});

function clearField(){
    $("#cusID").val('');
    $("#cusName").val('');
    $("#cusAddress").val('');
    $("#cusSalary").val('');
}
