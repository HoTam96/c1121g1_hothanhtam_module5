import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-cards',
  templateUrl: './name-cards.component.html',
  styleUrls: ['./name-cards.component.css']
})
export class NameCardsComponent implements OnInit {
  @Input() cardName: string = 'ô gái nè'
  @Input() email: string = 'gai@gmail.com'
  @Input() phone: string='09990009876'

  constructor() {
  }
  ngOnInit(): void {
  }

}
