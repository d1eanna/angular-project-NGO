import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class Login {
  mode: 'login' | 'signup' = 'login';
  email = '';
  password = '';

  submit() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (this.mode === 'signup') {
      if (users.find((u: any) => u.email === this.email)) {
        alert('User already exists');
        return;
      }
      users.push({ email: this.email, password: this.password });
      localStorage.setItem('users', JSON.stringify(users));
      this.mode = 'login';
      alert('Account created');
    } else {
      const ok = users.find((u: any) => u.email === this.email && u.password === this.password);

      if (ok) {
        localStorage.setItem('loggedIn', 'true');
        location.href = '/';
      } else {
        alert('Invalid credentials');
      }
    }

    this.email = '';
    this.password = '';
  }
}
