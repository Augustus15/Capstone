import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCardNumber'
})
export class MaskCardNumberPipe implements PipeTransform {
  transform(value: any): string {
    const visibleDigits = 4; // Number of digits to display at the beginning and end
    const maskedChars = 'x'; // Character used for masking

    const stringValue = value ? value.toString() : '';

    if (!stringValue) {
      return '';
    }

    const visiblePart = stringValue.slice(0, visibleDigits);
    const maskedPart = stringValue.slice(visibleDigits, -visibleDigits).replace(/\d/g, maskedChars);
    const lastDigits = stringValue.slice(-visibleDigits);

    return `${visiblePart}${maskedPart}${lastDigits}`;
  }
}
