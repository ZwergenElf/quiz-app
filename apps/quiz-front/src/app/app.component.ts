import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private _document: Document, private _auth: AuthService) {
    this.getToken();
    this._auth.user$.pipe(tap((user)=> console.log(user))
  ).subscribe();
  }
  
  isAuthenticated$ = this._auth.isAuthenticated$;

  login() {
    this._auth.loginWithRedirect();
  }

  getToken() {
    this._auth.getAccessTokenWithPopup({ authorizationParams: {
      audience: "883DKSj9Avq2rfDGyoqcM0b1RZn6KAUF",
    }}).subscribe((test)=> console.log(test)
    )
  }

  logout() {
    this._auth.logout({ logoutParams: { returnTo: this._document.location.origin }}).subscribe();
  }
}
