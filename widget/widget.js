function init_widget(params){
	largura1 = arguments[0]+7;
	altura1 = arguments[1]+73;
	largura2 = arguments[0]+8;
	altura2 = 30;
	document.getElementById("diagram_widget").innerHTML='<div style="border:1px #eeeeee solid;border-radius:2px;width:'+largura1+';height:'+altura1+
	'"><div style="border-radius:2px 2px 0px 0px;background-color:#F46122;width:'+largura2+';height:'+altura2+
	'"><div style="font-size:14px;"><div style="height:30px;"><div><table style="color:#ffffff;font-family:Tahoma, Verdana, Segoe, sans-serif;font-size:13px;padding-top:0px;padding-left:5px;height:35px"><tr><td><div style="padding-bottom:6px"></div></td><td><div style="padding-bottom:4px;padding-left:3px;">QR-Code</div></td></tr></table></div></div>'
	+'</div><iframe style="border:none;padding-top:5px;padding-bottom:5px" src="widget_content.html?id='
	+arguments[2]+'" width="'+arguments[0]+'" height="'+arguments[1]+
	'"></iframe><div><center><div style="border-top:1px solid #eee;width:95%"></div></center></div></div></div>';
}
