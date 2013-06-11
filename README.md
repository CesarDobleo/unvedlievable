# Unvedlievable #
-----------------

Change google VED into human-readable value.##  ##

Some time ago, after reading a SEOmoz newsletter we found an interesting presentation about google referrer data. It seems that they've added a param involving where in the search result the user had click on.

This plugin allow you to automatically get the transcription of the Google VED parameter if the visit is coming from a google box click such as news, images, etc.

# How to #

Include the script in your head (and don't forget to include jQuery):

    <script type="text/javascript" src="path/to/js/jquery.js"></script>
    <script type="text/javascript" src="path/to/js/jquery.unvedliavable.js"></script>

Call the plugin when or where you want:

    <script>
    var ved = $.unvedlievable();
    </script>

Do your funky stuff with it!

# Other things #

There are a couple of things you can do with this plugin:

##1. Options: ##

$.unvedlievable(options);

- url: pass a url to check VED instead the referrer
- texts: an object with your language-customized strings
	
	    $.unvedlievable({
	    	url:'http://example.com?ved=xxxxx',
	    	texts:{
	    		organic_search:						'Organic search',
	    		news_onebox_link:					'News OneBox (link)',
	    		news_onebox_image:					'News OneBox (image)',
	    		image_onebox:						'Image OneBox',
	    		video_onebox_link:					'Video OneBox (link)',
	    		video_onebox_image:					'Video OneBox (image)',
	    		organic_search_sitelink:			'Organic search - Sitelink',
	    		knowledge_graph_image_leading:		'Knowledge Graph image (leading)',
	    		knowledge_graph_image_nonleading:	'Knowledge Graph image (non-leading)'
	    	}
	    });

##2. Callback: ##

If you need to do something with the returning value (most cases), you can use the returning value this way (options is not required):

	    $.unvedlievable(options,function(data){
	    	// do things with data
	    });

