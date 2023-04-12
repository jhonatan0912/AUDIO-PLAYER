import { Component } from '@angular/core';
import { data } from 'src/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  audioPlayer: any;
  songs: any[] = data

  currentSongIndex: number = 0;
  isPlaying: boolean = false;

  constructor() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = this.songs[this.currentSongIndex].url;
  }

  playSong() {
    this.audioPlayer.play();
    this.isPlaying = true;
  }

  pauseSong() {
    this.audioPlayer.pause();
    this.isPlaying = false;
  }

  nextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.audioPlayer.src = this.songs[this.currentSongIndex].url;
    this.playSong();
  }

  previousSong() {
    this.currentSongIndex = (this.currentSongIndex - 1) % this.songs.length;
    this.audioPlayer.src = this.songs[this.currentSongIndex].url;
    this.playSong();
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pauseSong();
    } else {
      this.playSong();
    }
  }
}
