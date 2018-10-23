import { DetailServicePage } from './..//detail-service/detail-service';
import { ServiceCreatePage } from './../service-create/service-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { ServiceProvider } from '../../../../providers/msmagasindomains/service/service.provider';
import { Service } from '../../../../models/msmagasindomains/service/service.model';
import { LoginPage } from '../../../common/login/login';
import { TrierPage } from '../../../common/trier/trier';
import { FiltrerPage } from '../../../common/filtrer/filtrer';
import { OperationCreatePage } from '../../operation/operation-create/operation-create';
import { RoleCreatePage } from '../../role/role-create/role-create';
import { ActiviteCreatePage } from '../../activite/activite-create/activite-create';
import { DomaineCreatePage } from '../../domaine/domaine-create/domaine-create';
import { CompteCreatePage } from '../../compte/compte-create/compte-create';
import { EnchereCreatePage } from '../../enchere/enchere-create/enchere-create';
import { OffreCreatePage } from '../../offre/offre-create/offre-create';
import { ProduitCreatePage } from '../../produit/produit-create/produit-create';
import { CategorieCreatePage } from '../../categorie/categorie-create/categorie-create';
import { CreateBoutiquePage } from '../../boutique/create-boutique/create-boutique';
import { ProduitListPage } from '../../produit/produit-list/produit-list';
import { ListMagasinPage } from '../../magasin/list-magasin/list-magasin';
import { ListBoutiquePage } from '../../boutique/list-boutique/list-boutique';
import { CreateMagasinPage } from '../../magasin/create-magasin/create-magasin';

/**
 * Generated class for the ServiceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-service-list',
  templateUrl: 'service-list.html',
})
export class ServiceListPage {

  public isSearchBarOpened = false;
  services : any;
  service : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProvider: ServiceProvider) {
    
   
    this.serviceProvider.getServiceList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(services => {
      this.services = services;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceListPage');
  }

  addNewService() {
    this.navCtrl.push(ServiceCreatePage);
  }

  editService(p: Service) {
    this.navCtrl.push(DetailServicePage,{prod:p});
  }

  updateService(isActive: boolean) {
    this.serviceProvider.updateService(this.service.key, { active: isActive });
  }

  deleteService(key: string) {
    this.serviceProvider.deleteService(key);
    this.navCtrl.push(ServiceListPage);
  } 
  goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
  goToFiltrer(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrerPage);
  }
  goToCreerOperation(params){
    if (!params) params = {};
    this.navCtrl.push(OperationCreatePage);
  }goToCreerRole(params){
    if (!params) params = {};
    this.navCtrl.push(RoleCreatePage);
  }goToCreerActivit(params){
    if (!params) params = {};
    this.navCtrl.push(ActiviteCreatePage);
  }goToCreerDomaine(params){
    if (!params) params = {};
    this.navCtrl.push(DomaineCreatePage);
  }goToCreerCompte(params){
    if (!params) params = {};
    this.navCtrl.push(CompteCreatePage);
  }goToCreerMagasin(params){
    if (!params) params = {};
    this.navCtrl.push(CreateMagasinPage);
  }goToCreerBoutique(params){
    if (!params) params = {};
    this.navCtrl.push(CreateBoutiquePage);
  }goToCreerProduit(params){
    if (!params) params = {};
    this.navCtrl.push(ProduitCreatePage);
  }goToCreerService(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceCreatePage);
  }goToCreerCategorie(params){
    if (!params) params = {};
    this.navCtrl.push(CategorieCreatePage);
  }
  goToCreerOffre(params){
    if (!params) params = {};
    this.navCtrl.push(OffreCreatePage);
  }goToCreerEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(EnchereCreatePage);
  }
  onSearch(event)
  {
	console.log(event.target.value);
  }
   goToListeBoutique(params){
    if (!params) params = {};
    this.navCtrl.push(ListBoutiquePage);
  }
  goToListeMagasin(params){
    if (!params) params = {};
    this.navCtrl.push(ListMagasinPage);
  }
  goToListeProduit(params){
    if (!params) params = {};
    this.navCtrl.push(ProduitListPage);
  }
  goToListeService(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceListPage);
  }
}
