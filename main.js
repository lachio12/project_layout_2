document.addEventListener("DOMContentLoaded",function(){
	var result =document.querySelector("#result");
	var result_number_wrap= document.querySelector(".result_number_wrap");
	console.log(result)
	var vt_result= result.offsetTop;
	window.addEventListener('scroll', function(e) {
		if(window.pageYOffset > vt_result){
			result_number_wrap.classList.add("show_result");

		}else{
			result_number_wrap.classList.remove("show_result");
		}
	});
	var select_tour =document.querySelector("#select_tour");
	var select_tour_item= document.querySelector(".select_tour_item");
	console.log(result)
	var vt_select_tour= select_tour.offsetTop;
	window.addEventListener('scroll', function(e) {
		if(window.pageYOffset > vt_select_tour){
			select_tour_item.classList.add("tour_item_show");

		}else{
			select_tour_item.classList.remove("tour_item_show");
		}
	});
})