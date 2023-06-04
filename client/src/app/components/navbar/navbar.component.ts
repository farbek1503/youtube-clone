import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private route: Router) { }
	
  ngOnInit(): void {
	}
	
	searchFunc(q:any){
		this.route.navigate(['search'], { queryParams: { results: q.value } })
	}
	
	addTheme(){
		window.location.reload()
		if(localStorage.getItem('theme') == 'light'){
			localStorage.setItem('theme', 'dark')
			return
		}else if (localStorage.getItem('theme') == 'dark'){
			localStorage.setItem('theme', 'light')
		}
	}
	
}
