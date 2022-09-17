import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
