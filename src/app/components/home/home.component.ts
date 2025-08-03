import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  about = `
I am a Java and Spring Boot developer. On YouTube, I share my knowledge of backend development to help aspiring developers really grasp the core principles of programming, master modern frameworks, and discover the most effective ways to build high-quality software. I mostly work with Java Spring for the backend and Angular for the frontend.`;
  cards = [
    {
      title: 'Join Spring Boot Academy 🍃☕️🅰️',
      description:
        'Netflix but for Java And Spring Boot. Connect with fellow developers, share your projects, and get personal help on your coding journey.',
      link: 'https://www.skool.com/spring-boot-academy-1127/about',
      thumbnail: 'assets/skool-banner.png',
    },
    {
      title: 'Java Youtube Series',
      description:
        'Learn the fundamentals and advanced concepts of Java for building robust applications.',
      thumbnail: 'assets/java-playlist.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkGya65COeC-BeYmRJyHvVbC&si=BFdkuu7AiKRPliEI',
    },

    {
      title: 'Design Patterns Youtube Series',
      description:
        'Explore proven design patterns to write cleaner, more maintainable code.',
      thumbnail: 'assets/patterns-playlist.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkEa21XHCfpcV2zgHQJwmMfB&si=cSyUfcFmoQ2iuQuJ',
    },
  ];
}
