import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  about = `I am a Java and Spring Boot developer. On YouTube, I share my knowledge of backend development to help aspiring developers really grasp the core principles of programming, master modern frameworks, and discover the most effective ways to build high-quality software. I mostly work with Java Spring for the backend and Angular for the frontend.`
  cards = [
    {
      title: 'YouTube',
      description:
        'Netflix but for Java And Spring Boot. Connect with fellow developers, share your projects, and get personal help on your coding journey.',
      link: 'https://www.skool.com/spring-boot-academy-1127/about',
      thumbnail: 'assets/skool-thumbnail.webp',
    },
    {
      title: 'Community',
      description:
        'Learn the fundamentals and advanced concepts of Java for building robust applications.',
      thumbnail: 'assets/java-thumbnail.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkGya65COeC-BeYmRJyHvVbC&si=BFdkuu7AiKRPliEI',
    },

    {
      title: 'Projects',
      description:
        'Learn the essentials of Spring Boot for creating production-ready applications with ease.',
      thumbnail: 'assets/spring-boot-thumbnail.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkEa21XHCfpcV2zgHQJwmMfB&si=cSyUfcFmoQ2iuQuJ',
    },
  ];
}
