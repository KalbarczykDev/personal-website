import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  safeUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.scss'],
  imports: [NgbCarouselModule, NgFor, NgIf],
  standalone: true,
})
export class VideoCarouselComponent implements OnInit {
  videos: Video[] = [];
  loading = true;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos() {
    const apiKey = '';
    console.log('YouTube API Key:', apiKey);
    const channelId = '';
    console.log('YouTube Channel ID:', channelId);
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`;

    this.http.get<any>(url).subscribe((res) => {
      this.videos = res.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${item.id.videoId}`,
        ),
      }));
      this.loading = false;
    });
  }
}
