import { Component, OnInit } from '@angular/core';
import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: Client[] = [] ;

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

  deleteClient(id) {
    this.clientService.deleteClient(id).subscribe(res => {
      this.clients = this.clients.filter(item => item.Id !== id);
    });
  }

}
