<?php
session_start();
require_once("api/twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "Radhakrishnancb";
$notweets = 12;
$consumerkey = "M9yQ3rytoTBLDJM5UUVMDw";
$consumersecret = "fdHZasefjkXijW2Cw1kz7HrW7bKSFjAjUQk1IJgboRI";
$accesstoken = "2423529476-QCsijYroJXDMP6zsF26CPrykHgEMcPbUbMvsrw9";
$accesstokensecret = "iVlKfAs2xVlChWATEZnzq8QnkuubwSMOk7NebJh5OyVMq";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>