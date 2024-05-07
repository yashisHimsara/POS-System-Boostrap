$('#btnDash').click(function (){
    $('#homediv').css('display','block');
    $('#customerPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#OrderPage').css('display','none');
});

$('#btnCustomer').click(function (){
    $('#homediv').css('display','none');
    $('#customerPage').css('display','block');
    $('#itemPage').css('display','none');
    $('#OrderPage').css('display','none');
});

$('#btnItem').click(function (){
    $('#homediv').css('display','none');
    $('#customerPage').css('display','none');
    $('#itemPage').css('display','block');
    $('#OrderPage').css('display','none');
});

$('#btnOrder').click(function (){
    $('#homediv').css('display','none');
    $('#customerPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#OrderPage').css('display','block');
});