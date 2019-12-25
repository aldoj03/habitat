


$(document).ready(function () {
    AOS.init();
    setTimeout(() => {
        $('.loader').remove()
    }, 3000);

    $('#dropdownMenuLink').hover(function () {
        $('.container-hover').addClass('show');
    }, function () {
        $('.container-hover').removeClass('show');
    }
    );
})