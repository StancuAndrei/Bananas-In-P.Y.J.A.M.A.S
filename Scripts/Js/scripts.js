//toggle the menu
document.getElementById('nav-toggle').onclick = function(){
	document.getElementById("nav-content").classList.toggle("hidden");
}

$(document).on("scroll", function(){
    /*
    if($(document).scrollTop() > 100){
        $("nav").addClass("shrink");
    }else{
        $("nav").removeClass("shrink");
    }
    */
    $(document).scrollTop() > 100 ? $("nav").addClass("shrink") : $("nav").removeClass("shrink");
});


