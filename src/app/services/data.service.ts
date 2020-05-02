import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = {
    projects : [
      {
        title: 'BuscoPensiones',
        description: 'Nace para unificar la informacion sobre hospedajes estudientiles bajo un mismo techo',
        backgroundImage: '/assets/images/buscopensiones.png',
        date: '2016 - actualidad'
      },
      {
        title: 'El Sinso Contador',
        description: '',
        backgroundImage: '/assets/images/working.jpeg',
        date: '2019'
      },
      {
        title: 'Proyecto 3',
        description: '',
        backgroundImage: '/assets/images/working.jpeg',
        date: '2017 - 2018'
      },
      {
        title: 'Proyecto 4',
        description: '',
        backgroundImage: '/assets/images/working.jpeg',
        date: '2017'
      }
    ],

    aptitudes : [
      {
        name: 'Angular 2+',
        image_url: '/assets/images/aptitudes/angular.png',
        url: 'https://angular.io/'
      },
      {
        name: 'Nginx',
        image_url: '/assets/images/aptitudes/nginx.png',
        url: 'https://www.nginx.com/'
      },
      {
        name: 'Openresty',
        image_url: '/assets/images/aptitudes/openresty.png',
        url: 'https://openresty.org/en/'
      },
      {
        name: 'Lua',
        image_url: '/assets/images/aptitudes/lua.png',
        url: 'https://www.lua.org/'
      },
      {
        name: 'JavaScript',
        image_url: '/assets/images/aptitudes/js.png',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
      },
      {
        name: 'scss',
        image_url: '/assets/images/aptitudes/sass.png',
        url: 'https://sass-lang.com/'
      },
    ]
  };

  constructor() { }

  getDataProjects() {
    return this.data.projects;
  }

  getDataAptitudes() {
    return this.data.aptitudes;
  }
}