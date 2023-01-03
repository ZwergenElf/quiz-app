import { Component } from '@angular/core';
import io, { Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  socket: Socket | undefined;

  ngOnInit(): void {
    this.socket = io('http://localhost:3000');
  }
}
