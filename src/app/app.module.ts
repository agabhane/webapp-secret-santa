import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NewNamespaceComponent } from "./new-namespace/new-namespace.component";
import { JoinNamespaceComponent } from "./join-namespace/join-namespace.component";

import { TeamService } from "./services/team.service";

const appRoutes: Routes = [
  {
    path: 'team/:teamname',
    component: JoinNamespaceComponent
  },
  {
    path: '',
    component: NewNamespaceComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewNamespaceComponent,
    JoinNamespaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  entryComponents: [
    NewNamespaceComponent
  ],
  providers: [
    TeamService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
