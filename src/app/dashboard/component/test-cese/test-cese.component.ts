import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { text } from 'express';
import { BookService } from 'src/app/services/books/book.service';


@Component({
  selector: 'app-test-cese',
  templateUrl: './test-cese.component.html',
  styleUrls: ['./test-cese.component.css']
})
export class TestCeseComponent  implements OnInit{
  // export class innerLinksComponent implements OnInit {
    form:FormGroup;
    result;
  
    constructor(
      private fb:FormBuilder
    , private http:BookService

    ) { }
  
    ngOnInit(): void {
      this.creatForm();
    }
  
    creatForm(){
      this.form = this.fb.group(
        {
          title: [null],
          categoryName:[null],
          description: [null],
          outerLinks: this.fb.array([ this.addForm()]),
          innerLinks: this.fb.array([this.addForm()])
          // outerLinks: this.fb.array([this.addForm()])
        }
      );
    }
  
    addouterLinks(){
      return this.fb.group(
        {
          text: [null],
          link: [null],
        }
      )
    }
  
    get outerLinks(){
    return this.form.get("outerLinks") as FormArray;
    }
  
  
    get innerLinks(){
      return this.form.get("innerLinks") as FormArray;
      }
  
    addForm(){
      return this.fb.group(
        {
          text: [null],
          link: [null]
        }
      );
    }
  
    onSave(){
      const data =this.form.getRawValue()
      // console.log()
      this.result = this.form.getRawValue();
      // console.log(typeof(this.result));
      
      this.http.postBook(this.form.getRawValue()).subscribe()
    }
  
    addNewForm(){
      this.innerLinks.push(this.addForm());
    }
    addNewForm2(){
      this.outerLinks.push(this.addForm());
    }
  
    removeForm(i:Required<number>){
      this.outerLinks.removeAt(i);
    }
    removeForm1(i:Required<number>){
      this.innerLinks.removeAt(i);
    }
}
