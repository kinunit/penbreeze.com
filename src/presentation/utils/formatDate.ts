export default function formatDate(dateTime:Date) {

    const dateString = dateTime.toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return dateString;
}