import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-book',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{2,} [a-zA-Z]{2,}$/)]],
      imageUrl: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1800), Validators.max(new Date().getFullYear())]],
      pages: ['', [Validators.required, Validators.min(10), Validators.max(500)]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      genre: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get formControls() {
    return this.bookForm.controls;
  }

  get isTitleInvalid(): boolean {
    if (this.formControls?.['title'].invalid &&
      (this.formControls?.['title'].dirty ||
        this.formControls?.['title'].touched)) {

      return true;
    }
    return false;
  }

  get isAuthorInvalid(): boolean {
    if (this.formControls?.['author'].invalid &&
      (this.formControls?.['author'].dirty ||
        this.formControls?.['author'].touched)) {

      return true;
    }
    return false;
  }

  get isImageUrlInvalid(): boolean {
    if (this.formControls?.['imageUrl'].invalid &&
      (this.formControls?.['imageUrl'].dirty ||
        this.formControls?.['imageUrl'].touched)) {

      return true;
    }
    return false;
  }

  get isYearInvalid(): boolean {
    if (this.formControls?.['year'].invalid &&
      (this.formControls?.['year'].dirty ||
        this.formControls?.['year'].touched)) {

      return true;
    }
    return false;
  }

  get isPagesNumInvalid(): boolean {
    if (this.formControls?.['pages'].invalid &&
      (this.formControls?.['pages'].dirty ||
        this.formControls?.['pages'].touched)) {

      return true;
    }
    return false;
  }

  get isGenreInvalid(): boolean {
    if (this.formControls?.['genre'].invalid &&
      (this.formControls?.['genre'].dirty ||
        this.formControls?.['genre'].touched)) {

      return true;
    }
    return false;
  }

  get isDescriptionInvalid(): boolean {
    if (this.formControls?.['description'].invalid &&
      (this.formControls?.['description'].dirty ||
        this.formControls?.['description'].touched)) {

      return true;
    }
    return false;
  }

  get titleErrorMessage() {
    if (this.formControls?.['title']?.errors?.['required']) {
      return "Title is required!"
    }

    if (this.formControls?.['title']?.errors?.['minlength']) {
      return "Title must be at least 3 characters long!"
    }
    return ""
  }

  get authorErrorMessage() {
    if (this.formControls?.['author']?.errors?.['required']) {
      return "Title is required!"
    }

    if (this.formControls?.['author']?.errors?.['pattern']) {
      return "Author name must contain one empty space and is invalid!"
    }
    return "";
  }

  get imageUrlErrorMessage() {
    if (this.formControls?.['imageUrl']?.errors?.['required']) {
      return "ImageUrl is required!"
    }
    return "";
  }

  get yearErrorMessage() {
    if (this.formControls?.['year']?.errors?.['required']) {
      return "Year is required!";
    }

    if (this.formControls?.['year']?.errors?.['min']) {
      return "Year must be 1800 or later!";
    }

    if (this.formControls?.['year']?.errors?.['max']) {
      return "Year cannot be in the future";
    }
    return "";
  }

  get pagesErrorMessage() {
    if (this.formControls?.['pages']?.errors?.['required']) {
      return "Number of pages is required!";
    }

    if (this.formControls?.['pages']?.errors?.['min']) {
      return "The book must have at least 10 pages!";
    }

    if (this.formControls?.['pages']?.errors?.['max']) {
      return "The book must have 500 pages or less.";
    }
    return "";
  }

  get genreErrorMessage() {
    if (this.formControls?.['genre']?.errors?.['required']) {
      return "Genre is required!";
    }

    if (this.formControls?.['genre']?.errors?.['minlength']) {
      return "Genre must be at least 5 characters long!"
    }

    return "";
  }

  get descriptionErrorMessage() {
    if (this.formControls?.['description']?.errors?.['required']) {
      return "Book description is required!";
    }

    if (this.formControls?.['description']?.errors?.['minlength']) {
      return "Book description must be at least 15 characters long!"
    }
    return "";
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      console.log('Form is valid!', this.bookForm.value);
    } else {
      console.log('Form is invalid.');
      this.bookForm.markAllAsTouched();
    }
  }
}
