function capitalize(str) {
    if (str.length === 0) return str; 
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function truncateString(str, maxLength) {

    if (str.length <= maxLength) {
        return str;
    }

    let truncated = str.slice(0, maxLength);

    const lastIndex = Math.max(
        truncated.lastIndexOf(' '),
        truncated.lastIndexOf(','),
        truncated.lastIndexOf('.'),
        truncated.lastIndexOf('!'),
        truncated.lastIndexOf('?'),
        truncated.lastIndexOf(':'),
        truncated.lastIndexOf(';'),
        truncated.lastIndexOf('/')
    );

    if (lastIndex !== -1) {
        truncated = truncated.slice(0, lastIndex);
    }

    return truncated.trim() + '...';
}


function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

