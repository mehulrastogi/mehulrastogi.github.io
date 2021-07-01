function error(input, message) {
    input.className = 'error';
    // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}

function success(input) {
    input.className = 'success';
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}

function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    let re = "112uuTvjsayd8219";

    return re.localeCompare(input.value.trim()) == 0 ?
        success(input) :
        error(input, 'Invalid Coupon!');
}


// select the form
const form = document.getElementById('signup');

// get name and email elements

const email = form.elements[0];


const requiredFields = [
    {input: email,message: 'Coupon is Required'}
];

form.addEventListener('submit', (event) => {
    // event.preventDefault();

    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });

    // validate email
    if (valid) {
        valid = validateEmail(email);
    }

    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert('Succesfully Validated the Coupon! \n Please proceed to notify the Administrator by sending "RedeemJuly" on whatsapp. \n\nPlease note that the validity of this coupon is till End of Time')
    }

});