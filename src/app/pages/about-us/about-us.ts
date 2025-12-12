import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { OurEvents } from '../../components/our-events/our-events';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-about-us',
  imports: [Header, Footer, OurEvents, Cta],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {

}
