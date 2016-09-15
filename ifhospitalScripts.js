// JavaScript Document
var idList = ["TGH", "TWH", "MSH"];
var toggled = false;
var originalText = "";
function showDetails(id){
	for (i=0; i<idList.length; i++){
		if (i != id){
			$("#"+idList[i]).slideToggle();
		}
	}
	$("#"+idList[id]).animate({height: "-=50px"},400);
	$("#"+idList[id]).children("img").animate({bottom:"+=50px"},400);
	$("body").animate({
		padding:"0px",
	},{
		complete:function() {
			$("#detail").animate({opacity:1});
		}
	});
	document.getElementById("detail").src = "hospitalDetail/"+idList[id]+".html";
	toggled = true;
}
function hideDetails(id){	
	$("#detail").animate({opacity:0}, function(){
		for (i=0; i<idList.length; i++){
			if (i != id){
				$("#"+idList[i]).slideToggle();
			}
		}
		$("#"+idList[id]).animate({height: "+=50px"},400);
		$("#"+idList[id]).children("img").animate({bottom:"-=50px"},400);
		$("body").animate({
			padding:"20px",
		});
	});
	toggled = false;
}
/*click listeners*/
$(function() {
	$("#TGH").click(function() {
		if(toggled){
			hideDetails(0);
			$("#TGH p").text(originalText);
		}else{
			showDetails(0);
			originalText = $("#TGH p").text();
			$("#TGH p").text("◀Return");
		};
		return false;
	});
	$("#TWH").click(function() {
		if(toggled){
			hideDetails(1);
			$("#TWH p").text(originalText);
		}else{
			showDetails(1);
			originalText = $("#TWH p").text();
			$("#TWH p").text("◀Return");
		};			
		return false;
	});
	$("#MSH").click(function() {
		if(toggled){
			hideDetails(2);
			$("#MSH p").text(originalText);
		}else{
			showDetails(2);
			originalText = $("#MSH p").text();
			$("#MSH p").text("◀Return");
		};
		return false;
	});
});