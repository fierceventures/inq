# INQ

[INQ](https://i-nq.com.au) website

Static website generated using [Jekyll](http://jekyllrb.com/).

To install on OSX

```bash
$ gem install jekyll bundler
```

The to run a local web server:

```bash
$ bundle exec jekyll serve
```

This will run a webserver on http://locahost:4000

[Convert HTML to Jekyll](https://github.com/fierceventures/theartof/blob/master/README.md)

# Permanent Facebook Access Token set up

Prerequisite: must be the page admin; changing password or changing admin status will stop the permanent access token

Set up a [website app](https://developers.facebook.com/apps/) here.

Create User-Short-lived Access Token at [Graph API Explorer](https://developers.facebook.com/tools/explorer).

      >Near top right "Application :Graph API Explorer", select your web application.
      
      >Click "Get Token" > "Get User Access Token".
      
      >Select "manage_pages" in the pop up window.
      
      >Click Get access token.
      
      >User-Short-lived Access Token is in the access token box.

Stay on [Graph API Explorer](https://developers.facebook.com/tools/explorer) to create Page Short-lived Access Token.

      >Click "Get Token" > "Get Page Access Token" (This is not the one).
      
      >Click "Get Token" drop down again to select the page that you are creating the token for under "Page Access Tokens".
      
      >Page Short-lived Access Token is in the access token box.
      
Creating Page-Long-live Access Token at [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/).
 
      >Paste the Page Short-lived Access Token in the debug and run it.
      
      >The Access Token type should be "Page".
      
      >Click Extend Access Token (The Page-Long-lived access token will show).
      
      >Click debug near botom right.
      
Make a GET request for Permanent Access Token using Long-lived Access Token

      >Replace USER ID and PAGE-LONG-LIVED-ACCESS-TOKEN; both can be found on debug page.
```
https://graph.facebook.com/v2.10/{USER ID}/accounts?access_token={PAGE-LONG-LIVED-ACCESS-TOKEN}
```
      >Access token in the result is the Permanent Access Token.
      
      >Check at [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/), Expires show display "Never".
  
