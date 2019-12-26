import { Component, OnInit, Renderer2 } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private render:Renderer2) { }


  toggleCollapse(){
    $(function() {
      $(".toggle").on("click", function() {
          if ($(".item").hasClass("active")) {
              $(".item").removeClass("active");
              $(this).find("a").html("<i class='fa fa-bars'></i>");
          } else {
              $(".item").addClass("active");
              $(this).find("a").html("<i class='fa fa-times'></i>");
          }
      });
  });
  
 }

  ngOnInit() {
    this.toggleCollapse()
  }

}
