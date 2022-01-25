import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AndroidFullScreen } from '@awesome-cordova-plugins/android-full-screen/ngx';



@Component({
	selector: 'app-splashscreen',
	templateUrl: './splashscreen.page.html',
	styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

	constructor(
    public router: Router,
    // private androidFullScreen: AndroidFullScreen
  ) {}

	ngOnInit() {

    // this.androidFullScreen.isImmersiveModeSupported()
    //   .then(() => console.log('Immersive mode supported'))
    //   .catch(err => console.log(err));

		setTimeout(() => {
			this.router.navigateByUrl('/home');
		}, 2500);

	}

}
