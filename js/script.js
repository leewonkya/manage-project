$(document).ready(function () {
    $('.dropdown-submenu > a').on("click", function (e) {
        var submenu = $(this);
        $('.dropdown-submenu .dropdown-menu').removeClass('show');
        submenu.next('.dropdown-menu').addClass('show');
        e.stopPropagation();
    })

    $('.dropdown').on("hidden.bs.dropdown", function () {
        $('.dropdown-menu.show').removeClass('show');
    })

    // $('.btn-addRow').on("click", function () {
    //     $('#table').append('<tr><td>my data</td><td>more data</td></tr>');
    // })

})