import {Component, OnInit} from '@angular/core';

import {ImgLink} from '../dataStruct/imgLink';
import {IndexStory, indexStoryShow} from '../dataStruct/indexStory';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  selectedTab = 0;
  array = [
    new ImgLink('https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c1.png',
      'https://www.bh3.com/valkyria/mei_c1.html'),
    new ImgLink('https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c2.png',
      'https://www.bh3.com/valkyria/mei_c2.html'),
    new ImgLink('https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c3.png',
      'https://www.bh3.com/valkyria/mei_c3.html'),
    new ImgLink('https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c4.png',
      'https://www.bh3.com/valkyria/mei_c4.html')
  ];
  indexStoryItems = indexStoryShow;

  constructor() {
  }

  ngOnInit() {
  }
}


