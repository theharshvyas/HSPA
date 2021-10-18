import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string;
  constructor(private router: Router,
              private alertyfy: AlertifyService) { }

  ngOnInit() {
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertyfy.success('Logout successful');
    this.router.navigate(['user/login']);
  }
}
