import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterService } from '../../services/router.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	data:any[] = []
	
  constructor(private apiSer: ApiService, private routeSer: RouterService, private acRoute: ActivatedRoute) { }
	
  ngOnInit(): void {
		this.acRoute.queryParams.subscribe(params => {
			const q = params['results'];
			this.apiSer.search(q).subscribe((res:any) => {
				if(res.data.items == undefined){
					alert("Today's Limit Is Over, Please Enter Tomorrow")
				}else{
					this.data = res.data.items
				}
			})
		});
	}
	
	watchRouter(id:any){
		if(id.videoId){
			this.routeSer.watchRouter(id.videoId)
		}
		if(id.channelId){
			this.routeSer.channelRouter(id.channelId)
		}
		if(id.playlistId){
			this.apiSer.playlistVidio(id.playlistId).subscribe((res:any) => {
				console.log(res)
				this.routeSer.watchRouter(res.data.items[0].snippet.resourceId.videoId)
			})
		}
	}
	
	channelRouter(id:any){
		this.routeSer.channelRouter(id)
	}
	
}
