import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ButtonPage } from "../button/button";
import { ListPage } from "../list/list";
import { CardPage} from "../card/card";
import { FabPage } from "../fab/fab";
import { GesturePage } from "../gesture/gesture";
import { GridPage } from "../grid/grid";
import { FormPage } from "../form/form";
import { ToastPage } from "../toast/toast";
import { IconPage } from "../icon/icon";
import { SignUpPage } from "../sign-up/sign-up";
import {LazyTestPage} from "../lazy-test/lazy-test";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigate(page:string):void{
    // this.navCtrl.push('LazyTestPage');

    switch(page){
      case'navToLazyTest':this.navCtrl.push('LazyTestPage');
      break;
      case'listPage':this.navCtrl.push('ListPage');
        break;
      case'buttonPage':this.navCtrl.push('ButtonPage');
        break;
      case'cardPage':this.navCtrl.push('CardPage');
        break;
      case'fabPage':this.navCtrl.push('FabPage');
        break;
      case'gesturePage':this.navCtrl.push('GesturePage');
        break;
      case'gridPage':this.navCtrl.push('GridPage');
        break;
      case'toastPage':this.navCtrl.push('ToastPage');
        break;
      case'formPage':this.navCtrl.push('FormPage');
        break;
      case'iconPage':this.navCtrl.push('IconPage');
        break;
      case'signUpPage':this.navCtrl.push('SignUpPage');
        break;
      default:
        break;
    }
  }




}
