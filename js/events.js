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
    access_token: "EAAHt7u1OW10BAGSnI60Lckub2yDoBJgpNi97Eg6bySyDZCn56wuE98DZCpxJJA1JY9ARy5LKm7WOTbq6THFkZB7BgvwrVeb2lFfsMAIY06h6VrWqWYuhZAOKRi5S6lyaeBcKZAZB1GNcENLQa2kuuPOwLvtujELmMLc7JnqcVLWwbhdodxcXiZCc2C8P77r10EZD"
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
