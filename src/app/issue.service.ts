import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  addIssue(title: any, responsible: any, description: any, severity: any) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id: any) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  updateIssue(id: any, title: any, responsible: any, description: any, severity: any, status: any) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id: any) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
