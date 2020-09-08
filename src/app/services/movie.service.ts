import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MovieAPIService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  searchResults: any[] = [];
  myMovieList: any[] = [];

  constructor(private apiService: ApiService, private movieApiService: MovieAPIService) { }

  getSearchResults(): any[] {
    return this.searchResults;
  }

  getMovieList(): any[] {
    return this.myMovieList;
  }

  async searchForMovies(searchTerm: string): Promise<void> {
    const response = await this.movieApiService.get(searchTerm);
    this.searchResults.length = 0;
    this.searchResults.push(... response.results);
  }

    async loadMovieList(): Promise<void> {
      const response = await this.apiService.get();
      this.myMovieList.length = 0;
      this.myMovieList.push(...response);
    }

    async saveToList(movie: any): Promise<void> {
      await this.apiService.post(movie);
      await this.loadMovieList();
    }
  
}
