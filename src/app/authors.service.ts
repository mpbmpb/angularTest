import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() { return ['Pratchett', 'Archer', 'Fry', 'King']; }
}
