import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
	
  constructor(private route: Router) { }
	
	watchRouter(id:any){
		this.route.navigate(['/watch', id])
	}
	
	channelRouter(id:any){
		this.route.navigate(['/channel', id])
	}
}
