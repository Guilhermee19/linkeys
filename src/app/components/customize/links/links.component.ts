import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { PLATFORM } from '../../../constants/platform';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [MatButtonModule, SharedModule, MatSelectModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent implements OnInit{
  private fb = inject(FormBuilder)

  platforms = PLATFORM

  form_links = this.fb.group({
    name: ['', Validators.required],
    color_bg: ['', Validators.required],
    links: this.fb.array([])  // Inicializa o FormArray para os links
  });
  icon = 'whatsapp';

  ngOnInit(){
    this.addLink();
  }

  get getLinks() {
    return this.form_links.get('links') as FormArray;
  }

  addLink() {
    const linkForm = this.fb.group({
      titulo: ['', Validators.required],
      color_bg: ['', Validators.required],
      color_text: ['', Validators.required],
      platform: ['WHATSAPP', Validators.required],
      url: ['', Validators.required],
      is_active: [true, Validators.required]
    });

    this.getLinks.push(linkForm);  // Adiciona o FormGroup ao FormArray
  }

  removeLink(index: number) {
    this.getLinks.removeAt(index);  // Remove o FormGroup na posição especificada
  }

  setIcon(platform: any){
    const icon = PLATFORM.find(el => el.platform === platform)?.icon;
    if(!icon) return;

    this.icon = icon
  }
}
