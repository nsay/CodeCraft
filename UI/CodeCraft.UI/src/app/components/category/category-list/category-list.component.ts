import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit{

    allCategories$?: Observable<Category[]>;

    constructor(private categoryService: CategoryService){}

    ngOnInit(): void {
        this.allCategories$ = this.categoryService.getAllCategories();
    }
}
