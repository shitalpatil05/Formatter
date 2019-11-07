sap.ui.define([],
function(){
	return{
		fnOnFormatDate : function(DOJ){
			// console.log(DOJ.substring(0,2) + "-" + DOJ.substring(2,4) + "-" + DOJ.substring(4));
			
		var formattedDate=DOJ.substring(0,2) + "-" + DOJ.substring(2,4) + "-" + DOJ.substring(4);
		return formattedDate;
	},
	
	fnReturnStatus : function(status){
		if(status === "A"){
			return "Available";
		}
		else {
			return "Not Available";
		}
	
	}
	
};
});