import {Component} from '@angular/core';
import {IonButton, IonContent, IonHeader, IonTitle, IonToolbar, Platform,} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';

import {InAppBrowser} from '@capgo/inappbrowser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab1Page {

  private url = 'https://show-picker.glitch.me/demo.html';

  constructor(private readonly plateform: Platform) {
  }

  openWebView() {

    if (this.plateform.is('hybrid')) {
      // do something
      console.log('openWebView')
      InAppBrowser.openWebView({url: this.url});
    } else {
      this.openForWebApp();
    }
  }

  open() {
    if (this.plateform.is('hybrid')) {
      // do something
      console.log('open')
      InAppBrowser.open({url: this.url});
    } else {
      this.openForWebApp();
    }
  }

  openForWebApp() {
    console.log('openForWebApp')
    window.location.href = this.url;
  }
}
