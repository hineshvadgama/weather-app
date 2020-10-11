export const getApiKey = () => '3478d317fdb0e5afa323177a3bfeaa15';

export function getDateFromObject(dateObject) {
    // Put 0 at the start of single digit date and month to match API format
    const day = (dateObject.getDate() < 10) ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = (dateObject.getMonth() < 10) ? `${dateObject.getMonth()+1}` : dateObject.getMonth();

    const correctFormatDate = `${dateObject.getFullYear()}-${month}-${day}`;
    console.log(dateObject.getMonth());

    return correctFormatDate;
}

export function getFormattedTemp(unroundedTemp) {
    const temp = (!isNaN(unroundedTemp)) ? `${Math.round(unroundedTemp)}°C` : 'Loading...';
    return temp;
}
