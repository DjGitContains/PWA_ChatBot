import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
@Injectable({
    providedIn: "root"
})
export class ChatBotService {
    private chatbotDataUrl = 'assets/chatbot-responses.json';

    constructor(private http:HttpClient){

    }
    getResponse(intent: string): string {
        // return this.http.get<string[]>(this.chatbotDataUrl).pipe(
        //     map(data => {
        //         if(data[intent]){
        //             const responses = data[intent].responses;
        //             return responses[Math.floor(Math.random() * responses.length)];
        //         }
        //         else{
        //             return data['default'].responses[Math.floor(Math.random() * data['default'].responses.length)];
        //         }
        // }));

        return "test";
    }
}