import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  url = environment.URL;
  constructor(private api: ApiService) {}

  getComics() {
    return this.api.get(`${this.url}/v1/public/comics`);
  }

  getComicsById(id: number) {
    return this.api.get(`${this.url}/v1/public/comics/${id}`);
  }

  getCharacters() {
    return this.api.get(`${this.url}/v1/public/characters`);
  }

  getCharctersById(id: number) {
    return this.api.get(`${this.url}/v1/public/characters/${id}`);
  }
}
