import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  totalCount = [
    { totalRecords: 89935, title: 'Sales', icon: 'point_of_sale', rate: 10, ratio: 1.2 },
    { totalRecords: 1250, title: 'Orders', icon: 'local_mall', rate: 3.1, ratio: 3.2 },
    { totalRecords: 8935, title: 'Visitor', icon: 'person', rate: 1, ratio: 1.5 },
    { totalRecords: 1235, title: 'Customers', icon: 'groups', rate: 13, ratio: 4.2 },

  ]
  tabId = '#tab1';
  tabIdcat = '#tab1';
  onTabClickcat(tabId: string) {
    this.tabIdcat = tabId
    this.active(tabId)
  }

  onTabClick(tabId: string) {
    this.tabId = tabId
    this.active(tabId)
  }

  active(tabId) {
    const activeElements = document.querySelectorAll('.active');
    activeElements.forEach(element => {
      element.classList.remove('active');
    });

    const clickedTab = document.querySelector(`a[href="${tabId}"]`);
    if (clickedTab) {
      clickedTab.classList.add('active');
    }

    const tabContent = document.querySelector(tabId);
    if (tabContent) {
      tabContent.classList.add('active');
    }
  }

}