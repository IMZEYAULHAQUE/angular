
import { Component, EventEmitter, Output } from '@angular/core';

@Component( {
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent {

    @Output() onServerDelete = new EventEmitter<{serverName: string}>();
    
    serverId: number = 10;
    serverStatus: string = 'online';
    serverName: string = 'Dummy Name';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "offline" : "online";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    onDeleteClick(event) {
        this.onServerDelete.emit({serverName: this.serverName});
    }

}