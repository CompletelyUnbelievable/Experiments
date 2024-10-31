// ==UserScript==
// @name        WatchOnTikTok
// @namespace   CUWatchOnTT
// @match       http*://urlebird.com/video/*
// @grant       none
// @version     1.0
// @author      CompletelyUnbelievable
// @run-at      document-end
// @description Adds a "Watch On TikTok" button below the video on UrlBird.
// @homepageURL https://github.com/CompletelyUnbelievable/Experiments/tree/master/UserScripts
// @updateURL   https://raw.githubusercontent.com/CompletelyUnbelievable/Experiments/refs/heads/master/UserScripts/UrlBird/WatchOnTikTok.user.js
// @downloadURL https://raw.githubusercontent.com/CompletelyUnbelievable/Experiments/refs/heads/master/UserScripts/UrlBird/WatchOnTikTok.user.js
// ==/UserScript==

(function(){
	let classed={'dmn': 'https://www.tiktok.com/', 'pth': '/video/'+location.pathname.match(/[0-9]+(?=\/$)/g), 'usr': document.title.substring(document.title.lastIndexOf('@')||-1, document.title.length-1),
		'parseHTML': function(html=[]){
			if(html.constructor===String&&/(<[^<>]+>)/g.test(html)){
				var template=document.createElement('template');
				template.innerHTML=html.trim();
				return template.content.childNodes.length>1?template.content.childNodes:template.content.childNodes[0];
			}
			return null;
		}
	};
	classed.TikTokURL=function TikTokURL(){return classed.dmn+classed.usr+classed.pth||'';};
	classed.button=classed.parseHTML(`<p><a href="${classed.TikTokURL()||'#'}" class="flat three" style="background-color:black;box-shadow:3px 3px 3px 3px grey;">Watch On TikTok</a></p>`);
	document.querySelector('.download').append(classed.button);
	//window.classed=classed;//*/Expose for debugging.
})();
