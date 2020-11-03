import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let errorMsg = '';
      if(newTitle.trim() !== ''){
         if(!this.movies.includes(newTitle)){
            this.movies.push(newTitle);
         }
         else {
            errorMsg = `${newTitle} is already in the list.`;
         }
      } else {
         errorMsg = 'Add a valid movie title';
      }
      return errorMsg;
   }
}