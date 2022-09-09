export const validate = {
    nome(value) {
        
        const verifyLetters = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/
        if(verifyLetters.test(value)) {
            return true
        } else {
            return false
        }
    },
    
    cpf(value) {	
        value = value.replace(/[^\d]+/g,'')	
        if(value == '') return false	
    
        if (value.length != 11 || 
            value == "00000000000" || 
            value == "11111111111" || 
            value == "22222222222" || 
            value == "33333333333" || 
            value == "44444444444" || 
            value == "55555555555" || 
            value == "66666666666" || 
            value == "77777777777" || 
            value == "88888888888" || 
            value == "99999999999")
                return false		
       
        let add = 0;	
        for (let i=0; i < 9; i ++)		
            add += parseInt(value.charAt(i)) * (10 - i)	
            let rev = 11 - (add % 11)	
            if (rev == 10 || rev == 11)		
                rev = 0	
            if (rev != parseInt(value.charAt(9)))		
                return false		
      
        add = 0	
        for (let i = 0; i < 10; i ++)		
            add += parseInt(value.charAt(i)) * (11 - i)	
        rev = 11 - (add % 11)	
        if (rev == 10 || rev == 11)	
            rev = 0	
        if (rev != parseInt(value.charAt(10)))
            return false		
        return true  
    },

    date(value) {
        value = value.split("/")
        if (value[0] > 0 && value[0] < 32 &&
            value[1] > 0 && value[1] < 13 &&
            value[2] > 1890 && value[2] < 2022){
                return true
            } else {
                return false
            }
    },

    email(value) {
        const reg = /\S+@\S+\.\S+/
        if (reg.test(value)) {
            return true
        } else {
            return false
        }
    },

    fone(value) {
        const reg = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

        if (reg.test(value)) {
            return true
        } else {
            return false
        }
    },

    cep(value) {
        const reg = /^[0-9]{5}-[0-9]{3}$/
            if(reg.test(value)) {
                return true
            } else {
                return false
            }
        }
    
}