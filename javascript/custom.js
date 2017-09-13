$(document).on('click', '.jqs-open-search', function () {
    var $searchPopup = $(this).find('.jqs-search-popup');

    if ($searchPopup.hasClass('active'))
        $searchPopup.removeClass('active');
    else
        $searchPopup.addClass('active');
});