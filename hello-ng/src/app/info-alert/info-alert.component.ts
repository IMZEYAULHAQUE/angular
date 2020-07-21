import { Component, OnInit, Input } from "@angular/core";

@Component ( {
    selector: 'app-info-alert',
    templateUrl: './info-alert.component.html',
    styleUrls: ['./info-alert.component.css']
})
export class InfoAlertComponent implements OnInit {

    @Input() infoMessage :string = 'Sample Info Message';

    constructor() { }

    ngOnInit(): void {
    }

}