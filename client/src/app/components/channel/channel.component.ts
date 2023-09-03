import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
	channelDetails: any[] = []
	channelVidio: any[] = []
	
  constructor(private acRoute: ActivatedRoute, private apiSer: ApiService, private routeSer: RouterService) { }
	
  ngOnInit(): void {
		this.acRoute.params.subscribe(params => {
			const id = params['id'];
			this.apiSer.channelDetails(id).subscribe((res:any) => {
          if(error.code === "ERR_BAD_REQUEST"){
              alert("Today's Limit Is Over, Please Enter Tomorrow")
              return
          }
					this.channelDetails = res.data.items
			})
			this.apiSer.channelVidio(id).subscribe((res:any) => {
          if(error.code === "ERR_BAD_REQUEST"){
              alert("Today's Limit Is Over, Please Enter Tomorrow")
              return
          }
					this.channelVidio = res.data.items
			})
		});
	}
	
	watchRouter(id:any){
		console.log(id)
		if(id.videoId){
			this.routeSer.watchRouter(id.videoId)
		}
		if(id.channelId){
			this.routeSer.channelRouter(id.channelId)
		}
	}
	
}
