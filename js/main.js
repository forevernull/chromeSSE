// Sina Stupid Editor
// by ForeverNull(forevernull@163.com)
//
// https://github.com/forevernull

window.SSE = {};

;(function(SSE){
	SSE.hello = function(){
		console.log("Hello SSE");
	}
	SSE.removeFirst = function(){
		chrome.tabs.executeScript({
			code: 'document.body.style.backgroundColor="red"'
		});
		var child=document.getElementsByTagName("div");
		console.log(child.length);
	}
	return SSE;
})(window.SSE);
