const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const convertToLocalDate = (dateTime) => {
    return new Date(dateTime).toLocaleDateString('tr-TR', options);
}