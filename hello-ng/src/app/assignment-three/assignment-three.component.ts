import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styles: [`
    .whiteLabel: {
      color: white;
    }
  `]
})
export class AssignmentThreeComponent implements OnInit {

  showDetails :boolean = false;
  buttonLogs = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowDetails() {
    this.showDetails = !this.showDetails;
    this.buttonLogs.push(new Date());
  }

}
