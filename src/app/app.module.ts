import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { ChatDetailPage } from '../pages/chat-detail/chat-detail';
import { ContactPage } from '../pages/contact/contact';
import { DiscoverPage } from '../pages/discover/discover';
import { MePage } from '../pages/me/me';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { PopOverPage } from '../pages/pop-over/pop-over';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DiscoverPage,
    ContactPage,
    ChatPage,
    ChatDetailPage,
    MePage,
    TabsPage,
    SearchPage,
    PopOverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
        mode:'ios',
        backButtonText: '返回',
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoverPage,
    ContactPage,
    ChatPage,
    ChatDetailPage,
    MePage,
    TabsPage,
    SearchPage,
    PopOverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
