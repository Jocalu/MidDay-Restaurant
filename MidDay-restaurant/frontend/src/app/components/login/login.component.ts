import { Component } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { StoreService } from '../../core/services/store.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    public StoreService: StoreService,
    public dialog: MatDialog,
    private fb: FormBuilder,
     private route : Router) { }

    hide = true;

    submitLogin () {
      this.dialog.closeAll()
      this.StoreService.LoginUserRestaurant(
        this.loginPopUp.value)
      this.route.navigate(['/landing'])
    }

     loginPopUp = this.fb.group({
       userName: ['', [Validators.required]],
       password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
     })
}