//Swal.fire("SweetAlert2 is working!");

const simpleAlert = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
      });
};

const alertGeneric = async (title, text, timer = 2000, showConfirmButton = false, allowOutsideClick = false, icon = 'error') => {
    const options = {
        title: title,
        text: text,
        icon: icon,
        timer: timer,
        showConfirmButton: showConfirmButton,
        allowOutsideClick: allowOutsideClick,
    };

    Swal.fire(options);
};

const alertError = (title, text, timer = 2000, showConfirmButton = false, allowOutsideClick = false) => {
    const options = {
        title: title,
        text: text,
        icon: 'error',
        timer: timer,
        showConfirmButton: showConfirmButton,
        allowOutsideClick: allowOutsideClick,
    };

    Swal.fire(options);
};

const alertConfirm = ( title, text, confirmButtonText = 'Si, guardar!', cancelButtonText ) => {
    const options = {
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0933f1',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText,
    };

    // Añadir el botón Cancelar si se proporciona el texto
    if (cancelButtonText !== undefined) {
        options.cancelButtonText = cancelButtonText;
    }

    return Swal.fire(options);
};

const alertHtml = (title, html, confirmButtonText = 'Si, guardar!', cancelButtonText, icon = 'warning', confirmButtonColor = '#0933f1', cancelButtonColor = '#d33') => {
    const options = {
        title: title,
        html: html,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: confirmButtonText,
    };

    // Añadir el botón Cancelar si se proporciona el texto
    if (cancelButtonText !== undefined) {
        options.cancelButtonText = cancelButtonText;
    }

    return Swal.fire(options);
};

const alertSuccess = (title, text, timer = 2000, showConfirmButton = false, allowOutsideClick = false) => {
    const options = {
        title: title,
        text: text,
        icon: 'success',
        timer: timer,
        showConfirmButton: showConfirmButton,
        allowOutsideClick: allowOutsideClick,
    };

    return Swal.fire(options);
};




export { alertError, alertConfirm , alertHtml , alertSuccess , simpleAlert, alertGeneric };
