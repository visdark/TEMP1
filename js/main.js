
jQuery(document).ready(function(){
	
    jQuery('a[rel="self"]').click( function() {
     	jQuery("a[rel=self]").attr('target', '_self');	        
    });

    jQuery('a[rel="top"]').click( function() {
     	jQuery("a[rel=top]").attr('target', '_top');	        
    })
    jQuery('a[rel="parent"]').click( function() {
     	jQuery("a[rel=parent]").attr('target', '_parent');	        
    })
    
    jQuery('a[rel="blank"]').click( function() {
     	jQuery("a[rel=blank]").attr('target', '_blank');	      
    })
    

    jQuery('a[rel="popup"]').click( function() {
     	popUp(this)
     	return false;;
    })
    
	 jQuery('.glossarymenu a').click( function() {
        jQuery("#id_search").val("");
        jQuery('#id_search').focus();

        jQuery('#id_search').quicksearch('li.glossaryItem',{
	        'selector' : 'h2',
	        'bind': 'keyup click',
	        'loader': 'span.loading',
	        'noResults': '#noresults',
	        onAfter: function () { 
				updateHeader()
			}
	   }); 	  
     	
    })
	
    if(document.getElementById("homecontent")) {
        jQuery('.homeslider').anythingSlider({
		      easing: "easeInOutExpo",        // Anything other than "linear" or "swing" requires the easing plugin
		      autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
		      delay: 6000,                    // How long between slide transitions in AutoPlay mode
		      startStopped: false,            // If autoPlay is on, this can force it to start stopped
		      animationTime: 600,             // How long the slide transition takes
		      hashTags: true,                 // Should links change the hashtag in the URL?
		      buildNavigation: true,          // If true, builds and list of anchor links to link to each slide
		      pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
		      startText: "",             // Start text
		      stopText: "",               // Stop text
		      navigationFormatter: formatText       // Details at the top of the file on this use (advanced use)
        });
    
        jQuery('#coda-slider-1').codaSlider({
		     anchorPrefer: "trading-panel-",
		     dynamicTabs: false
        });		

    }
    
    if(document.getElementById("rangeofmarketslanding")) {
		jQuery("a.jt").each(
		  function(){
			  jQuery(this).simpletip({
		      content: $("."+$(this).attr('rel')).html(),
		      fxied: false,
		      boundryCheck: true,
		      showEffect:"slide",
		      position: "bottom",
		      boundryCheck: false
		    });
		  });

	}


    if(document.getElementById("id_search")) {
      jQuery("#id_search").click(function() {
         jQuery("#id_search").val("");
       });

	  jQuery('#id_search').quicksearch('li.glossaryItem',{
	        'selector' : 'h2',
	        'bind': 'keyup click',
	        'loader': 'span.loading',
	        'noResults': '#noresults',
	        onAfter: function () { 
				updateHeader()
			}
	   }); 	  
    }

    if(document.getElementById("newsticker")) {
        jQuery("#newsticker").show();    
        jQuery("#newsticker").simplyScroll({
			autoMode: 'loop',
			speed :2
	    });		
	 }
		 
	
	if(jQuery(".formtable")) 
	{
	    jQuery(".formtable input").each(function()
	    {
	        var textfieldvalue = $(this).attr("title");
            if(textfieldvalue == " " || textfieldvalue =="")
            {
                jQuery(this).removeAttr("title");
            }    	    
        });
         jQuery(".formtable textarea").each(function()
	    {
	        var textfieldvalue = $(this).attr("title");
            if(textfieldvalue == " " || textfieldvalue =="")
            {
                jQuery(this).removeAttr("title");
            }    	    
        });
    }
});
   
function popUp(url) {
    window.open(url,'IRMASTERgc','scrollbars=0,resizable=yes,location=no,directories=no,menubar=no,toolsbar=no,status=no,top=0,left=0,height=690,width=1019');
}
   
function OpenForm(i) {
        jQuery("#menu").hide();
        if (i == 1) {
            jQuery("#newsletterdiv ").hide("slow");
            jQuery("#demosub").show("slow");
        }
        else {
            jQuery("#livesub").show("slow");                
            jQuery("#newsletterdiv ").hide("slow");
        }
}  


function updateHeader()
{
  jQuery(".glossaryHeader").hide();
  var found = 0;
  var keyword = 1;   
  
   if( jQuery.trim( jQuery('#id_search').val().toLowerCase()) == "please enter search item" || jQuery.trim( jQuery('#id_search').val().toLowerCase()) == "")  
   {
       keyword = 0;
   }
   else{
    
    jQuery('.glossaryHeader').each(function(index) {
        var alpha = $(this).text().toLowerCase();        
        if(jQuery('#id_search').val().charAt(0).toLowerCase() == alpha )
        {
            found++;
            jQuery(this).show();
        }
        
    });
    }
   
   if(found == 0 && keyword==0  )
   {
      jQuery(".glossaryHeader").show();
   }
   
}

function formatText(index, panel) {
	  return index + "";
}

function counterRedirect()
{
   var TARG_ID = "counter";
   var e = document.getElementById(TARG_ID);
   var cTicks = parseInt(e.innerHTML);
   
   var timer = setInterval(function()
   {
      if( cTicks )
      {
         e.innerHTML = --cTicks;
      }
      else
      {
         clearInterval(timer);
         //document.body.innerHTML = msg;
         location = url;	  
      }

   }, 1000);
}
 