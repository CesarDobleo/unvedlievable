(function(jQuery) {
  jQuery.unvedlievable = function(url){
    var veds = {
			QFj:	'Organic search',
			QqQlw:	'News OneBox (link)',
			Qpwl:	'News OneBox (image)',
			Q9QEw:	'Image OneBox',
			Qtwlw:	'Video OneBox (link)',
			QuAlw:	'Video OneBox (image)',
			Qjb:	'Organic search - Sitelink',
			BEPwd:	'Knowledge Graph image (leading)',
			BEP4d:	'Knowledge Graph image (non-leading)'
		};
		var ved = jQuery.unvedlievable.getRefParams().ved;
		if(ved){
			for(i in veds){
				if(ved.indexOf(i)!=-1) return veds[i];
			}
		}
		return false;
    };
	jQuery.unvedlievable.getRefParams = function(url){
		if(!url) url = document.referrer;
		var url_params = new Object();
		if(typeof(url.split('?')[1])=='string'){
			for (i in url.split('?')[1].split('&')){
				if(typeof(url.split('?')[1].split('&')[i])=='string'){
					url_params[url.split('?')[1].split('&')[i].split('=')[0]] = url.split('?')[1].split('&')[i].split('=')[1];
				}
			}
		}
		return url_params;
	};
})(jQuery);
