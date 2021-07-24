import { Injectable } from '@angular/core';



import {HttpClient} from '@angular/common/http';
import {Settings} from '../../settings/settings';
import {SoftSkill} from '../../models/SoftSkill';


@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  constructor(private http: HttpClient) { }

  findAllSkills() {
    return this.http.get(Settings.SOFT_URL + '/');
  }
  createSoftSkill(id: number, soft: any) {
    return this.http.post(Settings.SOFT_URL + '/' + id, soft) ;
  }
  getSkills(id: number) {
     return this.http.get(Settings.SOFT_URL + 'all' + id) ;
  }



  public findAllSoftSkill() {
      return this.http.get(Settings.APP_URL + '/');
  }

  

  public findAllUsersSkills(id: number) {
      return this.http.get(Settings.APP_URL + '/all' + id);
  }

}
