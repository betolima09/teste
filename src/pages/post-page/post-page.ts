import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpProvider, Post } from '../../providers/wp-provider';

@IonicPage()
@Component({
  selector: 'page-post-page',
  templateUrl: 'post-page.html',
})
export class PostPage {
  post: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wpProvider: WpProvider) {
    this.post = navParams.get('post');
  }
}
