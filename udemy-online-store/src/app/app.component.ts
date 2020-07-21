import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-online-store';

  feature:string = 'recipe';

  updateFeatureSelection(feature: string) {
    this.feature = feature === 'recipe' ? 'recipe' : 'shopping-list';
  }
}
