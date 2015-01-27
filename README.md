# ajax-latitude-longitude

AJAX using Google Geocode API 

Builds on a postcode finder tutorial. 

I modified the API Geocode request to return latitude and longitude data for any location that the user inputs instead.

Currently shows only one result for each query. This can be a problem when the city query does not have a unique name 
(i.e. there is a "Melbourne" in Australia and Florida); hence searches for a city should include country too.
