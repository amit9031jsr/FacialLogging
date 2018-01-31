// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebCamModule, WebCamComponent } from 'ack-angular-webcam'; // importing ack-webcam 

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/log-reg/login/login.component';
import { LogRegComponent } from './components/log-reg/log-reg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// PROVIDERS
import { UserService } from './services/user/user.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogRegComponent,
    DashboardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    WebCamModule // ack-webcam
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
