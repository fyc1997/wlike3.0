// Index JavaScript Document
function gainWidth(){
	cWidth=$(document).width();
	var naviWidth=$("#side_navi").width();
	$("#side_main").css("width",cWidth-naviWidth+"px");
	$("#side_top").css("left",naviWidth+"px");
	$("#side_main").css("padding-left",naviWidth+"px");
	$("#side_top").css("width",cWidth-naviWidth+"px");
	$("#side_main_right").css("width",cWidth-naviWidth-$("#side_main_left").width()+"px");
}
function gainHeight(){
	cHeight=$(window).height();
	$("#side_navi").css("height",cHeight+"px");
	$("#side_main_right").css("height",cHeight-60+"px");
	$("#main_pillar").css("height",cHeight-310+"px");
}
function loadIndex(){
	$(".right_top").css("width",(cWidth-$("#side_navi").width()-$("#side_main_left").width())*0.9+"px");
	$(".right_top").css("margin-left",(cWidth-$("#side_navi").width()-$("#side_main_left").width())*0.05+"px");
}
function IconChangeColor(ev){
	if(ev.id=="navi_index"){
		ev.childNodes[1].src="images/indexWhite.png";
	}
	else if(ev.id=="navi_special"){
		ev.childNodes[1].src="images/specialWhite.png";
	}
	else if(ev.id=="navi_hot"){
		ev.childNodes[1].src="images/hotWhite.png";
	}
	else if(ev.id=="navi_warehouse"){
		ev.childNodes[1].src="images/warehouseWhite.png";
	}
	else if(ev.id=="navi_club"){
		ev.childNodes[1].src="images/clubWhite.png";
	}
	else if(ev.id=="navi_user"){
		ev.childNodes[1].src="images/userWhite.png";
	}
	else if(ev.className=="select_num1"){
		ev.childNodes[0].src="images/pointBlue.png";
	}
	else if(ev.className=="select_num2"){
		ev.childNodes[0].src="images/contentBlue.png";
	}
	else if(ev.className=="select_num3"){
		ev.childNodes[0].src="images/repostBlue.png";
	}
	else if(ev.className=="select_num4"){
		ev.childNodes[0].src="images/keepBlue.png";
	}
}
function IconChange(ev){
	if(ev.id=="navi_index"){
		ev.childNodes[1].src="images/index.png";
	}
	else if(ev.id=="navi_special"){
		ev.childNodes[1].src="images/special.png";
	}
	else if(ev.id=="navi_hot"){
		ev.childNodes[1].src="images/hot.png";
	}
	else if(ev.id=="navi_warehouse"){
		ev.childNodes[1].src="images/warehouse.png";
	}
	else if(ev.id=="navi_club"){
		ev.childNodes[1].src="images/club.png";
	}
	else if(ev.id=="navi_user"){
		ev.childNodes[1].src="images/user.png";
	}
	else if(ev.className=="select_num1"){
		ev.childNodes[0].src="images/point.png";
	}
	else if(ev.className=="select_num2"){
		ev.childNodes[0].src="images/content.png";
	}
	else if(ev.className=="select_num3"){
		ev.childNodes[0].src="images/repost.png";
	}
	else if(ev.className=="select_num4"){
		ev.childNodes[0].src="images/keep.png";
	}
}
function blurCommand(){
	//模糊图片
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if (top>40){
		$("#main_command img").css("filter","blur(7px)");
	}else{
		$("#main_command img").css("filter","blur(0px)");
	}
	if (top>200){
		$("#main_navi").css("position","fixed");
		$("#main_navi").css("width","799px");
		$("#main_navi").css("left",$("#side_navi").width()+"px");
		$("#main_navi").css("top","60px");
		$("#main_content").css("margin-top","51px");
	}else{
		$("#main_navi").css("position","relative");
		$("#main_navi").css("width","799px");
		$("#main_navi").css("left","0px");
		$("#main_navi").css("top","0px");
		$("#main_content").css("margin-top","0px");
	}
}