import { Component, Input, OnInit} from '@angular/core';
import { LoginFormService } from 'src/app/components/login-form/login-form.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // image: string;
  @Input() text: string ='';
  // serieId: string;
  url: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/series/';
  serie: any = {};
  image: string = '';
  property:number = 0;

  constructor(private loginFormService: LoginFormService) {
    // this.serieId = this.elementRef.nativeElement.getAttribute('serieId');
    // this.serieId = "1"
  }

  ngOnInit() {
    this.loginFormService.getInfo(`${this.url}${this.text}`).subscribe((x) => {
      this.serie = x;
      this.image = this.serie['cardImage'];
    });
  }


  increment_property() {
        return this.property++;
  }
   

}