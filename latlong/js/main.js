$(document).ready(function() {
   	
	$(".container").css("min-height",$(window).height());


	$("#findLatLong").click(function(event) {
		
		var result = 0;
		
		$(".alert").hide(); // resets alerts so no more than one appears at a time
		
		event.preventDefault();
		
		
			$.ajax({
				type: "GET",
				url: "https://maps.googleapis.com/maps/api/geocode/xml?address="+encodeURIComponent($('#address').val())+"&sensor=false&key=APIkey", 					
				dataType: "xml",
				success: processXML,
				error: error
						
			});
			
			function error() {
				$("#failServer").fadeIn();
			}
			
			function processXML(xml) {
				
				$(xml).find("geometry").each(function() {
					
					$("#success").html("The latitude and longitude for the address you entered are: "+$(this).find('location').text()).fadeIn();
					
				});
			
			
			}
			
		});	
	
});


		
