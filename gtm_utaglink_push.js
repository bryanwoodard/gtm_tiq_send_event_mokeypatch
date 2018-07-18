var pushit = window.DDC.pushToGtmDataLayer;

function checkEvent(e){
	var evts = ["ddc.form.initiation", "ddc.form.typedSearch", "ddc.form.submission", "ddc.slideshow.click", "ddc.link.clickToCall","ddc.link.offerClick", "ddc.link.socialHeader", "ddc.link.share", "ddc.link.hproduct", "ddc.link.mycarsSave", "ddc.dialog.ajaxContentLoaded", "ddc.link.comparePageClick"];

	if(evts.indexOf(e.event) > -1){
		utag.link(e);
	}
}

window.DDC.pushToGtmDataLayer = function(e){
	pushit(e);
	checkEvent(e);
}