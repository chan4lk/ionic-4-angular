import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-acivity-video',
  templateUrl: './acivity-video.page.html',
  styleUrls: ['./acivity-video.page.scss']
})
export class AcivityVideoPage implements OnInit {
  videoURL: string;

  constructor(navParams: NavParams, private modalController: ModalController) {
    this.videoURL = navParams.get('videoURL');
  }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
