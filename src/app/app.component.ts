//import { Component } from '@angular/core';
import { Component,OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Headers, Http } from '@angular/http';
import { VenueService } from "app/services/venue.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var check: any;
declare var expand: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent {
//  title = 'app';
//}
export class AppComponent {




    title = 'app works!';


    venues;


    constructor(private venueService: VenueService,private router: ActivatedRoute) {
    }

    ngOnInit() {
        //this.venueService.getVenues().subscribe(p=>this.venues = p);
        this.venues = this.venueService.getVenues();
    }

    is_active(): boolean {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {

            return false;
        }
    }

    check1(value: any){
        check(value);
    }

    expand()
    {
        expand();
    }
}