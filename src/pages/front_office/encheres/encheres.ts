import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncherePage } from '../enchere/enchere';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { TrierPage } from '../../common/trier/trier';
import { LoginPage } from '../../common/login/login';
import { ActivitePage } from '../activite/activite';
import { DetailNotationPage } from '../../common-espace/detail-notation/detail-notation';
import { DevisPage } from '../devis/devis';

@Component({
  selector: 'page-encheres',
  templateUrl: 'encheres.html'
})
export class EncheresPage {
  segment : any;
  encheres = [
    {
      nom: 'Enchere A',
      description: 'Some text Some Text Some Text',
      image:'assets/img/slide_a.png',
      owner: 'user',
      vote: '45',
      date_debut: '49',
      date_fin: '100',
      offre: '49',
      meilleur_offre: '49'
    },
    {
      nom: 'Enchere B',
      description: 'Some text Some Text Some Text',
      image:'assets/img/slide_a.png',
      owner: 'user',
      vote: '5',
      date_debut: '39',
      date_fin: '54',
      offre: '40',
      meilleur_offre: '60'
    },
    {
      nom: 'Enchere C',
      description: 'Some text Some Text Some Text',
      image:'assets/img/slide_a.png',
      owner: 'user',
      vote: '12',
      date_debut: '49',
      date_fin: '89',
      offre: '75',
      meilleur_offre: '100'
    }
	]
	activities = [
    {
      title: 'Produit A',
      description: 'Slider Produit A',
      image:'assets/img/slide_a.png'
    },
    {
      title: 'Produit B',
      description: 'Slider Produit B',
      image:'assets/img/slide_b.png'
    },
    {
      title: 'Produit C',
      description: 'Slider Produit C',
      image:'assets/img/slide_c.png'
    }
  ]

  offres = [
    {
      nom: 'Offre No#',
      description: 'Some text Some Text Some Text',
      image:'assets/img/slide_a.png',
      owner: 'user',
      reponse: '45',
      date_debut: '49',
      date_fin: '100',
      offre: '49',
      meilleur_offre: '49'
    },
    {
      nom: 'Offre No#',
      description: 'Some text Some Text Some Text',
      image:'assets/img/slide_a.png',
      owner: 'user',
      reponse: '5',
      date_debut: '39',
      date_fin: '54',
      offre: '40',
      meilleur_offre: '60'
    },
    {
      nom: 'Offre No#',
      description: 'Some text Some Text Some Text',
      image:'assets/img/slide_a.png',
      owner: 'user',
      reponse: '12',
      date_debut: '49',
      date_fin: '89',
      offre: '75',
      meilleur_offre: '100'
    }
	]
	notations = [
    {
      nom: 'Alpha A',
      emetteur: 'Diop',
      vote_up:'10',
      vote_down: '3',
      average_rating:'4'
    },
    {
      nom: 'Alpha B',
      emetteur: 'Fall',
      vote_up:'40',
      vote_down: '3',
      average_rating:'2.5'
    },
    {
      nom: 'Alpha C',
      emetteur: 'Ba',
      vote_up:'15',
      vote_down: '6',
      average_rating:'4.5'
    }
  ]
  public isSearchBarOpened = false;
  constructor(public navCtrl: NavController) {
	  this.segment="enchere";
  }
  goToEnchere(params){
    if (!params) params = {};
    this.navCtrl.push(EncherePage);
  }goToFiltrer(params){
    //if (!params) params = {};
    //this.navCtrl.push(FiltrerPage);
  }
  goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToEnchereActifs(params){
  }
  goToEnchereOwn(params){
  }

  goToTrier(params){
    if (!params) params = {};
    this.navCtrl.push(TrierPage);
  }
  goToBoutiques(params){
    if (!params) params = {};
    this.navCtrl.push(ActivitePage);
  }
  goToEncheres(params){
    if (!params) params = {};
    this.navCtrl.push(EncheresPage);
  }
  goToDetailNotation(params){
    if (!params) params = {};
    this.navCtrl.push(DetailNotationPage);
  }
  goToDevis(params){
    if (!params) params = {};
    this.navCtrl.push(DevisPage);
  }
}
