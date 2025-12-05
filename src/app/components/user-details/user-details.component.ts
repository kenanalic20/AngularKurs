import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  router = inject(ActivatedRoute);
  userId:number = 0;
  user:any = {};
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
  ];
  ngOnInit() {
    this.userId =Number(this.router.snapshot.paramMap.get("id")?.toString());
    this.user = this.users.find((el)=>el.id == this.userId)
  }
}
