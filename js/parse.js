$(document).ready(function(){
  var newColumn;

  function userTweets(userData){
    var colDiv = $("<div>").addClass("col-md-4");
    var profilePic = $("<img>").attr("src", "http://lorempicsum.com/simpsons/255/200/2");
    var thumbnail = $("<div>").addClass("thumbnail").append(profilePic);
    var userName = $("<h3>").append(userData.user.name);
    var userTweet = $("<p>").append(userData.text);
    var timeTweeted = $("<p>").addClass("small").append(userData.created_at);
    var retweeted = $("<p>").addClass("small").append("Retweets " + userData.retweet_count + " times");


    colDiv.append(thumbnail)
      .append(userName)
      .append(userTweet)
      .append(timeTweeted)
      .append(retweeted);

    return colDiv;
  }

  for (var i = 0; i < window.tweets.length; i++){
    newColumn = userTweets(window.tweets[i]);
    $(".row").append(newColumn);
  }
});