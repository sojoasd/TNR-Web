import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OfficeWebsite';

  // data = [1,2,3];

  ngOnDestroy() { 
    console.log(456);
  }

  RemoveItem(index) {
    // this.data.splice(index,1);
  }

}
