import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  about = `Content Creator. Linux Enjoyer. Man of many talents. I work at Netcompany with Java/Spring Boot and Angular. As a hobby, I develop plugins for the tools I use and rice my operating system and terminal code editor (neovim btw).`;
  cards = [
    {
      title: 'Join Spring Boot Academy',
      description:
        'Netflix but for Java And Spring Boot. Connect with fellow developers, share your projects, and get personal help on your coding journey.',
      link: 'https://www.skool.com/spring-boot-academy-1127/about',
      thumbnail: 'assets/skool-thumbnail.webp',
    },
    {
      title: 'Java Youtube Series',
      description:
        'Learn the fundamentals and advanced concepts of Java for building robust applications.',
      thumbnail: 'assets/java-thumbnail.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkGya65COeC-BeYmRJyHvVbC&si=BFdkuu7AiKRPliEI',
    },

    {
      title: 'Spring Boot Youtube Series',
      description:
        'Learn the essentials of Spring Boot for creating production-ready applications with ease.',
      thumbnail: 'assets/spring-boot-thumbnail.webp',
      link: 'https://youtube.com/playlist?list=PLiayrFm4-ZkEa21XHCfpcV2zgHQJwmMfB&si=cSyUfcFmoQ2iuQuJ',
    },
  ];
}
