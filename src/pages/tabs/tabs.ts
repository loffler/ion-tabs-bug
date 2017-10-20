import {Component, EventEmitter, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {Tabs} from "ionic-angular";
import {NumberProvider} from "../../providers/dummy.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit, OnDestroy {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  numSub: Subscription;

  @ViewChild('phoneTabs') tabRef: Tabs;

  constructor(private numberProvider : NumberProvider) {
  }

  ngOnInit() {
    console.log('TabsPage ngOnInit');

    this.numSub = this.numberProvider.getEmitter().subscribe(x => {
      console.log('Got number ', x, ', switching to tab About');
      this.tabRef.select(1);
    })
  }

  ngOnDestroy() {
    console.log('TabsPage ngOnDestroy');

    // Everything works when uncommented
    // this.numSub.unsubscribe();
  }


  switchTab() {
    this.tabRef.select(1);
  }

  getNumber() {
    this.numberProvider.getNumber();
  }


}
