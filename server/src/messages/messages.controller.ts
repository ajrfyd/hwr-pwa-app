import { Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('api/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  sendStart() {
    return this.messagesService.sendStartMessage();
  }
}
