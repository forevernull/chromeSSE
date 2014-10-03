$(function(){
	
	var sse = chrome.extension.getBackgroundPage().SSE;
	sse.hello();
	sse.removeFirst();
	var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('editor'), {
		mode:  "perl",
		lineNumbers: true
	});
});
