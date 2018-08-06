(function() {
  "use strict";

  //Initialiation
  const CHANNELS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
  "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let list = document.getElementById("streamers-list");
  let listContent = "";
  let logo, description, backgroundColor;

  //Calling API for each channel and presenting their names
  CHANNELS.forEach(function(channel, i) {
    let url = `https://wind-bow.gomix.me/twitch-api/streams/${channel}?&callback=?`;
    $.getJSON(url, function(data) {
      if (data.stream == null) {
        description = "offline";
        status = "offline";
        logo = "https://upload.wikimedia.org/wikipedia/commons/8/86/Twitch_TV.jpg";
      } else {
        status = "online";
        description = data.stream.channel.status;
        logo = data.stream.channel.logo;
      }
      //
      listContent =`<div class="${status}"><img src=${logo}><div class="name"><a href="https://www.twitch.tv/${channel}" target="_blank">${channel}</a></div><div id="desc"><p>${description}</p></div>`;

      status == "online"?  $("#streamers-list").prepend(listContent) :
      $("#streamers-list").append(listContent);

    });
  });
  document.getElementById("online").addEventListener("click", function() {
    $(".offline").addClass("hidden");
    $(".online").removeClass("hidden");
  });

  document.getElementById("offline").addEventListener("click", function() {
    $(".online").addClass("hidden");
    $(".offline").removeClass("hidden");
  });

  document.getElementById("all").addEventListener("click", function() {
    $(".online").removeClass("hidden");
    $(".offline").removeClass("hidden");
    $("#all").attr("border", "1px solid white");
  });
})();
