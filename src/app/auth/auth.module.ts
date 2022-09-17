import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
})
export class AuthModule {}
