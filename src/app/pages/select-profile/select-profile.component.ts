import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface userData {
  token?: string;
  users?: [
    {
      id: number;
      name: string;
      avatarUrl: string;
    }
  ];
}

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.css'],
})
export class SelectProfileComponent implements OnInit {
  constructor(private router: Router) {}

  userData: userData = {};

  ngOnInit(): void {
    const users = localStorage.getItem('users');
    if (!users) {
      this.router.navigate(['/login']);
      return;
    }

    this.userData = JSON.parse(users);
  }

  selectUser(id: number): void {
    localStorage.setItem('userId', id.toString());
  }
}
