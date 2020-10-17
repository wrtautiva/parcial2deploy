import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator,} from '../models/paginator.model';
import { Picture } from '../models/picture.model';
import { PictureInfoService } from '../service/picture-info.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageNumber: any;

  goToPage() {
    this.paginator.pageIndex = this.pageNumber, // number of the page you want to jump.
      this.paginator.page.next({
        pageIndex: this.pageNumber,
        pageSize: this.paginator.pageSize,
        length: this.paginator.length
  });
  }

  pictures: Array<Picture>;
  constructor(private pictureInfoService: PictureInfoService) {
      this.pictures= new Array <Picture> ();
   }


    
  ngOnInit(): void {
  this.fillPictures();
  }

  fillPictures() {
    this.pictureInfoService.getPictures().subscribe(picture => {
      this.pictures = picture;
      console.log(this.pictures);
    })
  }



}
