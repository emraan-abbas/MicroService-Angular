import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';



/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  opened = false; // for navbar

    constructor( private tokenService: TokenService) { }

  ngOnInit(): void {
  }

    logout(): void {
      this.tokenService.signOut();
      // this.isLoggedIn = false;
      // this.roles = [];
      // this.showAdminBoard = false;
      // this.showModeratorBoard = false;
    }

    
    
}
