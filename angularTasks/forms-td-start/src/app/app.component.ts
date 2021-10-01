import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('f') sigUpForm:NgForm;
    genders=['female', 'male'];
    answer='';
    defaultQuestion="teacher";

    user={
        username:'',
        email:'',
        secretQuestion:'',
        answer:'',
        gender:''
    }
    submitted=false;
    
  suggestUserName() {
    const suggestedName = 'Superuser';
    
    this.sigUpForm.form.patchValue({
        userData:{
            username:suggestedName,
            email:'taa@taa.com'
        }
    })
  }

  onSubmit(){
    this.submitted=true;
    this.user.username=this.sigUpForm.value.userData.username;
    this.user.email=this.sigUpForm.value.userData.email;
    this.user.secretQuestion=this.sigUpForm.value.secret;
    this.user.answer=this.sigUpForm.value.questionAnswer;
    this.user.gender=this.sigUpForm.value.gender;

    this.sigUpForm.reset();
}

}
