jQuery(document).ready(function($) {
    
    var eventsList = getItemsFromJqueryArrayTimelineArray($('.timelineclass'));
    
    function genericRetrieval(index, className, element){
     
     return $($(className)[index]).data(element);
     
	}
 
	 function getItemsFromJqueryArrayTimelineArray(jqArray) {
		 
		var items = [];
		
		var timelineClass = '.timelineclass';
		
		jqArray.each(function(index) {
			items.push({
				media: {url : genericRetrieval(index, timelineClass, 'url'), caption:genericRetrieval(index, timelineClass, 'caption'), credit:genericRetrieval(index, timelineClass, 'capiton')},
				start_date: {year:genericRetrieval(index, timelineClass, 'year'), month:genericRetrieval(index, timelineClass, 'month'), day:genericRetrieval(index, timelineClass, 'day')},
				text: {headline:genericRetrieval(index, timelineClass, 'headline'), text:genericRetrieval(index, timelineClass, 'text')}
		 });
	 });
	 
	 return items;
	}
    
    var finalTimelineJson = {events:eventsList};
    
    window.timeline = new TL.Timeline('timeline-embed', finalTimelineJson);
});
