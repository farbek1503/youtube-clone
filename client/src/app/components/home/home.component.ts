import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
	
  constructor(private apiSer: ApiService, private routeSer: RouterService) {}
	
	ngOnInit(): void {
		this.apiSer.getRandom().subscribe((res:any) => {
			console.log(res.data.items)
			this.data = res.data.items
		})
	}
	
	watchRouter(id:any){
		this.routeSer.watchRouter(id)
	}
}