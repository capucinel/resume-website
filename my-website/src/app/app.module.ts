import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TypingAnimationDirective } from 'angular-typing-animation';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ContactComponent} from './contact/contact.component';
import {ResumeComponent} from './resume/resume.component';
import {AboutComponent} from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MatIconModule } from '@angular/material';

const appRoutes: Routes = [

  { path: '',
    component: HomeComponent,
  },
  { path: 'about',
    component: AboutComponent,
    data: {
      title: 'about'
    }
  },
  { path: 'resume',
  component: ResumeComponent,
    data: {
      title: 'resume'
    }
  },
  { path: 'services',
  component: ServicesComponent,
    data: {
      title: 'services'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    ResumeComponent,
    AboutComponent,
    ServicesComponent,
    TypingAnimationDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      ),
      BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
