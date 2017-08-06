/* 
 * The MIT License
 *
 * Copyright 2017 hampe.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


window.addEventListener('DOMContentLoaded', function(){
	var wk = new Worker('./detect.js')
		,dcnt = 0, CLOSE_COUNT = 5
	;
	wk.onmessage = function(e){
		if(e.data == 'init'){
			setInterval(function(){
				if(navigator.appVersion.indexOf('Chrome') == -1){
					wk.postMessage(0);
					debugger;
				}else{
					if(dcnt > CLOSE_COUNT){
						console.error('APPLICATION STOPPED');
						wk.postMessage('close');
						window.close();
						return;
					}else if(dcnt > 0){
						console.error('MUST CLOSE DEBUGGER!!');
					}
					dcnt++;
				}
			}, 1000);
		}else if(e.data == 'close'){
			window.close();
			return;
		}else{
			dcnt = 0;
		}
	};
	wk.postMessage('init');
});