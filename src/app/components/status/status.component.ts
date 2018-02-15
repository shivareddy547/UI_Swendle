import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
     this.isLoggedIn = true;
      
    }
  }

  logout() {
  
    localStorage.setItem('token', "");
      //this.isUserLoggedin = false;
      window.location.href="/login";
      //window.location="/login"
    
  }


}