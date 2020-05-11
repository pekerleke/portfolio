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
        date: '2016 - actualidad',
        href: 'http://buscopensiones.com/'
      },
      {
        title: 'El Sinso Contador',
        description: '',
        backgroundImage: 'https://i.scdn.co/image/7fa522b9ce38b3f21a7bd2befffc7d8fe598da37',
        date: '2019',
        href: '#'
      },
      {
        title: 'MercadoLibre Trends',
        description: 'pruebas contra la api de mercadolibre',
        backgroundImage: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
        date: '2020',
        href: '/mlTrends'
      },
      {
        title: 'Proyecto 4',
        description: '',
        backgroundImage: '/assets/images/working.jpeg',
        date: '2017',
        href: '#'
      }
    ],

    aptitudes : [
      {
        name: 'Angular 2+',
        image_url: '/assets/images/aptitudes/angular.png',
        url: 'https://angular.io/',
        percentage: '80'
      },
      {
        name: 'Nginx',
        image_url: '/assets/images/aptitudes/nginx.png',
        url: 'https://www.nginx.com/',
        percentage: '45'
      },
      {
        name: 'Openresty',
        image_url: '/assets/images/aptitudes/openresty.png',
        url: 'https://openresty.org/en/',
        percentage: '40'
      },
      {
        name: 'Lua',
        image_url: '/assets/images/aptitudes/lua.png',
        url: 'https://www.lua.org/',
        percentage: '35'
      },
      {
        name: 'JavaScript',
        image_url: '/assets/images/aptitudes/js.png',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        percentage: '80'
      },
      {
        name: 'scss',
        image_url: '/assets/images/aptitudes/sass.png',
        url: 'https://sass-lang.com/',
        percentage: '90'
      },
      {
        name: 'Json',
        image_url: '/assets/images/aptitudes/json.png',
        url: '#',
        percentage: '90'
      },
      {
        name: 'Gimp',
        image_url: '/assets/images/aptitudes/gimp.png',
        url: '#',
        percentage: '70'
      },
      {
        name: 'Python',
        image_url: '/assets/images/aptitudes/python.png',
        url: '#',
        percentage: '35'
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
