import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input()
  public message: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      const msgParam = params['msg'];
      const msgDecoded = decodeURIComponent(msgParam);
      this.message = msgDecoded;
    });
  }

  ngOnInit() {
  }

}
