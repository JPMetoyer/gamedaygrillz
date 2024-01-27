


export function formatCreditCardNumber(numberString: string) {

   const digitsOnly = numberString.replace(/\D/g, '').substring(0, 16);
   return digitsOnly.match(/.{1,4}/g)?.join(' ') || '';
}

export function formatDateString(input: string) {
    // Remove non-numeric characters
    let numericString = input.replace(/\D/g, '');

    // If the string is empty or less than 4 digits, return as is
    if (numericString.length < 4) {
        return numericString;
    }

    // Ensure the string is 4 digits long by truncating if necessary
    numericString = numericString.substring(0, 4);

    // Split into MM/DD format
    const month = numericString.substring(0, 2);
    const day = numericString.substring(2, 4);

    return `${month}/${day}`;
  }


