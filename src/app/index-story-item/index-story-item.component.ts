import {Component, Input, OnInit} from '@angular/core';
import {IndexStory} from '../dataStruct/indexStory';

@Component({
  selector: 'app-index-story-item',
  templateUrl: './index-story-item.component.html',
  styleUrls: ['./index-story-item.component.css']
})
export class IndexStoryItemComponent implements OnInit {
  @Input() item: IndexStory;

  constructor() {
  }

  ngOnInit() {
  }

}
