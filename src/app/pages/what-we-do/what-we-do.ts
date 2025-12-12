import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { OurEvents } from '../../components/our-events/our-events';
import { Projects } from '../../components/projects/projects';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-what-we-do',
  imports: [Header, Footer, OurEvents, Projects, Cta],
  templateUrl: './what-we-do.html',
  styleUrl: './what-we-do.css',
})
export class WhatWeDo {

}
