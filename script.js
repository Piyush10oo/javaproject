(function(){
	var names=["piyush","sonali","Jen","joker","Jasmeet","bhavna","jim"];
	for(var i=0;i<names.length;i++){
		var firstletter=names[i].charAt(0).toLowerCase();
		if(firstletter=='j'){
			byespeaker.speak(names[i]);
		}else{
			hellospeaker.speak(names[i]);
		}
	}
})();
