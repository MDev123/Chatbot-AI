<?php
   if(isset($_POST["chat_id"]) && isset($_POST["message"])){
      $chat_id = $_POST["chat_id"];
      $message = $_POST["message"];

      // Save the chat data to a file
      $file = fopen("chats/".$chat_id.".txt", "a");
      fwrite($file, $message."\n");
      fclose($file);

      echo "Success";
   }
?>
