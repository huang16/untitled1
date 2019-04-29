import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrMessageService {

  messages: string[] = [];

  constructor() {
    this.messages.push('nothing');
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
