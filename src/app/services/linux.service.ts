import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinuxService {

  language: string;

  constructor( private http: HttpClient ) {}

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
  }

  getLang() {
    this.language = localStorage.getItem('lang');
    return this.language;
  }

  getQuery(lang: string ,query: string) {
    const url = `https://commandslinuxapi.herokuapp.com/api/${lang}/${query}`;
    return this.http.get(url);
  }

  getCategorys(lang, query) {
    return this.getQuery(lang, query);
  }

  getCommands(lang, query) {
    return this.getQuery(lang, query);
  }

  getListCommands(lang, query) {
    return this.getQuery(lang, `commandsByCategory/${query}`);
  }

}
