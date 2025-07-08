import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  about = `
    I am fullstack developer and  Computer Science grad from the Polish-Japanese Academy of Information Technology, I teach students FullStack development. My focus is on helping them truly get the core ideas of programming, how to use popular frameworks, and the best ways to build software. I mostly work with Java for the back-end and Angular for the front-end.
  `;

  courses = [
    {
      title: 'Java Lombok: Full Guide',
      description:
        'Master Project Lombok and write clean, concise, and maintainable Java code faster.',
      link: 'https://www.udemy.com/user/oskar-kalbarczyk/',
      thumbnail: 'assets/lombok-course.webp',
    },
    {
      title: 'T.B.A',
      description: 'To be announced soon!',
      link: '',
      thumbnail:
        'https://placehold.co/1280x720/FFFFFF/000000?text=Coming+Soon!&font=roboto',
    },
    {
      title: 'T.B.A',
      description: 'To be announced soon!',
      link: '',

      thumbnail:
        'https://placehold.co/1280x720/FFFFFF/000000?text=Coming+Soon!&font=roboto',
    },
  ];

  playlists = [
    { title: 'Java', thumbnail: 'assets/video1.jpg', link: '#' },
    { title: 'JavaScript', thumbnail: 'assets/video2.jpg', link: '#' },
    { title: 'Design Patterns', thumbnail: 'assets/video3.jpg', link: '#' },
  ];
}
