import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  client: Client;
  editForm;
  public filterDateFrom: Date;

  constructor(
    public clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      Id: [''],
      Noms: ['', Validators.required],
      Prenoms: ['', Validators.required],
      Sexe: ['', Validators.required],
      Adresse: ['', Validators.required],
      Description: [''],
      DateEnrollement: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.clientService.getClient(this.id).subscribe((data: Client) => {
      this.client = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    this.clientService.updateClient(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('clients/list');
    });
  }
}
