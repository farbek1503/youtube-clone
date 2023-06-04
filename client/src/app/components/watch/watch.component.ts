import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { RouterService } from '../../services/router.service';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
	data: any[] = []
	suggestedData: any[] = []
	commentData: any[] = []
	
	@ViewChild(WatchComponent)
	plyr!: WatchComponent;
	
	videoSources: Plyr.Source[] = [
		{
			src: 'bTqVqk7FSmY',
			provider: 'youtube',
		},
	];
	
  constructor(private acRoute: ActivatedRoute, private apiSer: ApiService, private route: Router, private routeSer: RouterService) {}
	
  ngOnInit(): void {
		this.acRoute.params.subscribe(params => {
			const id = params['id'];
			this.apiSer.vidioDetails(id).subscribe((res:any) => {
				console.log(res)
				this.videoSources[0].src = res.data.items[0].id
				this.data = res.data.items
			})
			
			this.apiSer.vidioComment(id).subscribe((res:any) => {
				console.log('comments', res)
				this.commentData = res.data.items
			})
			
			this.apiSer.suggested(id).subscribe((res:any) => {
				console.log(res)
				this.suggestedData = res.data.items
			})
		});
	}
	
	played(event: Plyr.PlyrEvent) {
		console.log('played', event);
	}
	
	watchRouter(id:any){
		this.routeSer.watchRouter(id)
	}
	
	channelRouter(id:any){
		this.routeSer.channelRouter(id)
	}
}
