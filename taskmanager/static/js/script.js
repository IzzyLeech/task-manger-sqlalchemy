document.addEventListener('DOMContentLoaded', function (){
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initializtion
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format:"dd mmmm, yyyy",
        i18n: {done: "Select"}
    })

    // select initializtion
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialization
    let collapsible = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsible);

});