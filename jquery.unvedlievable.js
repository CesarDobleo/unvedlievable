(function($) {
	$.unvedlievable = function(options,callback){
		if(typeof(options)=='function'){
			var t = callback;
			callback = options;
			options = t;
		}
		$.unvedlievable.opc = $.extend( $.unvedlievable.opc_default, options );
		var ved = $.unvedlievable.getRefParams($.unvedlievable.opc.url).ved;
		if(ved){
			for(i in $.unvedlievable.veds()){
				if(ved.indexOf(i)!=-1){
					return $.unvedlievable.returning(callback,$.unvedlievable.veds()[i]);
				}
			}
			return $.unvedlievable.returning(callback,$.unvedlievable.opc.texts.no_ved_transcription);
		}
		return $.unvedlievable.returning(callback,$.unvedlievable.opc.texts.no_ved_found);
	};
	$.unvedlievable.returning = function(callback,data){
		if(callback){
			callback(data);
		} else {
			return data;
		}
	};
	$.unvedlievable.opc;
	
	$.unvedlievable.opc_default = {
		url:document.referrer,
		texts:{
			organic_search:						'Organic search',
			news_onebox_link:					'News OneBox (link)',
			news_onebox_image:					'News OneBox (image)',
			image_onebox:						'Image OneBox',
			video_onebox_link:					'Video OneBox (link)',
			video_onebox_image:					'Video OneBox (image)',
			organic_search_sitelink:			'Organic search - Sitelink',
			knowledge_graph_image_leading:		'Knowledge Graph image (leading)',
			knowledge_graph_image_nonleading:	'Knowledge Graph image (non-leading)',
			no_ved_transcription:				'No VED transcription found',
			no_ved_found:						'No VED param found'
		}
	};
	
	$.unvedlievable.veds = function(){
		return {
			QFj:	$.unvedlievable.opc.texts.organic_search,
			QqQlw:	$.unvedlievable.opc.texts.news_onebox_link,
			Qpwl:	$.unvedlievable.opc.texts.news_onebox_image,
			Q9QEw:	$.unvedlievable.opc.texts.image_onebox,
			Qtwlw:	$.unvedlievable.opc.texts.video_onebox_link,
			QuAlw:	$.unvedlievable.opc.texts.video_onebox_image,
			Qjb:	$.unvedlievable.opc.texts.organic_search_sitelink,
			BEPwd:	$.unvedlievable.opc.texts.knowledge_graph_image_leading,
			BEP4d:	$.unvedlievable.opc.texts.knowledge_graph_image_nonleading
		};
	};
	$.unvedlievable.getRefParams = function(url){
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