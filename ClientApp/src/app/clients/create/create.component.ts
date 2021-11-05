import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';

import { ClientService } from "../client.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm;
  public filterDateFrom: Date;
  clients: Client[] = [];

  constructor(
    public ClientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      Noms: ['', Validators.required],
      Prenoms: ['', Validators.required],
      Sexe: ['', Validators.required],
      Adresse: ['', Validators.required],
      Description: [''],
      DateEnrollement: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ClientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

  onSubmit(formData) {
    this.ClientService.createClient(formData.value).subscribe(res => {
      this.router.navigateByUrl('clients/list');
    });
  }
}
