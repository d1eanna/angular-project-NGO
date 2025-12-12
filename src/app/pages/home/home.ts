import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { OurEvents } from '../../components/our-events/our-events';
import { Projects } from '../../components/projects/projects';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, OurEvents, Projects, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
