import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Cta } from '../../components/cta/cta';
import { Projects } from '../../components/projects/projects';

@Component({
  selector: 'app-media',
  imports: [Header, Footer, Cta, Projects],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {}
