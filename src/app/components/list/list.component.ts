import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listView = true;

  images: Model[] = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => this.images = images)
  }

  toogleView(): void {
    this.listView = !this.listView;
  }

}
