import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PrivacyPolicyComponent} from '../privacy-policy/privacy-policy.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title: string = 'Kontakt';

  disableButton: boolean = true;
  triggerLoader: boolean = false;

  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    agreePolicy: new FormControl(false, [Validators.required]),
    message: new FormControl('', [Validators.required]),
  })

  constructor(private dialog: MatDialog,
              private httpClient: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.httpClient.post('https://formspree.io/f/mlezboev', {
      firstname: this.contactForm.controls.firstname.value,
      lastname: this.contactForm.controls.lastname.value,
      email: this.contactForm.controls.email.value,
      message: this.contactForm.controls.message.value
    }, {'headers': headers}).subscribe(() => {
      this.contactForm.reset();
      this.triggerLoader = true;
      this.router.navigate(['contact'])
      window.scrollTo(0, 0)
    })

  }

  public onOpenPrivacyPolicy() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '800px';
    dialogConfig.height = '900px'

    this.dialog.open(PrivacyPolicyComponent, dialogConfig);
  }

  public checkValidity() {
    if (this.contactForm.valid
      && this.contactForm.controls.agreePolicy.value === true) {
      this.disableButton = false;
    }
    else{
      this.disableButton =  true;
    }
  }

  public checkPrivacyAgree(event: any) {
    this.contactForm.controls.agreePolicy.setValue(event.target.checked)
    this.checkValidity();
  }


}
