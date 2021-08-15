import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
 
    model: any = {};
    responseMessage = null
    constructor(
      private http: HttpClient
    ){}
  
    ngOnInit() {
       }
       onSubmit(name, subject, email, message) {
          const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          this.http.post('https://formspree.io/f/mknkpoga',
            { name: name, _subject: subject, _replyto: email, message: message },)
            .subscribe(
              response => {
                this.responseMessage = "Thank you, I Will Get Back TO You Soon!!"
                console.log(response);
              }, error => {
                console.warn("Please Resend the email")
                console.log({error})
              }
            );
        }  
      
}
