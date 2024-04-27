import { Component } from '@angular/core';
import { Song } from './models/Song.interface';
import { data } from 'src/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentSong: any;
  public isPlaying: boolean = false;
  public audio: HTMLAudioElement = new Audio();

  public songs: Song[] = data;

  play(song: any) {
    if (this.currentSong !== song) {
      this.currentSong = song;
      this.audio.src = song.url;
      this.audio.load();
    }
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }
}
