import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { WhatWeDo } from './pages/what-we-do/what-we-do';
import { Media } from './pages/media/media';
import { Login } from './pages/login/login';
import { Contact } from './pages/contact/contact';

const isLoggedIn = () => localStorage.getItem('loggedIn') === 'true';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivate: [() => isLoggedIn() || (location.href = '/login')],
  },
  {
    path: 'about-us',
    component: AboutUs,
    canActivate: [() => isLoggedIn() || (location.href = '/login')],
  },
  {
    path: 'what-we-do',
    component: WhatWeDo,
    canActivate: [() => isLoggedIn() || (location.href = '/login')],
  },
  {
    path: 'media',
    component: Media,
    canActivate: [() => isLoggedIn() || (location.href = '/login')],
  },
  {
    path: 'login',
    component: Login,
    canActivate: [() => !isLoggedIn() || (location.href = '/')],
  },
  {
    path: 'contact',
    component: Contact,
    canActivate: [() => isLoggedIn() || (location.href = '/login')],
  }
];
