//Postal Code
function validatePostalCode(postalCode)
{
    var newPostalCode = postalCode.trim();
    var num1 = newPostalCode.substring(0,3);
    var num2 = newPostalCode.substring(3);
    var fullPostalCode = [num1, num2];
    var completePostalCode = fullPostalCode.join(' ');
    var validPostalCode = completePostalCode.replace(/\s+/g, ' ');
    const notValid1 = new RegExp('[^DFIOQUWZ]');
    const notValid2 = new RegExp('[^DFIOQU]');

    if(notValid1.test(validPostalCode[0]) === true 
    && isNaN(validPostalCode[1]) === false &&
     notValid2.test(validatePostalCode[2]) === true && 
     validPostalCode[3] === ' ' &&
     isNaN(validPostalCode[4]) === false &&
     notValid2(validPostalCode[5]) === true &&
     isNaN(validPostalCode[6]) === false &&
     validPostalCode === 7)
     {
        return `${validPostalCode}`;
     }

  
     return false;
}



//Hourly Rate
const hiring = document.querySelector('#contactHiring');
hiring.addEventListener('change', showButton);
function showButton()
{
    if(this.checked)
    {
        document.querySelector('#hourlyRate').hidden=false;
        document.querySelector('#contactComment').hidden=true;
        document.querySelector('#contactQuestion').hidden=false;

    }
}




//Submit Button
