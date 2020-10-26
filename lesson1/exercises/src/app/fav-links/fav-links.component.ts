import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://matadornetwork.com/life/drone-footage-teahupoo-shows-just-beautiful-dangerous-surfing-can/', 'https://www.ted.com/talks/benjamin_zander_the_transformative_power_of_classical_music/up-next?language=en', 'https://www.yogajournal.com/practice/not-all-yoga-is-created-equal'];

  constructor() { }

  ngOnInit() {
  }

}
