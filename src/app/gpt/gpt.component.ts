import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gpt',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule ],
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.scss'
})
export class GptComponent {

  queryFormGroup!: FormGroup;
  messages = [{
    role: "user",
    content: "you are a usefull assistant."
  }]
  result: any;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }
  ngOnInit() {
    this.queryFormGroup = this.fb.group({ query: '' })
  }

  handleAskGPT() {
    const url = "https://api.openai.com/v1/chat/completions";
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer sk-2")
    const payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    }
    this.httpClient.post(url, payload, { headers: httpHeaders }).subscribe({
      next: (resp) => {
        this.result = resp;
      },
      error: (err) => {

      }
    })
  }

}
