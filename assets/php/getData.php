<?php

include 'config.php';

$sel = mysqli_query($con, "SELECT * FROM boxInformation");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
    $data[] = array("id" => $row['id'], "page" => $row['page'], "imgsrc" => $row['imgsrc'], "title" => $row['title'], "text" => $row['text'], "link" => $row['link'],);
}

echo json_encode($data);