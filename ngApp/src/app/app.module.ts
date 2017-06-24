import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';

import { AuthComponent }      from './components/auth.component';
import { AuthService } from './services/auth.service';
import { MainComponent }      from './components/main.component';
import { MainService } from './services/main.service';
import { HeaderComponent }  from './components/header.component';
import { AuthGuard }      from './guards/auth.guard';
import { MypageComponent }      from './components/mypage.component';
import { UserDeleteComponent } from './components/user_delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    HeaderComponent,
    MypageComponent,
    UserDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    MainService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
