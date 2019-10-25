$(function(){
	var index=0;
	var timer=setInterval(move_content,2000);
	function move_content(){
		index++;
		if(index==10){index=0;}
		$(".content_lb").animate({"top":-40*index},300);
	}
	var zs=0;
	var time=setInterval(loop,3000);
	function loop(){
		zs++;
		if(zs==4){zs=0;}
		$(".w_img").animate({"left":-580*zs},300);
	}
	
})