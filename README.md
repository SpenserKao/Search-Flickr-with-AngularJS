# Search Flickr with AngularJS
An Application to Search Flickr with AngularJS as user interface building tool.

# Execution
The application currently is hosted by Plunkr, and a public Plunk URL [1] has been created for direct execution.

# Supported web browsers
The application has been tested with following browsers with side-effect:
   - Google Chrome, ver 62.0.3202.94 (64-bit)
   - Firefox, ver 57.0 (32-bit)

# Technologies in use
AngularJS and HTML combined, the duet fulfill MVC (Model-View-Controller) pattern, where HTML define# Search Flickr with AngularJS
An Application to Search Flickr with AngularJS as user interface building tool.

# Execution
Two ways to execute the application.

## Directly at Plunkr
A public Plunk URL [1] has been created for direct execution.

## Indirectly through source codes
Extract the package zip file from [2] into a working directory.
Then open index.html with a web browser. 

# Supported web browsers
The application has been tested with following browsers without side-effect:
   - Google Chrome, ver 62.0.3202.94 (64-bit)
   - Firefox, ver 57.0 (32-bit)

# Technologies in use
AngularJS and HTML combined, the duet fulfill MVC (Model-View-Controller) pattern, where HTML defines view, and AngularJS implements model and controller.
 
## AngularJS
Angular JS ver 1.2.0 has be utilised in this application, noteworthily following directives have been employed:
   - ng-show - enables conditional display of selected image's details 
   - ng-keyup - facilitates real-time search
   - ng-repeat - implements images thumbnail
   - ng-model - binds view into model required by an input that specifies keywords (tags) for search

## HTML5
Following semantic HTML5 elements have been in use:
   - article
   - section
   - figure

## CSS3 
Following CSS3 properties have been used:
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
the URLs of FlickrAPI[3] and referenced AngularJS lbrary [4] have no pronblem staying with "http" 
protocal. But as the solution needs to be ported to online collaborating tool CodePen or Plunkr, s view, and AngularJS implements model and controller.
 
## AngularJS
Angular JS ver 1.2.0 has be utilised in this application, noteworthily following directives have been employed:
   - ng-show - enables conditional display of selected image's details 
   - ng-keyup - facilitates real-time search
   - ng-repeat - implements images thumbnail
   - ng-model - binds view into model required by an input that specifies keywords (tags) for search

## HTML5
Following semantic HTML5 elements have been in use:
   - article
   - section
   - figure

## CSS3 
Following CSS3 properties have been used:
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
the URLs of FlickrAPI[3] and referenced AngularJS lbrary [4] have no pronblem staying with "http" 
protocal. But as the solution needs to be ported to online collaborating tool CodePen or Plunkr, 
especially the latter demands much securer "https" protocol, we have to actuate such change 
onto two above mentioned URLs accordingly, resulting in [5] and [6] respectively.

## Referring to a JSON Flickr Feed
![a sample of JSON Flickr Feed](aJsonFlickrFeed.jpg "a sample of JSON Flickr Feed") <br/>
As screenshot illustrated above, following properties of each image object item of a received JSON Flickr feed [7] have been utilised:
   - title
   - link - points to underlying image of original size 
   - media - whose m property containing smaller size image is used to form thumbnail of images
   - author
   - tags

# ToDo
| item | Description | Implemented? (Y/N) |
| ---:|:-------------|:-----:|
|1| Make the limit of number of image objects configurable. (Currently the limit is default to 20.) | N |
|2| Move current optionally displayed "More details of selected image" area from top of page to the right of tags input area, hopefully achieving better user experience.| Y | 
|3| "More details of selected image" area should only be exhibited when clicking an image of newly generated thumbnails. In other word, the area shouldn't be exhibited when a thumbnails is just generated until a click on an image of the thumbnails. Technology wise, whenever keywords/tags input area's content is adjusted, previously exhibited "More details of selected image" area should be unexhibited.| Y |
|4| Add About info, release note and todo list.| Y |
{5] FIx a Google Chrome-specific error that is associated with attemp of loading json file from same working directory: "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https."| N | 

# Reference
[1] https://run.plnkr.co/plunks/jF2JQTbH0828xJ6wjgme/ <br/>
[2] https://github.com/SpenserKao/Search-Flickr-with-AngularJS <br/>
[3] http://api.flickr.com/services/feeds/photos_public.gne <br/>
[4] http://code.angularjs.org/1.2.0/angular.js <br/>
[5] https://api.flickr.com/services/feeds/photos_public.gne <br/>
[6] https://code.angularjs.org/1.2.0/angular.js <br/>
[7] https://www.sitepoint.com/load-flickr-photos-using-jsonapi
