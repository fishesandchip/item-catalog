import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category';

@Injectable()
export class CategoryService {
  private categoriesUrl = 'app/categories';  // URL to web api

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoriesUrl)
               .toPromise()
               .then(response => response.json().data as Category[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}