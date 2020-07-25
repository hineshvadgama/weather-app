export const getApiKey = () => '3478d317fdb0e5afa323177a3bfeaa15';

export function getDateFromObject(dateObject) {
    let day;
    let month;

    // Put 0 at the start of single digit date and month to match API format
    day = (dateObject.getDate() < 10) ? `0${dateObject.getDate()}` : dateObject.getDate();
    month = (dateObject.getMonth() < 10) ? `0${dateObject.getMonth()+1}` : dateObject.getMonth();

    const correctFormatDate = `${dateObject.getFullYear()}-${month}-${day}`;

    return correctFormatDate;
}
