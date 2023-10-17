import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnDestroy {

    category: AddCategoryRequest;
    private categorySubscription?: Subscription;
    
    constructor(private categoryService: CategoryService) {
        this.category = {
            name: 'Enter Name',
            urlHandle: '' 
        }
    }

    ngOnDestroy(): void {
        this.categorySubscription?.unsubscribe();
    }
    
    submitForm(){
        this.categorySubscription = this.categoryService.addCategory(this.category).subscribe({
            next: (response) => {
                console.log('success!!!');
            }
        })
    }
}
