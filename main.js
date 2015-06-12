var client_id = "910037072630-6vk3hj26ua134ab5uhtfj534prqt9vjs.apps.googleusercontent.com"
var client_secret = "EDaoBhI1XoGaKwzrkNb_iX8L";
var key = "AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc";
var allVideos = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLBBDD0C995715AAE8&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc&max-results=50';
var allVideos2 = '';
var temp = '';
var consultation = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY3wv6GA7Ddcq03DFvwtvucS&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var perming = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY0dsOQtE1DQV1MBb2Vkwqmf&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var colouring = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY0uV9Ee256XFMo72lBXy7iS&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var cutting = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY28HkW_7k05Rkon6c89E3DW&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var shampooAndCondition = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY11M4FnmRgi8y_lmtcF_Zxj&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var salonManagement = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY0hczOZaAD-Y8FtP2AinaqG&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var stylingAndHairUp = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY1Enu-l1bm2EDDZseMCSx_M&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var hairnvq1 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY0qV91jAlUgi0S6jAI4Plxn&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var hairnvq2 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY1oKZ9-HBEFtqTUa1RtK9Wj&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var hairnvq3 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY3We3ryLqVYhNIdNVxh6ozg&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var barberingnvq2 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY1zgFmyzAq8agfkb6cmJNZ1&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
var barberingnvq3 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKCjJUw4TaY3n8duDLGLtPPlzr2LkAuxE&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';

var relatedvideos = '';
var videoList = "#cont";
var relatedvideoList = "#relatedvideos";
var connectionStatus = false;

document.addEventListener("offline", function(){ alert("Offline") }, false);
document.addEventListener("online", function(){ alert("You're online") }, false);

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
	clearPlaylist();
	$("#categories").change(function()
  {
    var e = document.getElementById("categories");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser == "cutting")
      getSelectedDropdownVideos(cutting, 62, videoList);
    if (strUser == "perming")
      getSelectedDropdownVideos(perming, 62, videoList);
    if (strUser == "colouring")
      getSelectedDropdownVideos(colouring, 62, videoList);
    if (strUser == "consultation")
      getSelectedDropdownVideos(consultation, 45, videoList);
    if (strUser == "shampooAndCondition")
      getSelectedDropdownVideos(shampooAndCondition, 45, videoList);
    if (strUser == "salonManagement")
      getSelectedDropdownVideos(salonManagement, 45, videoList);
    if (strUser == "stylingAndHairUp")
      getSelectedDropdownVideos(stylingAndHairUp, 45, videoList);
    if (strUser == "all")
  {  
  getAllVideos();
  }
    if (strUser == "hairnvq1")
      getSelectedDropdownVideos(hairnvq1, 62, videoList);
    if (strUser == "hairnvq2")
      getSelectedDropdownVideos(hairnvq2, 62, videoList);
    if (strUser == "hairnvq3")
      getSelectedDropdownVideos(hairnvq3, 62, videoList);
    if (strUser == "barberingnvq2")
      getSelectedDropdownVideos(barberingnvq2, 62, videoList);
    if (strUser == "barberingnvq3")
      getSelectedDropdownVideos(barberingnvq3, 62, videoList);

  });
});



$('body').click('#todoitems a', function()
{
  getVideo();
});

function getRelatedVideos(e)
{
	console.log("Getting related videos action for: " + e);
  var limit = 5;
  var videos = e;
  var videoURL = 'http://www.youtube.com/watch?v=';
  
  $.getJSON(videos, function(data)
  {
	var feedtitle = 'Related Videos';
    var list_data = "";
	list_data += '<h3 class="related">' + feedtitle + '</h3>';
	$.each(data.items, function(i, item)
    {
      var elem = $('span');
      var feedTitle = item.snippet.title;
      var videoID = item.snippet.resourceId.videoId;
	  var description = item.snippet.description;
      var url = videoURL + videoID;
      var thumb = item.snippet.thumbnails.medium.url;
        list_data += '<a  class="videolink" href="#" data-description="'+description+'" onClick="getVideo(this);$.ui.scrollToTop(\'#video\');" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
	  
    });
	
	$.ui.updatePanel("#relatedvideos",list_data);

  });
}



function getSelectedDropdownVideos(e, limit, variable)
/**Function to update panel with list of videos frop dropdown list **/
{
	
  var videoURL = 'http://www.youtube.com/watch?v=';


  $.getJSON(e, function(data)
  {
    var list_data = "";
    $.each(data.items, function(i, item)
    {

      var elem = $('span');
      var feedTitle = item.snippet.title;
	
      var feedURL = "";
      var videoID = item.snippet.resourceId.videoId;
	  
      var thumb = item.snippet.thumbnails.medium.url;
var description = item.snippet.description;
      if (videoID != 'videos')
      {
		  console.log(e);
        list_data += '<a class="videolink" href="#" onClick="getVideo(this);" data-playlist="'+e+'" data-description="'+ description +'" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;padding-left:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
      }
    });


$.ui.updatePanel('#cont', list_data);	



  });

}



function getVideo(e)
{
			  window.setTimeout(function() {
				   $.ui.launch();
			  },1500);
			  
		var duration = "";	  
		var description = e.getAttribute('data-description');
		
		var playlist = e.getAttribute('data-playlist');
		var string = '';
		var title = e.title;
		if(description){var result = description.search("Lv1");}
		 var shortened = "http://y2u.be/" + hash;

  var hash = e.id;
//  var feed = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=' + playlist + '&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc';
  var dataframe = '<iframe width="100%" height="180" src="http://www.youtube.com/embed/' + hash + '?controls=1&showinfo=0&color2=0xffffff&rel=0" frameborder="0" allowfullscreen></iframe>';
  $.ui.updatePanel("#videoContainer",dataframe + '<div id="videoinformation"><h2 id="' + e.id + '" class="currentvideo">' + title + '</h2>'+
       string +
      '<p class="clear">' + description + '</p>'+
      '<button class="interact" id="' + e.id + '" title="' + title + '" rel="#addtoplaylist"' +
      'onclick="addVideoToPlaylist(\'' + hash + '\',\'' + title + '\',\'' + description + '\',\'' + playlist + '\');"><span class="fa fa-plus"> <span>playlist</span></button>' +
      '<button class="interact" onclick="window.plugins.socialsharing.share(\'' + shortened + '\',\'' + title + '\');"><span class="fa fa-share-alt"></span> share</button></div>'


);
console.log("Getting related videos for: ");
console.log(playlist);
  //relatedvideofeed = allVideos;
  getRelatedVideos(playlist);
  $.ui.loadContent("#video", false, false, "fade");


}






function getAllVideos() {

$.getJSON('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLBBDD0C995715AAE8&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc&max-results=50', function(data)
  {
  
    $.each(data.items, function(i, item)
    {

      var elem = $('span');
      var feedTitle = item.snippet.title;
	  var description = item.snippet.description;
      var feedURL = "";//item.link[1].href;
      var fragments = "";//feedURL.split("/");
      var videoID = item.snippet.resourceId.videoId;
      var url = "";//videoURL + videoID;
      var thumb = item.snippet.thumbnails.medium.url;

      if (videoID != 'videos')
      {
     elements = elements + '<a class="videolink" href="#" onClick="getVideo(this);" data-description="'+description+'" data-playlist="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLBBDD0C995715AAE8&key=AIzaSyBtgBALWpVjsyXk_GgdKnmj1AxZRvG_1Fc&max-results=50" id="' + videoID + '" title="' + feedTitle + '"><div class="video"><img style="padding-top:5px;padding-bottom:5px;padding-left:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span><i class="fa fa-chevron-right"></i><hr /></div></a>';
      }
	 $.ui.updatePanel('#cont',elements);	
			 
				   $.ui.launch();
			 
    }
	
	)
	
	
  });
	
}

//***************Database****************//

function errorCB(err)
{
  console.log("Error processing SQL: " + err.code);
}
function successCB()
{
  var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
  db.transaction(queryDB, errorCB);
}

function dbInsert(video, title, description, playlist) {
	var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
    val1 = video;
    val2 = title;
	val3 = description;
	val4 = playlist;
    var sqlTxt = "INSERT INTO PLAYLIST (video, title, description, playlist) VALUES (?, ?, ?, ?)";
	console.log(val1, val2, val3, val4);
	console.log(video, title, description, playlist);
    db.transaction(function(tx) {tx.executeSql(sqlTxt,[video, title, description, playlist])}, errorCB, successCB);
    }
	
	function dbDelete(id) {
	var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
    val1 = id;

    var sqlTxt = "DELETE FROM PLAYLIST WHERE video = '"+id+"'";
    db.transaction(function(tx) {tx.executeSql(sqlTxt)}, errorCB, successCB);
    }
	
function clearPlaylist() {
	var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
	var sqlTxt = "DROP TABLE IF EXISTS PLAYLIST";
	var sqlCreate = "CREATE TABLE IF NOT EXISTS PLAYLIST (video unique, title, description, playlist)"
    db.transaction(function(tx) {tx.executeSql(sqlTxt);tx.executeSql(sqlCreate);}, errorCB, successCB);
	
    }

function onDeviceReady()
{
  var db = window.openDatabase("Database", "1.0", "Playlist", 200000);
  db.transaction(populateDB, errorCB, successCB);
}
//Initialise database
function populateDB(tx)
{
  tx.executeSql('CREATE TABLE IF NOT EXISTS PLAYLIST (video unique, title, description, playlist)');
}

//Add a video to the database
function addVideoDB(tx, video, title, description, playlist)
{
  tx.executeSql('INSERT INTO PLAYLIST (video, title, description, playlist) VALUES ("' + video + '","' + title + '","'+description+'","'+playlist+'")');
}

// Query the database
function queryDB(tx)
{
  tx.executeSql('SELECT * FROM PLAYLIST', [], querySuccess, errorCB);
}
//**Add video to the local device playlist**//
function addVideoToPlaylist(video, title, description, playlist)
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
      dbInsert(video, title, description, playlist);
    },
    cancelCallback: function()
    {
      console.log("cancelled");
    },
    cancelOnly: false
  });
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
	  console.log(results.rows.item(i));
    var video = results.rows.item(i).video;
    var url = videoURL + results.rows.item(i).video;
    var thumb = "http://img.youtube.com/vi/" + results.rows.item(i).video + "/mqdefault.jpg";
    var feedTitle = results.rows.item(i).title;
	var description = results.rows.item(i).description;
	var playlist = results.rows.item(i).playlist;

list_data+=	'<a class="videolink" href="#" onClick="getVideo(this);");" id="' + video + '" title="' + feedTitle + '" data-description="'+description+'" data-playlist="'+playlist+'"><div class="video"><img style="padding-top:5px;padding-bottom:5px;padding-left:5px;" alt="' + feedTitle + '" src="' + thumb + '" width="110"  /><span>' + feedTitle + '</span></a><i id="' + video + '" class="fa fa-times removebutton removeFromPlaylist"  onClick="dbDelete(this.id);"></i><hr /></div>';
  

    console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
  }
  list_data += '';
  $.ui.updatePanel("#playlistvideos",list_data);

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
///*********************---Database----****************************//

//+Menu
var meny = Meny.create(
{
  menuElement: document.querySelector('#meny'),
  contentsElement: document.querySelector('#content'),
  position: 'right',
  height: 200,
  width: 250,
  angle: 0,
  threshold: 0,
  overlap:0,
  transitionDuration: '0.7s',
  transitionEasing: 'ease',
  gradient: false,
  mouse: true,
  touch: false
});

/***************************************/

function secondsTimeSpanToHMS(s)
  {
    var h = Math.floor(s / 3600); //Get whole hours
    s -= h * 3600;
    var m = Math.floor(s / 60); //Get remaining minutes
    s -= m * 60;
    return (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
  }
  //$(window).on('hashchange', function(e){