import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  send() {
    if (
      !this.form.firstName ||
      !this.form.lastName ||
      !this.form.email ||
      !this.form.subject ||
      !this.form.message
    ) {
      alert('Please fill in all fields');
      return;
    }

    const name = `${this.form.firstName} ${this.form.lastName}`;

    emailjs
      .send(
        'service_2t5lipl',
        'template_j3ufedp',
        {
          name: name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        },
        'D_DPq52Ujba9O4NjU'
      )
      .then(() => {
        alert('Message sent successfully!');
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        };
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send message');
      });
  }
}
