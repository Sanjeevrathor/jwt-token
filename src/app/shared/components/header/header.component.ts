import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { CollaspeService } from '../../services/collaspe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _collaspeService : CollaspeService, private _authService:AuthService) { }

  ngOnInit(): void {
  }
  collaspeSidebar() {
    this._collaspeService.openSidebar = !this._collaspeService.openSidebar;
  }

 logo(){
  this._authService.logout()
 }
}
