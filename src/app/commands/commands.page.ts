import { Component, OnInit } from '@angular/core';
import { LinuxService } from '../services/linux.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.page.html',
  styleUrls: ['./commands.page.scss'],
})
export class CommandsPage implements OnInit {

  commands: any [] = [];
  constructor( private linux: LinuxService) {
    this.laodCommands();
  }

  ngOnInit() {
  }

  laodCommands() {
    this.linux.getCommands('es','commands').subscribe( data => {

    });
  }

}
