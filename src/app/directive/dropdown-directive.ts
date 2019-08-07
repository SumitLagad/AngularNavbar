import { Directive, ElementRef, HostListener } from '@angular/core';



@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective {

    constructor(private el: ElementRef) {
    }


    // Attach hostlistner for click event where directive placed
    @HostListener('click') onClickNavMenu() {
        // check all dropdown menu are open or not
        // if dropdown menus are open then close it
        for (let i = 0; i < this.el.nativeElement.parentElement.childElementCount; i++) {
            // check where menu has dropdown list or not
            if (this.el.nativeElement.parentElement.children[i].childElementCount > 1) {
                // hide dropdown of menu which is open
                this.el.nativeElement.parentElement.children[i].lastChild.style.display = 'none';
            }
        }
        // disply the dropdown of the current selected menu
        this.el.nativeElement.lastChild.style.display = 'block';
    }

}
