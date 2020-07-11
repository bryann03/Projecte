import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
        AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.scss']
})
export class VariosComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
                                        AfterViewInit, AfterViewChecked, OnDestroy {

  loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }
  ngDoCheck(){}
  ngAfterContentInit(){}
  ngAfterContentChecked(){}
  ngAfterViewInit(){}
  ngAfterViewChecked(){}
  ngOnDestroy(){}

  ejecutar(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
