import { Component } from '@angular/core';
import { navMenuBar } from '../navdata';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  collapsed = false;
  navData = navMenuBar;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
  closeSidenav(): void {
    this.collapsed = false;
  }
}
