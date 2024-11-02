import {FormControl, ValidationErrors} from '@angular/forms';


export function searchValidator(control: FormControl): ValidationErrors | null{
    const value = control.value;

    if(!value || value.trim().lenth < 1 || value.trim().length > 10){
        return {'searchInvalid': true};
    }

    return null;
}
