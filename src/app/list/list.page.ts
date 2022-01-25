import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinuxService } from '../services/linux.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  id: any;
  commands: any = [];
  category: string;
  constructor(private api: LinuxService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.category = this.id;
    this.getCommands(this.id);

  }

  getCommands(id: any) {
    this.api.getListCommands('es', id).subscribe( data => {
      this.commands = data;
      this.commands = this.commands.data;

    });
  }

}
