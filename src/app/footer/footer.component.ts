import { Component } from '@angular/core';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { ItemserviceService } from '../itemservice.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  emailIcon = faTelegram;
  constructor(private itemService: ItemserviceService) { }
  submitEmail(data: any) {
    this.itemService.setEmail(data).subscribe(() => {
      
    })
  }
}
