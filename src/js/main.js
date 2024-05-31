// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Swal from 'sweetalert2'

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    Swal.fire({
        title: 'Error!',
        text: 'hi simòn',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
});
