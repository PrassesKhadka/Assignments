// Unix code date converter function
// Unix code: time in second elapsed after JANUARY 1, 1970

export const timeSince = (date: number):string => {
    // date gotten in unix code
    const now = new Date();
    // gotten in unix code 
    const nowSeconds = now.getTime();
    // converted second in millisecond
    const dateSec = date *1000;
    // seconds elapsed since post /1000=> to convert millisecond to second
    const seconds = Math.floor((nowSeconds - dateSec)/1000);

    // interval in days
    let interval = Math.floor(seconds / 86400);

    if (interval >= 1 && interval <= 6) {
        if (interval === 1) return `${interval} day ago`
        else return `${interval} days ago`
    } else if (interval > 6) {
        // unix code dateSec in millisec as parameter
        let created = new Date(dateSec);
        // converts into the date 
        return created.toLocaleDateString();
    }

    // interval in hours
    interval = Math.floor(seconds / 3600);

    if (interval >= 1) {
        if (interval === 1) return `${interval} hour ago`
        else return `${interval} hours ago`
    }

    // interval in minutes
    
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        if (interval === 1) return `${interval} minute ago`
        else return `${interval} minutes ago`
    } else if (interval < 1) return 'Just now'
}