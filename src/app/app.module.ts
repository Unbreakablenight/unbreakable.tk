import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SpinnerComponent } from './utils/spinner/spinner.component';
import { WavesComponent } from './utils/waves/waves.component';
import { DocsComponent } from './docs/docs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { RedirectComponent1 } from './redirects/first/first.component';
import { RedirectComponent2 } from './redirects/subscribe/subscribe.component';
import { DesignsComponent } from "./designs-page/designs-page.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    NavbarComponent,
    SpinnerComponent,
    WavesComponent,
    DocsComponent,
    ContactUsComponent,
    TeamComponent,
    RedirectComponent1,
    RedirectComponent2,
    DesignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importing from App-routing.module.ts
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
