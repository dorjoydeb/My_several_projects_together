<?php
$un=$_POST['username'];
$em=$_POST['useremail'];
$su=$_POST['usersub'];
$msg=$_POST['mesg'];
$phone=$_POST['userphone'];
if(trim($un)!="" && trim($msg)!="" && trim($su)!="" && trim($em)!="" && trim($phone)!=""){
		if(filter_var($em, FILTER_VALIDATE_EMAIL)){
			if(preg_match("/^[0-9]*$/", $phone) && strlen($phone)>6) { 
				$message="Hi Admin..<p>".$un." has sent a query having subject ".$su." email id as ".$em." and phone number ".$phone."</p><p>Query is : ".$msg."</p>";
				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
				$headers .= 'From: <support@pixelblog.com>' . "\r\n";

				if(mail('jhini.mehta@gmail.com','Query for Pixel Blog HTML Template',$message,$headers )){
					echo '1#<p style="color:green;">Mail has been sent successfully.</p>';
				}else{
					echo '2#<p style="color:red;">Please, Try Again.</p>';
				}
			}
			else{
				echo '2#<p style="color:red">Please, provide valid Phone no and no should be 6 digit and more </p>';
			}
		}else{
			echo '2#<p style="color:red">Please, provide valid Email.</p>';
		}
}else{
	echo '2#<p style="color:red">Please, fill all the details.</p>';
}?>