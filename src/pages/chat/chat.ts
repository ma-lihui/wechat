import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import { SearchPage} from '../search/search'
import { PopOverPage } from '../pop-over/pop-over'
import { ChatDetailPage } from '../chat-detail/chat-detail'
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popoverCtrl: PopoverController ) {

  }
  //打开搜索窗
  openSeachModal(){
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  //打开悬浮菜单
  presentPopover() {
    let popover = this.popoverCtrl.create(PopOverPage,{},{cssClass:'pop-menu'});
    popover.present();
  }
  //跳转聊天明细
  openDetailPage() {
    this.navCtrl.push(ChatDetailPage,{});
  }
}
