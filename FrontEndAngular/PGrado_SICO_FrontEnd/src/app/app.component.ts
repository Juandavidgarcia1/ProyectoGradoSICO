import { Component,OnInit} from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sistema de control recibo y despacho de hardware';
  constructor(public loginService: AuthenticationService) { }

  ngOnInit() {

  }
}
