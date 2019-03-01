import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuService } from '../providers/menu.service';
import { menuInfos } from '../../assets/data/home.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translateX(100%)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translateX(0%)'
        })
      ),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ])
  ]
})

export class MenuComponent implements OnInit {
  @Output() opened = new EventEmitter();
  @Input() visible = true;

  constructor(private menuService: MenuService) {
    menuService.change.subscribe(isOpen => {
      this.visible = isOpen;
    });
   }

  menu = menuInfos;
  iconMenu: string;

  menuState = 'out';

    ngOnInit() {
    // change sidemenu state
    this.menuService.change.subscribe(stateMenu => {
      this.menuState = stateMenu && this.menuState === 'out' ? 'in' : 'out';
    });
  }

  hideNavMobile() {
    this.menuService.toggle();
    this.iconMenu = this.menuService.isOpen ? 'close' : 'menu';
  }
}
