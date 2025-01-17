export class Main {


    passwordChecker(password) {
        if (password.length < 8 || !containsSpecialCharacter(password)) {
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
}