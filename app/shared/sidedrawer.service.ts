import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SideDrawerService {
    triggerMenu = new EventEmitter<boolean>();
    constructor() {}

    toggleMenu() {
        this.triggerMenu.emit(true);
    }
}