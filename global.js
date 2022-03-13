(() => {
    /** Parses a string of html then injects it into a target element */
    const injectPartial = (htmlString, target) => {
        // Parse the html string into proper html structure
        const partialNodes = new DOMParser().parseFromString(htmlString, 'text/html');

        // Select every node in form of an array
        const partials = partialNodes.querySelectorAll('body > *');

        // Push each node into target
        Array.from(partials).forEach(node => document.querySelector(target).appendChild(node));
    }

    // Create a container for the side nav
    const sideNavigation = document.createElement('nav');
    sideNavigation.className = "nav";
    document.querySelector('body').prepend(sideNavigation);

    // Fetch html from side-navigation.html to inject into nav.nav
    // I'm not check for errors and this will bite me in the ass one day.
    fetch('../../partials/side-navigation.html')
        .then(data => data.text())
        .then(htmlString => injectPartial(htmlString, 'nav.nav'));
})();
