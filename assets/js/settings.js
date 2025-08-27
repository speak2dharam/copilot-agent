function showToast(toastHeading, toastTitle, toastType) {
    var setColors = "";
    if (toastType == "success") {
        setColors = "bg-success text-white";
    }
    if (toastType == "info") {
        setColors = "bg-info text-dark";
    }
    if (toastType == "danger") {
        setColors = "bg-danger text-white";
    }
    if (toastType == "warning") {
        setColors = "bg-warning text-dark";
    }
    const id = 'toast_' + Date.now(); // Unique ID for each toast
    const toastHTML = `
        <div id="${id}" class="toast align-items-center ${setColors} border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">
              <strong>${toastHeading}</strong>
              ${toastTitle}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>`;

    $('#toastContainer').append(toastHTML);

    const toastElement = document.getElementById(id);
    const bsToast = new bootstrap.Toast(toastElement, { delay: 3000 }); // auto-hide after 3s
    bsToast.show();

    // Remove the toast from DOM once hidden
    toastElement.addEventListener('hidden.bs.toast', function () {
        $(toastElement).remove();
    });
}

$(document).ready(function () {
    if (localStorage.getItem('menuCollapsed') === 'true') {
        $('body').addClass('menuCollapsed');
    }

    var currentPath = window.location.pathname.toLowerCase();

    $('.menuSide a').each(function () {
        var linkPath = $(this).attr('href').toLowerCase();

        // Optional: If the link contains the current path
        if (currentPath === linkPath || currentPath.startsWith(linkPath)) {
            $('.menuSide a').removeClass('active'); // Remove from all
            $(this).addClass('active'); // Add to matched
            return false; // Stop looping if matched
        }
    });
});

function toggleMenu() {
    //alert();
    $('body').toggleClass('menuCollapsed');

    if ($('body').hasClass('menuCollapsed')) {
        localStorage.setItem('menuCollapsed', 'true');
    } else {
        localStorage.setItem('menuCollapsed', 'false');
    }

}


function copyText(element) {
    let txt = element.getAttribute("data-copyTxt");

    let $el = $(element);
    $el.find("span.CopyMsgBox").remove();

    $(element > "span").remove();

    navigator.clipboard.writeText(txt);

    //element.append('<span class="CopyMsgBox">Copied</span>');
    $el.append('<span class="CopyMsgBox">Copied</span>');

    $('.CopyMsgBox').delay(1000).fadeOut();
}