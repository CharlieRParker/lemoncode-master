import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-crud',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './crud.html',
  styleUrl: './crud.scss',
})
export class CrudComponent {
  itemForm: FormGroup;
  items: Item[] = [];
  isEditing = false;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      category: ['general']
    });
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const item: Item = this.itemForm.value;
      if (this.isEditing && this.editingIndex !== null) {
        this.items[this.editingIndex] = item;
        this.isEditing = false;
        this.editingIndex = null;
      } else {
        this.items.push(item);
      }
      this.itemForm.reset({ category: 'general' });
    }
  }

  editItem(index: number) {
    this.isEditing = true;
    this.editingIndex = index;
    this.itemForm.patchValue(this.items[index]);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingIndex = null;
    this.itemForm.reset({ category: 'general' });
  }
}
