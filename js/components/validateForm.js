function validateForm(form) {
    const formInputsDOM = form.querySelectorAll('input');
    const formTextareaDOM = form.querySelectorAll('textarea');
    for (const i of formInputsDOM) {
        if (i.value === '') {
            alert('Must enter ' + i.placeholder + ' value');
        }
        if (i.name === 'fname') {
            const regex = /[^a-zA-Z\s]+/g;
            if (regex.test(i.value)) {
                alert('ERROR: Name has to be only letters');
                break;
            }
        }
        if (i.name === 'femail') {
            const regex1 = /[@]/g;
            const regex2 = /[.]/g;
            if (!regex1.test(i.value) || !regex2.test(i.value)) {
                alert('ERROR: email has to have @ and . symbols');
                break;
            } else if (i.value.match(regex1).length > 1) {
                alert('ERROR: email has to have one @ symbol');
                break;
            } else if (i.value.indexOf('@') > i.value.lastIndexOf('.')) {
                alert('ERROR: email has to have @ symbol before last . symbol');
                break;
            }
        }
        if (i.name === 'fphone') {
            const regex = /\D/g;
            if (regex.test(i.value)) {
                alert('ERROR: phone has to be only numbers');
                break;
            }
        }
    }
    for (const i of formTextareaDOM) {
        if (i.value === '') {
            alert('Must enter ' + i.placeholder + ' value');
        }
    }
}

export { validateForm };
