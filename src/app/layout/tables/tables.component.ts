import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/models/user';
import { error } from 'util';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    public users: any ;
    public id: number;
    public filterData: any;
    public userForm: FormGroup ;
    public closeResult = '';

    constructor(private router: Router , private userService: UserService,private formBuilder: FormBuilder,private modalService: NgbModal) {}


    ngOnInit() {
        this.userForm = this.formBuilder.group({
            nom: ['', [Validators.required]] ,
            prenom: ['', [Validators.required]],
            mail: ['', [Validators.required]],
            password: ['', [Validators.required]],
            equipe: ['', [Validators.required]],
            fonction: ['', [Validators.required]]

        });

        this.getUsers();
        setTimeout(() => {
            this.search(this.users);
        }, 1000);

    }

    public getUsers() {

         this.userService.findAllUsers()
         .subscribe(data => {
             console.log(data);

          this.users = data ;
          //console.log('-------' + this.users[0].softSkills) ;
         });
        }

    createUsers(user: User) {
        this.userService.createUser(user)
            .subscribe((data) => {
                console.log('user created successfully');
                location.reload();
            });
    }

    deleteUser(id: number) {
        this.userService.deleteById(id)
        .subscribe((data) => {
          console.log('user deleted successfully! ') ;
          location.reload() ;

        });
    }
    soft(num: number) {
        localStorage.setItem('id', num.toString() )  ;
        console.log(localStorage.getItem('id'))  ;
        this.router.navigate(['/soft-skill']);
    }

    search(term: string) {
        console.log("executed")
        if(!term) {
            this.getUsers();
        } else {
          this.filterData = this.users.filter(x => 
             x.prenom.trim().toLowerCase().includes(term.trim().toLowerCase())
          );
          this.users = this.filterData;
        }
        
      }

      
    

    update(id : number) {
        if (this.userForm.valid) {
            const body = {
             nom: this.userForm.value.nom,
             prenom: this.userForm.value.prenom,
             mail: this.userForm.value.mail,
             password: this.userForm.value.password,
             fonction: this.userForm.value.fonction,
             equipe: this.userForm.value.equipe
            };
        this.userService.updateUser(id,body).subscribe((data: any) => {
            console.log("submit value:",data) ;
            location.reload();
            //this.router.navigate(['/tables']) ;
        });
        } else {
            alert('forme non valide!!!');
        }
    }

    open(content, id) {
        this.id = id;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
      }
}
