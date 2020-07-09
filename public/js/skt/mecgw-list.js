function executeSetInterval(func, delay){
  func();
  setInterval(func,delay);
}

function ajaxShowSystemDetail(url){
	  $.ajax({
	    url: url,
	    type: "GET"
	  })
	  .done(function(data){
	    var json = JSON.parse(data);
	    //fallback(0)
	    var system_name = json.result[0].system_name;
	    var system_type = json.result[0].system_type;
	    var location = json.result[0].location;
	    var curSess = json.result[0].curSess;
	    var totSess = json.result[0].totSess;
	    var curBps = json.result[0].curBps;
	    var totBps = json.result[0].totBps;
	    
	    //fallback(1) Zone별 요약 정보
	    var curGJCnt = json.result[1].curGJCnt;
		var totGJCnt = json.result[1].totGJCnt;
		var curGJSess = Math.round(json.result[1].curGJSess);
		var totGJSess = Math.round(json.result[1].totGJSess);
		var curGJBps = Math.round(json.result[1].curGJBps);
		var totGJBps = Math.round(json.result[1].totGJBps);
		
		var curBSCnt = json.result[3].curBSCnt;
		var totBSCnt = json.result[3].totBSCnt;
		var curBSSess = Math.round(json.result[3].curBSSess);
		var totBSSess = Math.round(json.result[3].totBSSess);
		var curBSBps = Math.round(json.result[3].curBSBps);
		var totBSBps = Math.round(json.result[3].totBSBps);
		
		console.log(json.result[3].curBSSess);
		
		//fallback(2) 알람 표시
		var rm_sys_name = json.result[2].system_name;
		
	    $(".mecgwList-container").find(".sys-detail-value").remove();   
	    $(".mecgwList-container").find(".col-sm-6").remove();
	    $(".mecgw-detail-box").removeClass("alarm-twinkle");
	    
	    //fallback(0) 지역별 시스템 출력
	    system_type.forEach(function(e,index){
			if(location[index] == 'gwangju'){
				  var format_html= "<div class=\"col-sm-6 \">"+
					"<div class=\"mecgw-detail-box align-middle\">"+
				    "<div id=\"system-name-GJ\" class=\"sys-detail-name\"></div>"+
				    "<span id=\"curSysSessContainerGJ\"></span>" +
				    "<span class=\"sys-detail-delimiter\">&nbsp/&nbsp</span>" + 
				    "<span id=\"totSysSessContainerGJ\"></span>"+
				    "<span id=\"curSysBpsContainerGJ\"></span>" +
				    "<span class=\"sys-detail-delimiter\">&nbsp/&nbsp</span>" + 
				    "<span id=\"totSysBpsContainerGJ\"></span></div>";
				    
				  $("#GJzone").append(format_html);
					
			      $("#system-name-GJ").attr('id', "system-name-GJ"+system_name[index]);
			      $("#curSysSessContainerGJ").attr('id', "curSysSessContainerGJ"+system_name[index]);
			      $("#totSysSessContainerGJ").attr('id', "totSysSessContainerGJ"+system_name[index]);
			      $("#curSysBpsContainerGJ").attr('id', "curSysBpsContainerGJ"+system_name[index]);
			      $("#totSysBpsContainerGJ").attr('id', "totSysBpsContainerGJ"+system_name[index]);
			      
			      $("#system-name-GJ"+system_name[index]).parents(".mecgw-detail-box").attr("onclick", "location.href=\"/mecgw-list/" + system_name[index]+"\"" );
			   
			      var system_nameAddHtml = "<span class='sys-detail-value'>"+system_name[index]+"</span>"; 
			      var curSessAddHtml = "<span class='sys-detail-value'>"+curSess[index]+"</span>";
			      var totSessAddHtml = "<span class='sys-detail-value'>"+totSess[index]+"만</span>";
			      var curBpsAddHtml = "<span class='sys-detail-value'>"+curBps[index]+"</span>";
			      var totBpsAddHtml = "<span class='sys-detail-value'>"+totBps[index]+"TPS</span>";
			      
			      $("#system-name-GJ"+system_name[index]).append(system_nameAddHtml);
			      $("#curSysSessContainerGJ"+system_name[index]).append(curSessAddHtml);
			      $("#totSysSessContainerGJ"+system_name[index]).append(totSessAddHtml);
			      $("#curSysBpsContainerGJ"+system_name[index]).append(curBpsAddHtml);
			      $("#totSysBpsContainerGJ"+system_name[index]).append(totBpsAddHtml);
			}
			else if(location[index] == 'busan'){
				  var format_html= "<div class=\"col-sm-6 sys-detail-container\">"+
					"<div class=\"mecgw-detail-box align-middle\">"+
				    "<div id=\"system-name-BS\" class=\"sys-detail-name\"></div>"+
				    "<span id=\"curSysSessContainerBS\"></span>" +
				    "<span class=\"sys-detail-delimiter\">&nbsp/&nbsp</span>" + 
				    "<span id=\"totSysSessContainerBS\"></span>"+
				    "<span id=\"curSysBpsContainerBS\"></span>" +
				    "<span class=\"sys-detail-delimiter\">&nbsp/&nbsp</span>" + 
				    "<span id=\"totSysBpsContainerBS\"></span></div>";
			
				  $("#BSzone").append(format_html);
				
			      $("#system-name-BS").attr('id', "system-name-BS"+system_name[index]);
			      $("#curSysSessContainerBS").attr('id', "curSysSessContainerBS"+system_name[index]);
			      $("#totSysSessContainerBS").attr('id', "totSysSessContainerBS"+system_name[index]);
			      $("#curSysBpsContainerBS").attr('id', "curSysBpsContainerBS"+system_name[index]);
			      $("#totSysBpsContainerBS").attr('id', "totSysBpsContainerBS"+system_name[index]);
			      
			      $("#system-name-BS"+system_name[index]).parents(".mecgw-detail-box").attr("onclick", "location.href=\"/mecgw-list/" + system_name[index]+"\"" );
			   
			      var system_nameAddHtml = "<span class='sys-detail-value'>"+system_name[index]+"</span>"; 
			      var curSessAddHtml = "<span class='sys-detail-value'>"+curSess[index]+"</span>";
			      var totSessAddHtml = "<span class='sys-detail-value'>"+totSess[index]+"만</span>";
			      var curBpsAddHtml = "<span class='sys-detail-value'>"+curBps[index]+"</span>";
			      var totBpsAddHtml = "<span class='sys-detail-value'>"+totBps[index]+"TPS</span>";
			      
			      $("#system-name-BS"+system_name[index]).append(system_nameAddHtml);
			      $("#curSysSessContainerBS"+system_name[index]).append(curSessAddHtml);
			      $("#totSysSessContainerBS"+system_name[index]).append(totSessAddHtml);
			      $("#curSysBpsContainerBS"+system_name[index]).append(curBpsAddHtml);
			      $("#totSysBpsContainerBS"+system_name[index]).append(totBpsAddHtml);
			}
	    });
	    
	    //fallback(1) Zone 별 종합 정보 
	    var curGJcntAddHtml = "<span class='sys-detail-value'>"+curGJCnt+"</span>"; 
	    var totGJcntAddHtml = "<span class='sys-detail-value'>"+totGJCnt+"</span>";
	    var curGJSessAddHtml = "<span class='sys-detail-value'>"+curGJSess+"</span>";
	    var totGJSessAddHtml = "<span class='sys-detail-value'>"+totGJSess+"</span>";
	    var curGJBpsAddHtml = "<span class='sys-detail-value'>"+curGJBps+"</span>";
	    var totGJBpsAddHtml = "<span class='sys-detail-value'>"+totGJBps+"</span>";
	    $("#curGJcnt").append(curGJcntAddHtml);
	    $("#totGJcnt").append(totGJcntAddHtml);
	    $("#curGJSess").append(curGJSessAddHtml);
	    $("#totGJSess").append(totGJSessAddHtml);
	    $("#curGJBps").append(curGJBpsAddHtml);
	    $("#totGJBps").append(totGJBpsAddHtml);
	    
	    console.log(json.result[1]);
	    console.log(json.result[3]);
	    
	    var curBScntAddHtml = "<span class='sys-detail-value'>"+curBSCnt+"</span>"; 
	    var totBScntAddHtml = "<span class='sys-detail-value'>"+totBSCnt+"</span>";
	    var curBSSessAddHtml = "<span class='sys-detail-value'>"+curBSSess+"</span>";
	    var totBSSessAddHtml = "<span class='sys-detail-value'>"+totBSSess+"</span>";
	    var curBSBpsAddHtml = "<span class='sys-detail-value'>"+curBSBps+"</span>";
	    var totBSBpsAddHtml = "<span class='sys-detail-value'>"+totBSBps+"</span>";
	    $("#curBScnt").append(curBScntAddHtml);
	    $("#totBScnt").append(totBScntAddHtml);
	    $("#curBSSess").append(curBSSessAddHtml);
	    $("#totBSSess").append(totBSSessAddHtml);
	    $("#curBSBps").append(curBSBpsAddHtml);
	    $("#totBSBps").append(totBSBpsAddHtml);
	    
	    //fallback(2) -- 알람 표시
	    for(var index in rm_sys_name){
	        var statusClass = "";
	        var statusText = "";
	        
	        if(rm_sys_name[index] != null){ 
	      	  $("#system-name-GJ"+rm_sys_name[index]).parents(".mecgw-detail-box").addClass("alarm-twinkle");
	      	  $("#system-name-BS"+rm_sys_name[index]).parents(".mecgw-detail-box").addClass("alarm-twinkle");
	        }
	        //$("#skt-map-center-"+site).find(".skt-map-status-btn").text(statusText);
	      }
	  })
}
	  

(function($){
	  "use strict";
	  
	  const _PERIOD_ = 1000*60;
	  
	  executeSetInterval(function(){
		  ajaxShowSystemDetail("/api/v1/mecgw-list");
	    }, _PERIOD_);
})(jQuery);