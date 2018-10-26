import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  messages: string[];
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.messages;
  }

  clearMessages() {

    this.messageService.clear();
    this.messages = [];

  }
}
