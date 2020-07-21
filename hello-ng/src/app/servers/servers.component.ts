import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer :boolean = false;
  serverCreationStatus :string = 'No Server was created';
  serverName :string = '';
  serverCreated :boolean = false;
  servers = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onServerCreation() {
    if (this.serverName !== '') {
      this.serverCreated = true;
      this.serverCreationStatus = "Server with name '" + this.serverName + "' Created successfully.";
      this.servers.push(this.serverName);
    }
  }

  onServerNameUpdate(event: Event) {
    //console.log(event); 

    this.serverName = (<HTMLInputElement>event.target).value;  // casting
  }

  serverDeleteEvent(serverDeletedData: {serverName: string}) {
    alert("In serverssssss : " + serverDeletedData.serverName);

    //this.servers.slice(serverDeletedData.serverName);

  }

}
