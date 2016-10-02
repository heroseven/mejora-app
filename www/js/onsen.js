document.addEventListener('init', function(event) {
    // event.target is the <ons-page> element
    if (event.target.matches('#page1')) {
        ons.notification.alert('Page 1 is initiated.');
    }
});