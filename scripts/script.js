// $(document).ready(function(){
//     alert("loaded");
// });


// $("#points-of-sale").fadeToggle();

// $(document).ready(function(){
//     $("#sth").show();
// });

function fadeSth() {

     //$("#userForm").hide();

     

    // $("#sth").fadeToggle();
    // $("#modalheader").fadeToggle();
    // $("#idbody").fadeToggle();

    // ////
    // if (localStorage.getItem('userProfile') !== null) 
    //     // $("#sth").fadeToggle();
    //     $("#sth").show();
    // ////
    
    
    
        // {

    //     $("#sth").fadeToggle();
    // } else {

    // }
         
    // if (localStorage.getItem('userProfile') !== null)
    //     $("#info").fadeToggle();



   // $("#idbody").show();
}

// fadeSth();

$(window).on('load', function () {
    // $('#userForm').modal('show'); // form to add the product
    
    // $("#sth").fadeToggle();
});


$('#btnClose').on('click', function() {
    $("#userForm").hide();
});

   $("#sth").fadeToggle();
$("#side-menu").show();


if (localStorage.getItem('userProfile') === null) {

    //  $("#side-menuu").fadeToggle();
    $("#side-menuu").fadeToggle();
       // $("#sth").show();
} else {

    //  $("#side-menuu").fadeToggle();
    $("#side-menuu").show();
       // $("#sth").show();
}
 