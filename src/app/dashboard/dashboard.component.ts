import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as $ from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
  




    constructor(private router: Router){}




  ngOnInit() {
   $("nav ul li").click(function(){
  var xcoord = $(this).data("xcoord");
  
  $("nav div").stop().animate({marginLeft:xcoord}, 500);
  $(this).addClass("active");
  $("nav ul li").not(this).removeClass("active");
  
});
 
  }

 

}
