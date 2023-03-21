import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../../shared/services/http.service';
import { Global } from '../../../shared/services/global';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _httpService: HttpService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.setLoginForm();
  }

  setLoginForm() {
    this.loginForm = this._fb.group({
      username: [''],
      password: ['']
    });
  }
  login(){
    this._httpService.post(Global.BASE_API_PATH + "/signin", this.loginForm.value).subscribe(res => {
      if (res) {
        console.log(res)
        this._authService.authLogin(res);
        this.loginForm.reset();
      } 
  })
  }
}
