import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  email:AbstractControl;
  password:AbstractControl;

  error=null;
  constructor(private fb:FormBuilder,
    private router:Router,
    private auth:AuthService) { }

  ngOnInit() {
    this.form=this.fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
    this.email=this.form.controls['email'];
    this.password=this.form.controls['password'];

  }
  _onSignIn(f:any){
    if(this.form.valid){
      this.form.disable();
      const {email,password}=f;
      this.auth.login(email,password).then(()=>{
        this.router.navigate(['/']);
      }).catch(error=>{
        this.error=error;
        this.form.enable();
      })
    }
  }

}
