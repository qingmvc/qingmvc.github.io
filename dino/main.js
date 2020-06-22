
//
function showDevil(){
	var dom=document.getElementById("imageBox");
	dom.style.display="block";	
	var audio=document.getElementById("audioBox");
	audio.play();
}
//
function hideDevil(){
	console.dir('hideDevil');
	//window.RunnerObj.stop();
	window.RunnerObj.gameOver();
	
	var dom=document.getElementById("imageBox");
	dom.style.display="none";
	var audio=document.getElementById("audioBox");
	audio.pause();
}
//
function onResize() {
	const defaultDimensions = {
		WIDTH: 600.0,
		HEIGHT: 150.0
	};
	const paddingH=10.0;
	const paddingW=20.0;
	
	const windowHeight = window.innerHeight;
	const scaleHeight = (window.innerHeight-paddingH) / defaultDimensions.HEIGHT;
	const scaleWidth  = (window.innerWidth-paddingW) / defaultDimensions.WIDTH;
	//取最小比例，不会被覆盖但有黑边
	const scale = Math.max(1, Math.min(scaleHeight, scaleWidth));
	
	//居中问题，虽然没有超过屏幕高度，但是位置使其头部被覆盖，下移
	var translateY=0;
	if(scale>1.0){
		//高度放大了，需要下移
		//放大后的真实高度
		const scaledCanvasHeight = defaultDimensions.HEIGHT * scale;
		var translateY=window.innerHeight*0.4-scaledCanvasHeight/2.0-paddingH;
		if(translateY<1.0){ translateY=0; }
	}
	//var translateY=0;
	var containerEl = document.getElementById("J-runner-container");
	containerEl.style.transform = 'scale(' + scale + ')';
	containerEl.style.top=translateY+'px';	
}
