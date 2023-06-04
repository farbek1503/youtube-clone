import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
  constructor(private http: HttpClient) { }
	
	baseUrl:string = 'http://localhost:3000'
	
	getRandom(){
		return this.http.get(`${this.baseUrl}/random`)
	}
	
	search(q:any){
		return this.http.get(`${this.baseUrl}/search/${q}`)
	}
	
	suggested(id:any){
		return this.http.get(`${this.baseUrl}/suggested/${id}`)
	}
	
	vidioComment(id:any){
		return this.http.get(`${this.baseUrl}/vidio-comment/${id}`)
	}
	
	vidioDetails(id:any){
		return this.http.get(`${this.baseUrl}/vidio-details/${id}`)
	}
	
	channelDetails(id:any){
		return this.http.get(`${this.baseUrl}/channel-details/${id}`)
	}
	
	channelVidio(id:any){
		return this.http.get(`${this.baseUrl}/channel-vidio/${id}`)
	}
	
	playlistVidio(id:any){
		return this.http.get(`${this.baseUrl}/playlist-video/${id}`)
	}
}
