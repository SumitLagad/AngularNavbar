import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  // handle the click ouside of the dropdown li menu list
  onClickedOutside(e: Event) {
    // check if outside click is dropdown menu or not
    // if outside menu is not dorpdown then hide this dropdown menu
    if (!(e.srcElement.id === 'navbardrop2' || e.srcElement.id === 'navbardrop1')) {
      // get all elements with dropdown menu
      const elemets = document.querySelectorAll('.dropdown-menu');
      // traverse them and hoide them all
      for (let i = 0; i < elemets.length; i++) {
        (elemets[i] as HTMLElement).style.display = 'none';
      }
    }

  }

}
