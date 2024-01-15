import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/models/model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  showDetails = false;
  buttonText = this.showDetails ? 'Hide' : 'Show';

  image: Model = {
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: ''
  };

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier -->', identifier);

    this.imagesService.getImageById(identifier!).subscribe((image) => {

      if (!image) {
        return this.router.navigateByUrl('/');
      } else {
        this.image = image;
        console.log('Image -->', this.image);
      }

    })

  }

  toggleShowDetails(): void {
    this.showDetails = !this.showDetails;
    this.buttonText = this.showDetails ? 'Hide' : 'Show';
  }

}
