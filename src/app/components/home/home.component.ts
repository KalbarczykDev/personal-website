import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  about = `
  I am a <strong>fullstack developer</strong> and <strong>Computer Science </strong>  grad from the <strong>Polish-Japanese Academy of Information Technology</strong>.
  On YouTube, I share my knowledge of fullstack development, helping aspiring developers truly grasp the core principles of programming, master modern frameworks, and discover the most effective ways to build high-quality software.
  I mostly work with <strong>Java Spring</strong> for the back-end and <strong>Angular</strong> for the front-end.
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
    {
      title: 'Java',
      description:
        'Learn the fundamentals and advanced concepts of Java for building robust applications.',
      thumbnail: 'assets/java-playlist.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkGya65COeC-BeYmRJyHvVbC&si=BFdkuu7AiKRPliEI',
    },
    {
      title: 'JavaScript',
      description:
        'Master JavaScript essentials to create dynamic, interactive web experiences.',
      thumbnail: 'assets/js-playlist.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkEyOJz85BywT8VNUM1CbZEJ&si=dCZ8pdjIVU1hhQVR',
    },
    {
      title: 'Design Patterns',
      description:
        'Explore proven design patterns to write cleaner, more maintainable code.',
      thumbnail: 'assets/patterns-playlist.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkEa21XHCfpcV2zgHQJwmMfB&si=cSyUfcFmoQ2iuQuJ',
    },
  ];
}
