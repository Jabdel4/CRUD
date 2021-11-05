import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  client: Client;

  constructor(
    public clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['clientId'];
    this.clientService.getClient(this.id).subscribe((data: Client) => {
      this.client = data;
    });
  }

}
