import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; // 初始值為關閉

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
