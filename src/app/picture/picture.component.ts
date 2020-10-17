import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../models/picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input()
  picture: Picture;

  constructor() { }

  ngOnInit(): void {
  }

  openUrl () {
    window.open(`${this.picture.download_url}`,'_blank');
  }

}
