import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://img.freepik.com/free-vector/flat-paper-coffee-cup_23-2147739201.jpg?size=338&ext=jpg';
  image3 = 'https://img.freepik.com/free-vector/cakes-icons-set_1284-14668.jpg?size=338&ext=jpg';

  constructor() { }

  ngOnInit() {
  }

}