(() => {
    const createChangeCard = (activity) => {
        const activityDetail = document.createElement('li');
        activityDetail.className = 'activity__detail';

        const activityText = document.createElement('p');
        activityText.className = 'activity__text';
        activityText.textContent = activity;

        activityDetail.appendChild(activityText);
        
        return activityDetail;
    };

    const fetchActivityFeed = () => {
        return [
            {
                type: 'change',
                title: 'Ben has made the following changes to the COMP 1537 document',
                activity: [ "Added a paragraph explaining how to create and use css variables", "Provided code examples to demonstrate css variable usage" ],
            },
            {
                type: 'change',
                title: 'Terence has made the following changes to the COMP 1510 document',
                activity: [ "Wrote an explanation on iterating through dictionaries", "Revised one paragraph" ],
            }
        ]
    }

    const fetchEvents = () => {
        return [
            {
                title: "COMP 1712 - Lecture",
                hoursUntil: 1.5,
            },
            {
                title: "COMP 1510 - Lab",
                hoursUntil: 3.5,
            },
            {
                title: "COMP 1510 - Tutorial",
                hoursUntil: 5.5,
            },
            {
                title: "COMP 1110 - Lecture",
                hoursUntil: 6.5,
            },
            {
                title: "COMP 1510 - Lecture",
                hoursUntil: 8.5,
            }
        ]
    }

    const loadRecentFiles = () => {
        return [
            {
                folderPath: 'COMP-1510/Dictionaries',
                filename: 'Looping-through-a-Dictionary'
            },
            // {
            //     folderPath: 'path/to/directory',
            //     filename: '9421dc2a-8aa0-4389-832c-a92995968e88'
            // },
            // {
            //     folderPath: 'path/to/directory',
            //     filename: '3b3ad390-6724-4920-99df-63e4bcc071ff'
            // },
            // {
            //     folderPath: 'path/to/directory',
            //     filename: 'ba2b26dc-ac82-406f-b650-01a5e940f91f'
            // },
            // {
            //     folderPath: 'path/to/directory',
            //     filename: 'b58d0122-2a81-4382-a04a-a6e81c4cb510'
            // }
        ]
    }

    fetchActivityFeed().forEach(data => {
        const activity = document.querySelector('#activity--template').content.cloneNode(true);
        const activityTitle = activity.querySelector('.activity__title > p');
        const activityList = activity.querySelector('.activity__list');

        activityTitle.textContent = data.title + (data.type === 'change' ? ':' : '');

        if (data.activity) data.activity.forEach(activity => {
            const cardType = createChangeCard;

            activityList.appendChild(cardType(activity));
        });

        document.querySelector('#activity__feed').appendChild(activity);
    });

    fetchEvents().forEach(data => {
        const event = document.querySelector('#event--template').content.cloneNode(true);
        const eventTitle = event.querySelector('.event__title');
        const eventTime = event.querySelector('.event__time');

        eventTitle.textContent = data.title;
        eventTime.textContent = `Starts in ${data.hoursUntil} hours`;

        document.querySelector('#events').appendChild(event);
    });

    loadRecentFiles().forEach(data => {
        const recent = document.querySelector('#recent--template').content.cloneNode(true);
        const inlineCard = recent.querySelector('.inline-card');
        const recentFile = recent.querySelector('.recent__file');

        inlineCard.setAttribute('href', `../../pages/notepage/notepage.html?courseId=0&topicId=0&docId=0`);
        recentFile.textContent = data.folderPath + '/' + data.filename;

        document.querySelector('#recents').appendChild(recent); // 'recents' for the lack of a better name
    });
})();
