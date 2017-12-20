function truncateString(str,num) { // this function truncates multiple strings
    if(str.length > num) { // if the length of string is greater then num do below
        if(num <= 3) { // if num is lesser than or equal to 3
            str = str.slice(0,num) + "..."; // assign str from start to finish with ... at the end
        }
        else { // if not
            str = str.slice(0, num -3) + "..."; // shorten string with ... replacing the 3 letters
        }
        }
    return str;
}

// there is a maxium string length limit
// make sure the extra parts of the string show as ...
// the limit is 3 
// if its less then 3 for length num , it does not need to do ...
// whats being recommended is string.prototype.slice()
