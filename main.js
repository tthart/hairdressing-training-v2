var allVideos = 'http://gdata.youtube.com/feeds/api/playlists/PLBBDD0C995715AAE8?v=2&alt=json&max-results=50';
var allVideos2 = '';
var temp = '';
var consultation = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY3wv6GA7Ddcq03DFvwtvucS?v=2&alt=json';
var perming = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY0dsOQtE1DQV1MBb2Vkwqmf?v=2&alt=json';
var colouring = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY0uV9Ee256XFMo72lBXy7iS?v=2&alt=json';
var cutting = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY28HkW_7k05Rkon6c89E3DW?v=2&alt=json';
var shampooAndCondition = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY11M4FnmRgi8y_lmtcF_Zxj?v=2&alt=json';
var salonManagement = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY0hczOZaAD-Y8FtP2AinaqG?v=2&alt=json';
var stylingAndHairUp = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY1Enu-l1bm2EDDZseMCSx_M?v=2&alt=json';
var hairnvq1 = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY0qV91jAlUgi0S6jAI4Plxn?v=2&alt=json';
var hairnvq2 = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY1oKZ9-HBEFtqTUa1RtK9Wj?v=2&alt=json';
var hairnvq3 = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY3We3ryLqVYhNIdNVxh6ozg?v=2&alt=json';
var barberingnvq2 = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY1zgFmyzAq8agfkb6cmJNZ1?v=2&alt=json';
var barberingnvq3 = 'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY3n8duDLGLtPPlzr2LkAuxE?v=2&alt=json';

var relatedvideos = '';
var videoList = "#cont";
var relatedvideoList = "#relatedvideos";
function openBrowser(address)
{
var ref = window.open(address, '_blank', 'toolbar=yes');
ref.show();
}
function changeCSS()
{
  //Swaps out CSS 
  var a = document.getElementById("mobilestyle");
  a.x = 'alt-main' == a.x ? 'main' : 'alt-main';
  a.href = a.x + '.css';
}

function openURL(urlString){
    myURL = encodeURI(urlString);
    window.open(myURL, '_system');
}


function openFacebook(video)
{
  var shortened = 'http://y2u.be/' + video;
  window.open('' + encodeURI(shortened), '_blank', 'location=yes');
}

function videoAdded()
{
  var popup = $(document.body).popup(
  {
    title: "",
    message: "Video has been added to playlist"
  });
  setTimeout(function()
  {
    popup.hide();
  }, 1500);
}

$(document).ready(function() {
	$("#categories").change(function()
  {
    var e = document.getElementById("categories");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser == "cutting")
      youtubegdata(cutting, 62, videoList);
    if (strUser == "perming")
      youtubegdata(perming, 62, videoList);
    if (strUser == "colouring")
      youtubegdata(colouring, 62, videoList);
    if (strUser == "consultation")
      youtubegdata(consultation, 45, videoList);
    if (strUser == "shampooAndCondition")
      youtubegdata(shampooAndCondition, 45, videoList);
    if (strUser == "salonManagement")
      youtubegdata(salonManagement, 45, videoList);
    if (strUser == "stylingAndHairUp")
      youtubegdata(stylingAndHairUp, 45, videoList);
    if (strUser == "all")
  {  
  getAllVideos();
  }
    if (strUser == "hairnvq1")
      youtubegdata(hairnvq1, 62, videoList);
    if (strUser == "hairnvq2")
      youtubegdata(hairnvq2, 62, videoList);
    if (strUser == "hairnvq3")
      youtubegdata(hairnvq3, 62, videoList);
    if (strUser == "barberingnvq2")
      youtubegdata(barberingnvq2, 62, videoList);
    if (strUser == "barberingnvq3")
      youtubegdata(barberingnvq3, 62, videoList);

  });
});



$('body').click('#todoitems a', function()
{
  getVideo();
});

function getRelatedVideos(e)
{

  var limit = 5;
  var videos = e;
  var videoURL = 'http://www.youtube.com/watch?v=';
  $.getJSON(videos, function(data)
  {
	var feedtitle = 'Related Videos';
	
    var list_data = "";
	list_data += '<h3 class="related">' + feedtitle + '</h3>';
    $.each(data.feed.entry, function(i, item)
    {
      var elem = $('span');
      var feedTitle = item.title.$t;
      var feedURL = item.link[1].href;
      var fragments = feedURL.split("/");
      var videoID = fragments[fragments.length - 2];
      var url = videoURL + videoID;
      var thumb = "http://img.youtube.com/vi/" + videoID + "/mqdefault.jpg";
      if (videoID != 'videos')
      {
        list_data += '<a  class="videolink" href="#" onClick="getVideo(this,\'' + e + '\');$.ui.scrollToTop(\'#video\');" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
      }
	  
	  
    });
	
	$.ui.updatePanel("#relatedvideos",list_data);

  });
}

function getPlaylist()
{

  var limit = 5;
  var videos = e;

  $("#relatedvideos").empty();
  $.getJSON(videos, function(data)
  {
    var list_data = "";
    $.each(data.feed.entry, function(i, item)
    {

      var elem = $('span');
      var feedTitle = item.title.$t;
      <!-- if(item.title.$t.length > 30)-->
      <!--					var feedTitle = item.title.$t.substr(0, limit) + "<br />" + "Testtesttest";-->

      var feedURL = item.link[1].href;
      var fragments = feedURL.split("/");
      var videoID = fragments[fragments.length - 2];

      var videoURL = 'http://www.youtube.com/watch?v=';
      var url = videoURL + videoID;
      var thumb = "http://img.youtube.com/vi/" + videoID + "/mqdefault.jpg";
      if (videoID != 'videos')
      {
        list_data += '<a class="videolink" href="#" onClick="getVideo(this,\'' + e + '\');$.ui.scrollToTop(\'#video\');" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
      }
    });
	
    $(list_data).replace("#relatedvideos");

  });
}

function youtubegdata(e, limit, variable)
{
	
  var videoURL = 'http://www.youtube.com/watch?v=';


  $.getJSON(e, function(data)
  {
    var list_data = "";
    $.each(data.feed.entry, function(i, item)
    {

      var elem = $('span');
      var feedTitle = item.title.$t;
      <!-- if(item.title.$t.length > 30)-->
      <!--					var feedTitle = item.title.$t.substr(0, limit) + "<br />" + "Testtesttest";-->

      var feedURL = item.link[1].href;
      var fragments = feedURL.split("/");
      var videoID = fragments[fragments.length - 2];
      var url = videoURL + videoID;
      var thumb = "http://img.youtube.com/vi/" + videoID + "/mqdefault.jpg";

      if (videoID != 'videos')
      {
        list_data += '<a class="videolink" href="#" onClick="getVideo(this,\'' + e + '\');" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;padding-left:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
      }
    });


$.ui.updatePanel('#cont', list_data);	



  });

}

function secondsTimeSpanToHMS(s)
  {
    var h = Math.floor(s / 3600); //Get whole hours
    s -= h * 3600;
    var m = Math.floor(s / 60); //Get remaining minutes
    s -= m * 60;
    return (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
  }
  //$(window).on('hashchange', function(e){

function getVideo(e, playlist)
{
  var hash = e.id;
  var feed = 'http://gdata.youtube.com/feeds/api/videos/' + hash + '?v=2';
  var dataframe = '<iframe width="100%" height="180" src="http://www.youtube.com/embed/' + hash + '?controls=1&showinfo=0&color2=0xffffff&rel=0" frameborder="0" allowfullscreen></iframe>';
  $.getJSON('http://gdata.youtube.com/feeds/api/videos/' + hash + '?v=2&alt=jsonc', function(data, status, xhr)
  {
    var length = secondsTimeSpanToHMS(data.data.duration);
	var description = data.data.description;
	var result = description.search("Lv1");
	
	var string = '';
if(result > -1) string += '<div class="nvq">NVQ Level 1</div>';
	result = description.search("Lv2");
	if(result > -1) string += '<div class="nvq">NVQ Level 2</div>';
	result = description.search("/2");	
	if(result > -1) string += '<div class="nvq">NVQ Level 2</div>';
	result = description.search("Lv3");
	if(result > -1) string += '<div class="nvq">NVQ Level 3</div>';
	result = description.search("/3");
		if(result > -1) string += '<div class="nvq">NVQ Level 3</div>';
		 var shortened = "http://y2u.be/" + hash;
			$.ui.updatePanel("#videoContainer",dataframe + '<div id="videoinformation">' +
      '<h2 id="' + e.id + '" class="currentvideo">' + data.data.title + '</h2>'+
      '<div class="label"><i class="fa fa-clock-o gr"></i> ' + length  + '</div>' + string  +
      '<p class="clear">' + data.data.description + '</p>'+
      '<button class="interact" id="' + e.id + '" title="' + data.data.title + '" rel="#addtoplaylist"' +
      'onclick="addVideoToPlaylist(\'' + hash + '\',\'' + data.data.title + '\');"><span class="fa fa-plus"> <span>playlist</span></button>' +
      '<button class="interact" onclick="window.plugins.socialsharing.share(\'' + shortened + '\',\'' + data.data.title + '\');"><span class="fa fa-share-alt"></span> share</button>');
	  
	//  onclick="window.plugins.socialsharing.share('Message and link', null, null, 'http://www.x-services.nl')
    //dataframe += "<p>Duration: " + length + "</p>";
  });
  
  $.ui.updatePanel('#videoContainer', dataframe);
  //$('#videoContainer').html(dataframe);
var playlistURL = 'http://gdata.youtube.com/feeds/api/videos/' + hash + '/related?author=MimasLandT&alt=json';
  //relatedvideofeed = allVideos;
  getRelatedVideos(playlistURL);

  $.ui.loadContent("#video", false, false, "fade");


}


//+Menu
var meny = Meny.create(
{
  menuElement: document.querySelector('#meny'),
  contentsElement: document.querySelector('#content'),
  position: 'right',
  height: 200,
  width: 250,
  angle: 0,
  // The mouse distance from menu position which can trigger menu to open.
  threshold: 0,
  // Width(in px) of the thin line you see on screen when menu is in closed position.
  overlap:0,
  // The total time taken by menu animation.
  transitionDuration: '0.7s',
  // Transition style for menu animations
  transitionEasing: 'ease',
  // Gradient overlay for the contents
  gradient: false,
  // Use mouse movement to automatically open/close
  mouse: true,
  // Use touch swipe events to open/close
  touch: false
});

/***************************************/

function addVideoToPlaylist(video, title)
{
  $(document.body).popup(
  {
    title: "Add video",
    message: '<p>Add this video to your playlist:</p><p class="title">' + title + '</p>',
    cancelText: "Cancel",
    doneText: "OK",
    doneCallback: function()
    {
      console.log("Done for!");
      dbInsert(video, title);
    },
    cancelCallback: function()
    {
      console.log("cancelled");
    },
    cancelOnly: false
  });
}
//Initialise database
function populateDB(tx)
{
  tx.executeSql('CREATE TABLE IF NOT EXISTS PLAYLIST (id unique, data)');
}

//Add a video to the database
function addVideoDB(tx, id, title)
{
  tx.executeSql('INSERT INTO PLAYLIST (id, data) VALUES ("' + id + '","' + title + '")');
}

// Query the database
function queryDB(tx)
{
  tx.executeSql('SELECT * FROM PLAYLIST', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results)
{
  var len = results.rows.length;
  console.log("PLAYLIST table: " + len + " rows found.");
  var list_data = '';
  var videoURL = 'http://www.youtube.com/watch?v=';
  $('#playlistvideos').empty();
  for (var i = 0; i < len; i++)
  {
    var videoID = results.rows.item(i).id;
    var url = videoURL + results.rows.item(i).id;
    var thumb = "http://img.youtube.com/vi/" + results.rows.item(i).id + "/mqdefault.jpg";
    var feedTitle = results.rows.item(i).data;

list_data+=	'<a class="videolink" href="#" onClick="getVideo(this,\'http://gdata.youtube.com/feeds/api/playlists/PLKCjJUw4TaY1oKZ9-HBEFtqTUa1RtK9Wj?v=2&alt=json\');" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;padding-left:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span></a><i id="' + videoID + '" class="fa fa-times removebutton removeFromPlaylist"  onClick="dbDelete(this.id);"></i><hr /></div>';
  

    console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
  }
  list_data += '';
  $.ui.updatePanel("#playlistvideos",list_data);

}

// Transaction error callback
//
function errorCB(err)
{
  console.log("Error processing SQL: " + err.code);
}

// Transaction success callback
//
function successCB()
{
  var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
  db.transaction(queryDB, errorCB);
}

function dbInsert(id,data) {
	var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
    val1 = id;
    val2 = data;
    var sqlTxt = "INSERT INTO PLAYLIST (id,data) VALUES (?, ?)";
    db.transaction(function(tx) {tx.executeSql(sqlTxt,[id,data])}, errorCB, successCB);
    }
	
	function dbDelete(id) {
	var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
    val1 = id;

    var sqlTxt = "DELETE FROM PLAYLIST WHERE id = '"+id+"'";
    db.transaction(function(tx) {tx.executeSql(sqlTxt)}, errorCB, successCB);
    }
	/*
	function checkIfExists(id) {
	var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
	var val1 = id;
	var sqlTxt = "SELECT *FROM PLAYLIST WHERE ID = " + '"' + val1 + '"';
	alert(sqlTxt);
	 var test = db.transaction(function(tx) {tx.executeSql(sqlTxt)}, errorCB, classCB);
	 alert(test);
	}
	
	function classCB() {
		 return "test";	
	}
*/
function clearPlaylist() {
	var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
	var sqlTxt = "DROP TABLE IF EXISTS PLAYLIST";
	var sqlCreate = "CREATE TABLE IF NOT EXISTS PLAYLIST (id unique, data)"
    db.transaction(function(tx) {tx.executeSql(sqlTxt);tx.executeSql(sqlCreate);}, errorCB, successCB);
	
    }

function onDeviceReady()
{
  var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
  db.transaction(populateDB, errorCB, successCB);
}

function getAllVideos() {

  $.getJSON('http://gdata.youtube.com/feeds/api/playlists/PLBBDD0C995715AAE8?v=2&alt=json&max-results=50', function(data)
  {
  
    $.each(data.feed.entry, function(i, item)
    {

      var elem = $('span');
      var feedTitle = item.title.$t;
      <!-- if(item.title.$t.length > 30)-->
      <!--					var feedTitle = item.title.$t.substr(0, limit) + "<br />" + "Testtesttest";-->

      var feedURL = item.link[1].href;
      var fragments = feedURL.split("/");
      var videoID = fragments[fragments.length - 2];
      var url = videoURL + videoID;
      var thumb = "http://img.youtube.com/vi/" + videoID + "/mqdefault.jpg";

      if (videoID != 'videos')
      {
     elements = elements + '<a class="videolink" href="#" onClick="getVideo(this,\'http://gdata.youtube.com/feeds/api/playlists/PLBBDD0C995715AAE8?v=2&alt=json&max-results=50\');" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;padding-left:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
      }
    });
  });
 


  window.setTimeout(function () {
$.getJSON('http://gdata.youtube.com/feeds/api/playlists/PLBBDD0C995715AAE8?v=2&alt=json&start-index=51&max-results=50', function(data)
  {
 
    $.each(data.feed.entry, function(i, item)
    {

      var elem = $('span');
      var feedTitle = item.title.$t;
      <!-- if(item.title.$t.length > 30)-->
      <!--					var feedTitle = item.title.$t.substr(0, limit) + "<br />" + "Testtesttest";-->

      var feedURL = item.link[1].href;
      var fragments = feedURL.split("/");
      var videoID = fragments[fragments.length - 2];
      var url = videoURL + videoID;
      var thumb = "http://img.youtube.com/vi/" + videoID + "/mqdefault.jpg";

      if (videoID != 'videos')
      {
      elements = elements + '<a class="videolink" href="#" onClick="getVideo(this,\'http://gdata.youtube.com/feeds/api/playlists/PLBBDD0C995715AAE8?v=2&alt=json&max-results=50\');" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;padding-left:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
      }
    });
	
  });

         
        }, 2100);

             window.setTimeout(function () {
           
			  $.ui.updatePanel('#cont',elements);
			  window.setTimeout(function() {
				   $.ui.launch();
			  },2000);
        }, 2000);


};