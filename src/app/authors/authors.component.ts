import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  title = 'List of authors: ';
  authors = ['Author1', 'Author2', 'Author3'];
  moreAuthors: string[];
  current = 0;

  constructor(service: AuthorsService) {
    this.moreAuthors = service.getAuthors();
   }

  public onClicked(): void {
    this.authors.push(this.moreAuthors[this.current++ % this.moreAuthors.length]);
  }

  public removeAuthor(): void {
    this.authors.pop();
  }

  public removeItem(author: string, ind: number): void {
      this.authors.splice(ind, 1);
  }
}
