$(function () {
	//initLayout();//rem布局
	initpage();
});

/**
 * rem布局 
 * 
 */
function initLayout () {
	/**
	var pixclPatio = 1 / window.devicePixelRatio;
	$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale='+pixclPatio+',minimum-scale='+pixclPatio+',maximum-scale='+pixclPatio+',user-scalable=no" />');
	*/
	var html = document.getElementsByTagName('html')[0];
	var pageWidth = html.getBoundingClientRect().width;
	alert("pageWidth: "+pageWidth);
	//html.style.fontSize = pageWidth / 16+ 'px';
    debugger;
}

function initpage()  
  {  
    var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;  
    var _html = document.getElementsByTagName('html')[0];  
    view_width>640?_html.style.fontSize=640/16 +'px':_html.style.fontSize =view_width/16+'px';  
  }  