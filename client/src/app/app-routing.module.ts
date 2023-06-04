import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WatchComponent } from './components/watch/watch.component';
import { HomeComponent } from './components/home/home.component';
import { ChannelComponent } from './components/channel/channel.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
	// { path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '', component: HomeComponent },
	{ path: 'watch/:id', component: WatchComponent },
	{ path: 'channel/:id', component: ChannelComponent },
	{ path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
