import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function IPv4Format(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const IPv4Regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    const controlVal = control.value?control.value.trim():control.value;
    if (IPv4Regex.test(controlVal)) {
      let segments: string[] = controlVal.split('.');
      if (segments.map((i) => Number(i)).find((i) => i > 255)) {
        return { IPv4Format: { value: controlVal } };
      }
      return null;
    }
    return { IPv4Format: { value: control.value } };
  };
}

export function UniqueValue(
  data: any[],
  key: string,
  current: any = null
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // check if data array is empty
    if (!(data && data.length)) return null;
    const controlVal = control.value?control.value:control.value;
    // when updating escape current value
    if(current && current[key] == controlVal) return null;
    let isUnique = data.findIndex((i) => i[key] == controlVal) == -1;
    return isUnique ? null : { UniqueValue: { value: controlVal } };
  };
}
