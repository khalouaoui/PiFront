import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserService } from '../service/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OffreService } from '../service/offre/offre.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public userForm: FormGroup ;
    constructor(public userService: OffreService,
        public formBuilder: FormBuilder,
        public router: Router ) {}

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            dateDepart: ['', [Validators.required]] ,
            dateRetour: ['', [Validators.required]],
            lieuDepart: ['', [Validators.required]],
            lieuArrivee: ['', [Validators.required]],
            nbPlaces: ['', [Validators.required]],
            disponibiliteOffre: ['', [Validators.required]]

        });
    }
    onSubmit() {
        if (this.userForm.valid) {
            const body = {
             dateDepart: this.userForm.value.dateDepart,
             dateRetour: this.userForm.value.dateRetour,
             lieuDepart: this.userForm.value.lieuDepart,
             lieuArrivee: this.userForm.value.lieuArrivee,
             nbPlaces: this.userForm.value.nbPlaces,
             disponibiliteOffre: this.userForm.value.disponibiliteOffre
            };
        this.userService.createOffre(body).subscribe((data: any) => {
            console.log("submit value:",data) ;
            this.router.navigate(['/offers']) ;
        });
        } else {
            alert('forme non valide!!!');
        }
    }
    
}
