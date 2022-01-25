import { Component } from '@angular/core';
import { LinuxService } from '../services/linux.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  language: string;
  checked: boolean;
  loader = false;
  show   = true;
  categorys: any = [];
  textCommands: string;
  textCategorys: string;

  constructor(
    private linux: LinuxService,
    public router: Router,
  ) {
    this.changeLang();
  }
  showCommands(id: any) {
    this.router.navigateByUrl('/list');
  }

  getCategorys(lang: string) {
    this.linux.getCategorys(lang,'categorys').subscribe( category => {
      this.loader = true;
      this.show = false;
      this.categorys = category;
      this.categorys = this.categorys.data;
    });
  }

  changeLang() {

    if (this.checked) {
      this.checked = false;
      this.textCommands = 'Commands';
      this.textCategorys = 'Categorys';
      this.loader = false;
      this.show = false;
      this.getCategorys('en');
    } else {
      this.checked = true;
      this.loader = false;
      this.show = false;
      this.textCommands = 'Comandos';
      this.textCategorys = 'Categorias';
      this.getCategorys('es');
    }


  }

  search(termino: any) {
    console.log(termino);
  }


}
