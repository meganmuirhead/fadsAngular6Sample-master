import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatButtonModule, MatSidenavModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {UserProfileService} from './user-profile/user-profile.service';
import { HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    UserProfileComponent,
    ProductsComponent,
    LogoutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]

})
export class AppModule { }
