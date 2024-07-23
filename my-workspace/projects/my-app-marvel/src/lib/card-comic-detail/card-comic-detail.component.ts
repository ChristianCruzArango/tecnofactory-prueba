import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app-marvel-lib-card-comic-detail',
  templateUrl: './card-comic-detail.component.html',
  styleUrls: ['./card-comic-detail.component.scss']
})
export class CardComicDetailComponent {

  @Input() isVisible = false;

  closeModal() {
    this.isVisible = false;
  }

}
