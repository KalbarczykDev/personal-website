import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  about = `
    Hi, I'm Oskar Kalbarczyk, a passionate developer and teacher.
    I love building beautiful and functional web applications, sharing knowledge,
    and inspiring others to code.
  `;

  courses = [
    {
      title: 'Java Lombok: Full Guide',
      description:
        'Master Project Lombok and write clean, concise, and maintainable Java code faster.',
      link: '#',
      thumbnail: 'assets/lombok-course.png',
    },
    {
      title: 'Java Basics',
      description: 'Start Your Java Journey Here!',
      link: '#',
      thumbnail: 'https://via.placeholder.com/1280x720',
    },
    {
      title: 'JavaScript Basics',
      description: 'Start your JavaScript journey here!',
      link: '#',
      thumbnail: 'https://via.placeholder.com/1280x720',
    },
  ];

  videos = [
    { title: 'RxJS Crash Course', thumbnail: 'assets/video1.jpg', link: '#' },
    { title: 'Signals Explained', thumbnail: 'assets/video2.jpg', link: '#' },
    { title: 'Bootstrap + Angular', thumbnail: 'assets/video3.jpg', link: '#' },
  ];
}
