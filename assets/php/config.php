<?php
header('Access-Control-Allow-Origin: *');

$host = "localhost"; /* Host name */
$user = "arsseoqr_admin"; /* User */
$password = "Simb5138"; /* Password */
$dbname = "arsseoqr_arssacra"; /* Database name */

$con = mysqli_connect($host, $user, $password, $dbname);
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}