import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-network-link',
  templateUrl: './social-network-link.component.html',
  styleUrls: ['./social-network-link.component.css']
})
export class SocialNetworkLinkComponent implements OnInit {

  @Input() name: string;

  @Input() link: string = '#';

  constructor() { }

  ngOnInit(): void {
  }

}
