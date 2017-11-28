function fetchEvents(response) {
  if (response && !response.error) {

    let events = response.data.map(function(item) {
      console.log(item.id)
      return {
        title: item.name,
        start: item.start_time,
        end: item.end_time
      }
    });

    $('#calendar').fullCalendar({
      events: events
    });
  }
}

window.fbAsyncInit = function() {
  FB.init({
    appId: '543085416045405',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.11'
  });

  FB.api("/InnovationNQ/events", fetchEvents, {
    access_token: "EAAHt7u1OW10BAB2m56VTPSauTlBsXpxUYCBZCWni9Q5dDBjZChTXtpdZB5IzbL2hniVylrinn1g9yQ8BX56GY2vF5pAGPPjbXa0Kq7vyiBZBWYyC0jQs5iNIUO8mojJIhnYc2GlFV7kp4chqUBTUAEyEjdjQdqZCrZCRiGWKhZBugZDZD"
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
