import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/service/offre/offre.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  public offers: any ;
  public id: number;
  public filterData: any;
  public closeResult = '';
  public userForm: FormGroup ;
  public matchingForm: FormGroup ;
  public employeeId : any;
  public email : any;


  constructor(private router: Router , private userService: UserService, private offreService: OffreService, private modalService: NgbModal,public formBuilder: FormBuilder) {}


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      dateDepart: ['', [Validators.required]] ,
      dateRetour: ['', [Validators.required]],
      lieuDepart: ['', [Validators.required]],
      lieuArrivee: ['', [Validators.required]],
      nbPlaces: ['', [Validators.required]],
      disponibiliteOffre: ['', [Validators.required]]

  });  
      this.getUsers();
      this.getOffers();
      setTimeout(() => {
        this.search(this.offers);
    }, 1000);

    this.matchingForm = this.formBuilder.group(
      {
       id: ['', Validators.required]
      }
    );
  }

  public getUsers()
  {
    this.userService.findAllUsers().subscribe(
      data => {console.log(data);
               this.employeeId = data;                  }
    );
  }

  public sendInvi() 
  {
    this.email = this.matchingForm.value.id ; 
    this.offreService.sendInvi(this.email).subscribe(
        data => {console.log("mail OK!")}
    );
  }

  public getOffers() {

       this.offreService.findAllOffres()
       .subscribe(data => {
           console.log(data);

        this.offers = data ;
       });
      }

  createOffer(offre: Offre) {
      this.offreService.createOffre(offre)
          .subscribe((data) => {
              console.log('offer created successfully');
              location.reload();
          });
  }

  update(id : number) {
    if (this.userForm.valid) {
        const body = {
         dateDepart: this.userForm.value.dateDepart,
         dateRetour: this.userForm.value.dateRetour,
         lieuDepart: this.userForm.value.lieuDepart,
         lieuArrivee: this.userForm.value.lieuArrivee,
         nbPlaces: this.userForm.value.nbPlaces,
         disponibiliteOffre: this.userForm.value.disponibiliteOffre
        };
    this.offreService.updateOffre(id,body).subscribe((data: any) => {
        console.log("submit value:",data) ;
        location.reload();
        //this.router.navigate(['/offers']) ;
    });
    } else {
        alert('forme non valide!!!');
    }
}

  deleteOffer(id: number) {
      this.offreService.deleteById(id)
      .subscribe((data) => {
        console.log('user deleted successfully! ') ;
        location.reload() ;

      });
  }
  search(term: string) {
    console.log("executed")
    if(!term) {
      this.getOffers();
    } else {
      this.filterData = this.offers.filter(x => 
         x.lieuDepart.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
      this.offers = this.filterData;
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
  
  opens(cont) {
    this.modalService.open(cont, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
