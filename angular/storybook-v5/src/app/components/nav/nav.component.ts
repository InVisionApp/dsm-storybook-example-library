import { Component, Input, OnInit } from '@angular/core';

/**
 * The Nav is used for site navigation.
 */
@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeTab;

  /**
   * An array of the items to be displayed in the Nav.
   */
  @Input()
  tabs: Array<object>;

  /**
   * The active tab Id to initialize the Nav component
   */
  @Input()
  initialActiveTab: string;

  ngOnInit() {
    this.activeTab = this.initialActiveTab;
  }

  setActiveTab(tab) {
    this.activeTab = tab.id;
  }

  trackById(index, tab) {
    return tab.id;
  }
}
