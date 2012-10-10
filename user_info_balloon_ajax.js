jQuery(function(){
               
        var hideDelay= 500;
        var userID;
        var hideTimer=null;
 
        jQuery('a.username').live('mouseover',function(){
 
                // remove the title
                jQuery(this).removeAttr('title');
 
        jQuery('div.userInfoPreview').remove();
                                if(hideTimer)
                                        clearTimeout(hideTimer); // need implementation
 
                                var pos = jQuery(this).offset();
                                var width = jQuery(this).width();
       
                var container = jQuery('<div class="userInfoPreview">'
                                + '<div class="userInfoPreviewPopupimage"></div>'
                                + '<div class="userInfoPreviewPopup">'
                                +'<p class="popupusername"></p>'
                                +'<p class="popupmail"></p>'
                                +'<p class="popupcreated"></p>'
                                +'</div></div>'
                                );
 
 
 
               
                        jQuery('body').append(container);
               
                jQuery('.userInfoPreview').css({
                                        left:(pos.left + width) + 'px',
                                        top: pos.top - 5 +'px'
                });
               
                jQuery.ajax({
                                type:'GET',
                                url:jQuery(this).attr('about')+'/infoballoon',
                                success:function(data){
                                        jQuery('p.popupusername').text(data.username);
                                        jQuery('p.popupmail').text(data.mail);
                                        jQuery('p.popupcreated').text(data.created);
                                        if(data.picture){
                                        jQuery('div.userInfoPreviewPopup').prepend('<img class="popup-user-picture" width="100" height="72" src="'+data.picture+'" title="picture"/>');
                                        }
                                }
                });
        //ajax call end here
           
            jQuery('.userInfoPreview').css('display','block');
        });
               
 
jQuery('a.username').live('mouseout',function()
                {
                        if(hideTimer)
                                clearTimeout(hideTimer);
                       
                        hideTimer=setTimeout(function(){
                                jQuery('.userInfoPreview').css('display','none');
                        },hideDelay);
               
               
                });
 
//end of live
//
 
jQuery('.userInfoPreview').mouseover(function(){
if(hideTimer)
        clearTimeout(hideTimer);
});
 
 
jQuery('userInfoPreview').mouseout(function(){
 
if(hideTimer)
        clearTimeout(hideTimer);
 
hideTimer = setTimeout(function(){
jQuery('.userInfoPreview').css('display','none');
 
},hideDelay);
 
});    
               
});
