import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Demo';
  pizzaOrder = {};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    http.get('resource').subscribe(data => this.pizzaOrder = data);
  }

  authenticated() { return this.app.authenticated; }

    logout() {
      this.http.post('logout', {}).finally(() => {
          this.app.authenticated = false;
          this.router.navigateByUrl('/login');
      }).subscribe();
    }

}
