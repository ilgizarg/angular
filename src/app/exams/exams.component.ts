import {Component, Input, OnInit} from '@angular/core';
import {ExamsService} from "../exams.service";
import {UserService} from "../user.service";
import {Sort} from '@angular/material';


@Component({
    selector: 'app-user',
    templateUrl: './exams.component.html',
    styleUrls:['./exams.component.css'],
    providers: [ExamsService]
})

export class ExamsComponent implements OnInit{
   // @Input() exams;
    public loading = false;

    public exams = [];
    sortedData;

    constructor (private examsService: ExamsService) {
        this.loading = true;
        this.examsService.getExams().subscribe(exams => {
            this.exams = exams;
            this.sortedData = this.exams;
            this.loading = false;
        },err => {
            this.loading = false;
        });
    }

    ngOnInit() {

    }

    sortData(sort: Sort) {
        const data = this.exams.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            let isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'discipline': return compare(a.discipline, b.discipline, isAsc);
                case 'semester': return compare(a.semester, b.semester, isAsc);
                case 'activitytype': return compare(a.activitytype, b.activitytype, isAsc);
                case 'familyName': return compare(a.familyName, b.familyName, isAsc);
                default: return 0;
            }
        });
    }

}

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


