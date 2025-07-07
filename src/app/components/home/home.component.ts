import { Component } from '@angular/core';
import { VideoCarouselComponent } from '../video-carousel/video-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
