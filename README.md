# Search Flickr with AngularJS
An Application to Search Flickr with AngularJS as user interface vuilding tool.

# Execution
Extract the package into a working directory.
Then open index.html with a web browsers. 

## Supported web browsers
The application has been tested with following browsers with side-effect:
Google Chrome: ver 62.0.3202.94 (64-bit)
Firefox: ver 57.0 (32-bit)

# Technologies in use

## AngularJS
Angular JS ver 1.2.0 has be utilised in this application.

## HTML5
Following semantic HTML5 elements have been in use:
   - article
   - section
   - figure

## CSS3 
Following properties have been used:
   - border-radius
   - box-shadow
   - transition
   - -webkit-transition
   - -moz-transition		
   - -ms-transition	
   - -o-transition	

# Technical note
## Change of Protocal HTTP to HTTPS
When the application was opened directly by web browsers, such as Firefox and Google Chrome, 
the URLs of FlickrAPI[1] and referenced AngularJS lbrary [2] has no pronblem staying with "http" 
protocal. But as the solution needs to be ported to online collaborating tool CodePen or Plunkr. 
Especially the latter demands much securer "https" protocol, hence we have to make such change 
onto two above mentioned URLs accordingly to [3] and [4] respectively.

## Referring to a JSON Flickr Feed
<img href="aJsonFlickrFeed.jpg"/>
As screenshot illustrated above, following properties of each image object item have been referred:
   - title
   - link - points to underlying image of original size 
   - media - whose m property containing smaller size image is uded to form thumbnail of images
   - author
   - tags

# ToDos
   - Make the limit of number of image objects configurable. (Currently the limit is default to 20.)

# Reference
[1] http://api.flickr.com/services/feeds/photos_public.gne
[2] http://code.angularjs.org/1.2.0/angular.js
[3] https://api.flickr.com/services/feeds/photos_public.gne
[4] https://code.angularjs.org/1.2.0/angular.js
