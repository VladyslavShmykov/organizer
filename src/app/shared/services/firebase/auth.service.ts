import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  public async signIn(email: string, pass: string): Promise<any> {
    return await this.firebaseAuth.signInWithEmailAndPassword(email, pass)
      .then(res => {
        if (res) {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['main']);
        }
      });
  }

  public async signUp(email: string, pass: string): Promise<any> {
    return await this.firebaseAuth.createUserWithEmailAndPassword(email, pass)
      .then(res => {
        if (res) {
          res.user?.sendEmailVerification();
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['main']);
        }
      });
  }

  public logout() {
    this.firebaseAuth.signOut().then(() => {
      this.router.navigate(['auth']);
    });
    localStorage.removeItem('user');
  }
}
