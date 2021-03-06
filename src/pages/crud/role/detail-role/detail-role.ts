import { RoleListPage } from './../role-list/role-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoleEditPage } from '../role-edit/role-edit';
import { RoleProvider } from '../../../../providers/user/role/role.provider';
/**
 * Generated class for the DetailRolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-role',
  templateUrl: 'detail-role.html',
})
export class DetailRolePage {
  role: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public roleProvider: RoleProvider) {
    this.role = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad RoleEditPage');
  }

  updateRole(key:string, isActive: boolean) {
    this.roleProvider.updateRole(key, { active: isActive });
  }
 
  deleteRole(key:string) {
    this.roleProvider.deleteRole(key);
    this.navCtrl.push(RoleListPage);
  }

  editRole()
  {
    this.navCtrl.push(RoleEditPage, {prod :  this.role});
  }
}
