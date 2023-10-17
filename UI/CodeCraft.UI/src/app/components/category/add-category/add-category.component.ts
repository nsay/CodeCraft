import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnDestroy {

    category: AddCategoryRequest;
    private categorySubscription?: Subscription;
    
    constructor(private categoryService: CategoryService, private router: Router) {
        this.category = {
            name: '',
            urlHandle: '' 
        }
    }

    ngOnDestroy(): void {
        this.categorySubscription?.unsubscribe();
    }
    
    submitForm(){
        this.categorySubscription = this.categoryService.addCategory(this.category).subscribe({
            next: (response) => {
                this.router.navigateByUrl('/admin/categories');
            }
        })
    }
}
