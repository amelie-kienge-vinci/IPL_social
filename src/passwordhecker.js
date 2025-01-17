export class Main {


    passwordChecker(password) {
        if (password.length < 8 || !containsSpecialCharacter(password)|| !hasDigit(password)) {
          return false;
        }
        return true;
    } 

    containsSpecialCharacter(password) {
        var specialCharacters = "!@#$%^&*()-+";
        for (const char of password) {
            if (specialCharacters.includes(char)) {
                return true;
            }
        }
        return false;
    }

    hasDigit(password) {
        for (const char of password) {
            if (char >= '0' && char <= '9') {
                return true;
            }
        }   
        return false;
    }

    donotContainsIPL(password) {
        return !password.toLowerCase().includes("ipl");
    }
    
}