import { Component } from '@angular/core';

import { DiscoverPage } from '../discover/discover';
import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';
import { MePage } from '../me/me';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chatTab = ChatPage;
  contactTab = ContactPage;
  discoverTab = DiscoverPage;
  meTab = MePage;

  constructor() {

  }
}
