var submitSearch = function(){
	var input = $("#enter_search").val()
	var item_to_display = []

	for (i = 0; i < data.length; i++){
		var d  = data[i]
		$.each(d, function(index, element){ //key and value
			if(index != "Id" && index != "Poster"){
				//console.log(index)
				var n = (element.toLowerCase()).search(input.toLowerCase())
				if (n != -1){
					item_to_display.push(data[i])
					return false
				}
			}

		})
	}
	display_list(item_to_display)

}

var display_list = function(item_to_display){ //title year summary director
	console.log(item_to_display.length)
	$(".experiences").empty()
	$.each(item_to_display, function(i, item){
		var li = $("<li class='click'>")
		var id = item["Id"]
		var title = item["Title"]
		//$(li).append("<div onlick='window.location.href= '/item/"+id+"' ' class='where'> "+title+" </div> ")
		var link = "<a class='where' href='/item/"+id+"'> "+title+" </a>"
		$(li).append(link)
		var year = item["Year"]
		$(li).append("<h3 class='what pink'> "+year+" </h3> ")
		var director = item["Director"]
		$(li).append("<h3 class='what pink'> "+director+" </h3> ")

		var sum = item["Summary"]
		$(li).append("<p class='description'> "+sum+" </p> ")


		$(".experiences").append(li)
		

	})


}


$(document).ready(function(){
      $("#submit_search").click(function(){
           submitSearch()
      })
      $("#enter_search").keypress(function(e){
            if(e.which == 13){
                  submitSearch()
            }
      })
});
