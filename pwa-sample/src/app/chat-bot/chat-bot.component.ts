import { Component, OnInit } from '@angular/core';
import { ChatBotService } from '../services/chatbot.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit{
  userInput: string = "";
  messages:string[] = [];
  isHide:boolean = false;
  constructor(private chatbotservice: ChatBotService){
    
  }
  ngOnInit(): void {
    $(document).ready(function(){
      $(".chat_on").click(function(){
          $(".Layout").toggle();
          $(".chat_on").hide(300);
      });
      
         $(".chat_close_icon").click(function(){
          $(".Layout").hide();
             $(".chat_on").show(300);
      });
      
  });
  }
//   $(document).ready(function(){
//     $(".chat_on").click(function(){
//         $(".Layout").toggle();
//         $(".chat_on").hide(300);
//     });
    
//        $(".chat_close_icon").click(function(){
//         $(".Layout").hide();
//            $(".chat_on").show(300);
//     });
    
// });
  sendMessage() : void{
    if(this.userInput.trim() === '') return;
    this.messages.push('You: '+ this.userInput);
    // this.chatbotservice.getResponse(this.userInput).subscribe(response => {
    //   this.messages.push('chatbot '+ response);
    // });
    this.userInput = "";
  }
  showDvi(){
    // $(".Layout").toggle();
    //     $(".chat_on").hide(300);
  }
}
