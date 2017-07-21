import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { WpProvider, Post } from '../../providers/wp-provider';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loader: Loading;
  posts: Observable<Post[]>;

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.posts = this.wpProvider.getPosts();
    this.posts.subscribe(_ => {
      this.loader.dismiss();
    });
  }

  getUserImage(id: number) {
    return this.wpProvider.getUserImage(id);
  }

  getUserName(id: number) {
    return this.wpProvider.getUserName(id);
  }

  openPost(post: Post) {
    this.navCtrl.push('PostPage', {post: post});
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }
}
