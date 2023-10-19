import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.less']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

    id: string | null = null;
    private idSubscription?: Subscription;
    category?: Category;

    constructor(private route: ActivatedRoute, private categoryService: CategoryService){}

    //get the id from the URL ex: http://localhost:4200/admin/categories/{id}
    ngOnInit(): void {
        this.idSubscription = this.route.paramMap.subscribe({
            next: (params) => {
                this.id = params.get('id');

                //get data of this ID from API
                if(this.id){
                    this.categoryService.getCategoryById(this.id).subscribe({
                        next: (response) => {
                            this.category = response;
                        }
                    })
                }
            }
        });
    }

    ngOnDestroy(): void {
        this.idSubscription?.unsubscribe();
    }

    submitForm(): void {
        
    }
}
