
// function for converting time less than a week 
// to relative format (eg. "3 days ago")
const timeConverter = (time) => {

    // create date object 
    const dateObj = new Date(time);
    // convert time to seconds
    const dateInSecs = dateObj.getTime() / 1000;


    let relativeTime;

    // convert time less than to relative format
    switch(true){
        case (dateInSecs < 60):
            relativeTime = `${dateInSecs} 
            second${(dateInSecs > 1) ? 's' : ''} ago`;
            break; 
        case (dateInSecs < (60*60)):
            relativeTime = `${Math.round(dateInSecs/60)} 
            minute${((dateInSecs/60) > 1) ? 's' : ''} ago`;
            break; 
        case (dateInSecs < (60*60*24)):
            relativeTime = `${Math.round(dateInSecs/60*60)} 
            hour${((dateInSecs/60*60) > 1) ? 's' : ''} ago`;
            break; 
        case (dateInSecs < (60*60*24*7)):
            relativeTime = `${Math.round(dateInSecs/60*60*24)} 
            day${((dateInSecs/60*60*24) > 1) ? 's' : ''} ago`;
            break;
        case (dateInSecs === (60*60*24*7)):
            actualTime = '1 week ago';
            break;  
        default:
            relativeTime = time;
    }

    return relativeTime;
}