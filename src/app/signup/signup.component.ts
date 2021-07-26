import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserService } from '../service/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public userForm: FormGroup ;
    constructor(public userService: UserService,
        public formBuilder: FormBuilder,
        public router: Router ) {}

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            nom: ['', [Validators.required]] ,
            prenom: ['', [Validators.required]],
            mail: ['', [Validators.required]],
            password: ['', [Validators.required]],
            equipe: ['', [Validators.required]],
            fonction: ['', [Validators.required]]

        });
    }
    onSubmit() {
        if (this.userForm.valid) {
            const body = {
             nom: this.userForm.value.nom,
             prenom: this.userForm.value.prenom,
             mail: this.userForm.value.mail,
             password: this.userForm.value.password,
             fonction: this.userForm.value.fonction,
             equipe: this.userForm.value.equipe
            };
        this.userService.createUser(body).subscribe((data: any) => {
            console.log("submit value:",data) ;
            this.router.navigate(['/tables']) ;
            location.reload();
        });
        } else {
            alert('forme non valide!!!');
        }
    }
}
