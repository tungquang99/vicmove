export function convertNumber(value) {
    value = value.substr(0,4) + "....." + value.substr(7,9);
    return value;
}