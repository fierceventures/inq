function fetchEvents(response) {
  if (response && !response.error) {

    let events = response.data.map(function(item) {
      console.log(item.id)
      return {
        title: item.name,
        start: item.start_time,
        end: item.end_time,
        url: 'https://www.facebook.com/events/' + item.id
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
    access_token: "EAAHt7u1OW10BAFPhZBCncKBsosxJ0ZAUiFMzJikEOGrw70ZAqqkJUqk4a43H2ZBcDRvUBmLM2hkKiTCfbZCsxt6KRTwmRTPeX62yOXnbY9B6fPxH0iiyi0U0D5Lw1vtJJ2CyGy4E36q5pEh0ZClHmdUmUsIZCy9tzmNvCR7fVGfoAZDZD"
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
