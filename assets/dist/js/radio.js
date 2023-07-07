// Initialize variables
var stationSelect = document.getElementById("station-select");
var radioPlayerAudio = document.getElementById("radio-player-audio");
var radioPlayerSource = document.getElementById("radio-player-source");
var nextStationButton = document.getElementById("next-station");
//var prevStationButton = document.getElementById("prev-station");


var stations = "radioZenders.txt";
function getFile(){
    $.get(file,function(txt){
        var lines = txt.responseText.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            save(lines[i]);
        }
    }); 
}

var stationIndex = 0;
// var stations = [
	//Qmusic
	// "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live.mp3", // Qmusic regular
	// "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_nederlandstalig.mp3", // Qmusic nedelandstalig
	// "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_fouteuur.mp3", // Qmusic foute uur
	// "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_nonstop.mp3", // Qmusic non stop
	// "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_thema.mp3", // Qmusic Summer
	// "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_top40.mp3", // Qmusic top 40
	
	
	//100% nl
	// "https://stream.100p.nl/100pctnl.mp3", // 100% NL
	// "https://stream.100p.nl/web04_mp3", // NL nederpop
	// "https://stream.100p.nl/web02_mp3", // NL Non-Stop
	// "https://stream.100p.nl/web06_mp3", // Puur
	// "https://stream.100p.nl/web05_mp3", // Songfestival
	
	
	//Radio 538
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538.mp3", // Radio 358
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538.mp3", // 538 Classics
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR01.mp3", // 538 Dance Dept.
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR09.mp3", // 538 Hitzone
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR16.mp3", // 538 Party
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR21.mp3", // 538 Die Verrückte
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR06.mp3", // 538 Zomer
	
	
	//Radio 10
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO10.mp3", // radio 10
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR18.mp3", // Radio 10 60' & 70' Hit's
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR20.mp3", // Radio 10 80's Hits
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR22.mp3", // Radio 10 90's Hits
	// "https://www.mp3streams.nl/zender/radio-10-lovesongs/stream/75-mp3-128", // Radio 10 Love Songs
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR23.mp3", // Radio 10 Disco Classics
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR15.mp3", // Radio 10 Non-Stop
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR24.mp3", // Radio 10 Top 4000
	
	
	//Sky Radio
	// "https://www.mp3streams.nl/zender/skyradio/stream/8-mp3-128", //  Sky Radio
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SKYRADIO.mp3", // Sky Radio Non-Stop
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR01.mp3", // Sky Hits
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR28.mp3", // Sky Summer Hits
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR03.mp3", // Sky LoveSongs
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR24.mp3", // Sky Non-Stop@Work
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR15.mp3", // Sky Smooth Hits
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR04.mp3", // Sky 80's Hits
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR05.mp3", // Sky 90's Hits
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR07.mp3", // Sky Nice & Easy
	// "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR08.mp3", // Sky Christmas
	
	
	//Slam! FM
	// "https://stream.slam.nl/slam_mp3", // Slam! Live
	// "https://stream.slam.nl/web14_mp3", // Slam! 40
	// "https://stream.slam.nl/web15_mp3", // Slam! Dance Classics
	// "https://stream.slam.nl/web11_mp3", // Slam! Hardstyle
	// "https://stream.slam.nl/slam_mp3", // Slam! Housuh In De Pauzuh
	// "https://stream.slam.nl/web13_mp3", // Slam! MixMarathon
	// "https://stream.slam.nl/web10_mp3", // Slam! Non-Stop
	// "https://stream.slam.nl/web08_mp3", // Slam! Summer
	// "https://stream.slam.nl/web12_mp3", // Slam! The Boom Room
	// "https://stream.slam.nl/web09_mp3" // Slam! Juize

 // ];

// Set the initial station
radioPlayerSource.src = stations[stationIndex];
radioPlayerAudio.load();

// Play the radio
radioPlayerAudio.play();

// Change the station when the user selects a new station
	stationSelect.addEventListener("change", function(event) {
	radioPlayerSource.src = event.target.value;
	radioPlayerAudio.load();
	radioPlayerAudio.play();
});

// Change the station when the user clicks the next station button
nextStationButton.addEventListener("click", function() {
	stationIndex = (stationIndex + 1) % stations.length;
	radioPlayerSource.src = stations[stationIndex];
	radioPlayerAudio.load();
	radioPlayerAudio.play();
	stationSelect.value = stations[stationIndex];
});

// prevStationButton.addEventListener("click", function() {
	// stationIndex = (stationIndex - 1) % stations.length;
	// radioPlayerSource.src = stations[stationIndex];
	// radioPlayerAudio.load();
	// radioPlayerAudio.play();
	// stationSelect.value = stations[stationIndex];
// });
