(() => {
    // Inject Partials
    const sideNavigation = document.createElement('nav');
    sideNavigation.className = "nav";
    $('body').prepend(sideNavigation);
    $('nav.nav').load('../../partials/side-navigation.html');
})();
