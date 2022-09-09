import {masks} from "./modules/masks.js"
import {validate} from "./modules/validate.js"


document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        
        if (field != 'nome' && field != 'email')
            e.target.value = masks[field](e.target.value)
        
        const isValid = validate[field](e.target.value)

        console.log(isValid)
        
        if (!isValid)
            e.target.classList.add("errorInput")
        else
            e.target.classList.remove("errorInput")

        

    }, false)
})

