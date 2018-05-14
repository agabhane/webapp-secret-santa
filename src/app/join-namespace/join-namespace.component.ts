import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from "@angular/router";

import * as io from "socket.io-client";
import 'rxjs/add/operator/switchMap';

import { TeamService } from "../services/team.service";

@Component({
  selector: 'join-namespace',
  templateUrl: './join-namespace.component.html',
  styleUrls: ['./join-namespace.component.css']
})
export class JoinNamespaceComponent {
  teamName: string = '';
  name: string;
  socket: any;
  members: Array<any> = [];
  joined: boolean = false;
  isAdmin: boolean = false;
  giftFor: string;
  constructor(private activeRoute: ActivatedRoute, private teamService: TeamService) {
    this.isAdmin = this.teamService.isAdmin;
    this.activeRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.teamName = params.get('teamname');
      });
  }

  join() {
    this.socket = io('https://still-tor-51442.herokuapp.com/' + this.teamName);
    this.socket.emit('name', { name: this.name, isAdmin: this.isAdmin });
    this.joined = true;
    if (this.isAdmin) { 
      this.socket.on('member_added', (msg)=>{
        this.members = msg;
      });
    }
    this.socket.on('gift', (name)=>{
      this.giftFor = name;
    });
  }

  generate() {
    this.socket.emit('generate');
  }
}
