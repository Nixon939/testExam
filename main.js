console.log("test exam: OK");
var cnt=0;
var cntStep=1;
var cntMin =0;
var cntMax=9;
var textWarning="\n";
var posArray=[49.10,50.23,48.98,51.45,50.55];
var outputText="";
window.onload=function() {
	function clickCount() {
		var btn=this.textContent;
		if (btn=="Back") {
			cnt-=cntStep;
		}
		if (btn=="Next") {
			cnt+= cntStep;
		}
			if(btn=="Reset") {
				cnt -=cntMin;
			}
			if (btn=="Set Max") {
				cnt-= cntMax;
			}
			if (cnt<cntMin) {
				cnt=cntMin;
				textWarning="Warning!!! Reached the lower limit: "+cntMin;
				alert(textWarning);
			}
			if (cnt>cntMax) {
				cnt=cntMax;
				textWarning="Warning! Reached the upper limit: "+cntMax;
				alert(textWarning);
			}
			result.textContent="Button: "+btn;
			resultCnt.textContent="cnt= "+cnt;
			resultItem.textContent='posArray['+cnt+']='+posArray[cnt];
			return false;
			}
			var result=document.getElementById('result');
			var resultCnt=document.getElementById('resultCnt');
			resultCnt.textContent='cnt='+cnt;
			var resultItem=document.getElementById('resultItem');
			resultItem.textContent= 'posArray['+cnt+']='+posArray[cnt];
			var col=document.getElementsByClassName('btnCount');
			for (var i=0,n=col.length; i<n; i++) {
				col[i].onclick=clickCount;
				result.textContent=result.textContent+''+i;
			}
}