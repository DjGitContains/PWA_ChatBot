import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { Message } from "../Model/Message";
@Injectable({
    providedIn: "root"
})

export class ChatBotService {
    private chatbotDataUrl = 'assets/chatbot-responses.json';

    constructor(private http:HttpClient){

    }
    conversation = new Subject<Message[]>();
    messageMap = new Map([
      ["Hi", "Hello"],
      ["Who are you", "My name is Test Sat Bot"],
      ["What is your role", "Just guide for the user"],
      ["defaultmsg", "I can't understand your text. Can you please repeat"],
    ]);

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string) : string {
    question = question.trim();
    var answer = this.messageMap.get(question);
    return answer ? answer : this.messageMap.get('defaultmsg')!;
  }
}