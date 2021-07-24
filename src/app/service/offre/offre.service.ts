import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from 'src/app/models/offre';
import { Settings } from 'src/app/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }

  findAllOffres() {
    return this.http.get(Settings.OFFRE_URL + '/');
}



public createOffre(offre: Offre) {
    console.log('Offre service body :', offre);
    return this.http.post(Settings.OFFRE_URL + '/' , offre);
}

deleteById(id: number) {
    return this.http.delete(Settings.OFFRE_URL + '/' + id);
}
public updateOffre(id: number, offre: Offre) {
    console.log('current user:', offre) ;
    return this.http.put(Settings.OFFRE_URL + '/' + id, offre) ;
}


}

