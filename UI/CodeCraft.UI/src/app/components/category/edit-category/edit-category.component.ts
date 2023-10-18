import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.less']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

    id: string | null = null;
    private idSubscription?: Subscription;

    constructor(private route: ActivatedRoute){

    }

    //get the id from the URL ex: http://localhost:4200/admin/categories/{id}
    ngOnInit(): void {
        this.idSubscription = this.route.paramMap.subscribe({
            next: (params) => {
                this.id = params.get('id');
            }
        });
    }

    ngOnDestroy(): void {
        this.idSubscription?.unsubscribe();
    }
}
