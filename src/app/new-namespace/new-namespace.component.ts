import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import * as io from "socket.io-client";

import { TeamService } from "../services/team.service";

@Component({
  selector: 'new-namespace',
  templateUrl: './new-namespace.component.html',
  styleUrls: ['./new-namespace.component.css']
})
export class NewNamespaceComponent {
  socketNamespace: string = '';
  constructor(private httpClient: HttpClient, private router: Router,
    private teamService: TeamService) {
    
  }
  
  createNewNamespace () {
    this.httpClient.get('https://still-tor-51442.herokuapp.com/namespace?' + 'name=' + this.socketNamespace)
      .subscribe((res) => {
        console.log(res);
        this.teamService.isAdmin = true;
        this.router.navigate(['/team/'+this.socketNamespace]);
      }, (err)=>{
        console.log(err);
      });
  }
}
