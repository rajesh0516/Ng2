/*
import {Injectable} from '@angular/core'
import {Job} from "../job-list/job";
import {Http} from '@angular/http';


@Injectable()

export class JobService{
 private Jobs:Array<Job>;
  constructor(private http:Http){

  }
  getJobs(){
    //return this.http.get("http://localhost:3000/jobs")
    this.Jobs=new Array<Job>();
    let job1=new Job();
    job1.Title="Trainee";
    job1.Description="Angular 2 Developer";
    job1.Experience="2 years";
    job1.Location="Hyderabad";
    job1.Category="Developer";
    job1.Company="NBits Tech";
    job1.Salary="6.5L per anum";
    this.Jobs.push(job1);

    let job2=new Job();
    job2.Title="Engineer";
    job2.Description=" Java Developer";
    job2.Experience="3 years";
    job2.Location="Bangalore";
    job2.Category="Developer";
    job2.Company="InfoBrin Tech";
    job2.Salary="8.5L per anum";
    this.Jobs.push(job2);
    return this.Jobs;
  }
  selectedJobs(){}
}
*/
