import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  router = inject(Router);
  onClickUser(id: number) {
    this.router.navigate([`user-details/${id}`]);
  }
  users: any[] = [
    {
      id: 1,
      username: 'test1',
      email: 'test1@gmail.com'
    },
    {
      id: 3,
      username: 'test2',
      email: 'test2@gmail.com'
    },
    {
      id: 3,
      username: 'test3',
      email: 'test3@gmail.com'
    }
  ]
}
