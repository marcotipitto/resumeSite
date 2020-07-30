import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Marco Tipitto";
  contact: boolean;
  collapsible: boolean;
  collapsibleHeader: string = "+\tList of Skills and Technologies";


  downloadResume() {
    window.open('../assets/Resume2020.pdf', '_blank')
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/marco-tipitto-cerruti-4a8ab643/', '_blank')
  }

  contactEmail() {
    window.location.href = "mailto:marco_tipitto@hotmail.com?subject=Subject&body=Type%20your%20message";
  }

  toggleAccordian() {
    if (this.collapsible) {
      this.collapsibleHeader = "-\tList of Skills and Technologies"
      return {
        'collapsibleActive': true
      }
    } else {
      this.collapsibleHeader = "+\tList of Skills and Technologies"
      return {
        'collapsibleInactive': true
      }
    }
  }

  contactDialog() {
    console.log('click')
    if (this.contact) {
      return {
        'modalActive': true
      }
    } else {
      return {
        'modalInactive': true
      }
    }
  }
}
