import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

import { WalkthroughPage } from '../pages/walkthrough/walkthrough';


import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';
// import { GoogleMap } from '../components/google-map/google-map';

// import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../pages/google-login/google-login.service';
// import { TwitterLoginService } from '../pages/twitter-login/twitter-login.service';
// import { GoogleMapsService } from '../pages/maps/maps.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';

// Functionalities
// import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
// import { MapsPage } from '../pages/maps/maps';
// import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
// import { GoogleLoginPage } from '../pages/google-login/google-login';
// import { TwitterLoginPage } from '../pages/twitter-login/twitter-login';
// import { ContactCardPage } from '../pages/contact-card/contact-card';
// import { VideoPlaylistPage } from '../pages/video-playlist/video-playlist';

import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';


////////////////////////page////////////////////////
import { LanguageService } from '../providers/language/language.service';
import { TabnavPage } from "../pages/tabnav/tabnav";
import { HomePage } from "../pages/home/home";
import { BookingPage } from '../pages/booking/booking';
import { CostPage } from '../pages/cost/cost';
import { StatusPage } from '../pages/status/status';
import { MorePage } from '../pages/more/more';
import { SettingProfilePage } from '../pages/setting-profile/setting-profile';
import { AddressPickupPage } from '../pages/address-pickup/address-pickup';


//////////////////////component////////////////////
import { HomeDetailComponent } from '../components/home-detail/home-detail';
import { BookingAddressComponent } from '../components/booking-address/booking-address';
import { CostDetailComponent } from '../components/cost-detail/cost-detail';
import { SlideTabsComponent } from '../components/slide-tabs/slide-tabs';
import { AddPickupComponent } from '../components/add-pickup/add-pickup';


/////////////////////providers/////////////////////
import { HomeServiceProvider } from '../pages/home/home.service';
import { BookingServiceProvider } from '../pages/booking/booking.service';
import { CostServiceProvider } from '../pages/cost/cost.service';
import { SettingProfileServiceProvider } from '../pages/setting-profile/setting-profile.service';
import { AddressPickupServiceProvider } from '../pages/address-pickup/address-pickup.service';


export function createTranslateLoader(http: Http) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    WalkthroughPage,
    TabnavPage,
    HomePage,
    BookingPage,
    CostPage,
    StatusPage,
    MorePage,
    SettingProfilePage,
    AddressPickupPage,
    
    

    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    HomeDetailComponent,
    BookingAddressComponent,
    CostDetailComponent,
    SlideTabsComponent,
    AddPickupComponent
    // GoogleMap
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
		TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
      	useFactory: (createTranslateLoader),
        deps: [Http]
		    }
		}),
		VideoPlayerModule,
		ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalkthroughPage,
    TabnavPage,
    HomePage,
    BookingPage,
    CostPage,
    StatusPage,
    MorePage,
    SettingProfilePage,
    AddressPickupPage
  ],
  providers: [
    // GoogleMapsService,
		LanguageService,

	  SplashScreen,
	  StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
		AdMobFree,
		AppRate,
		ImagePicker,
		Crop,
		EmailComposer,
    HomeServiceProvider,
    BookingServiceProvider,
    CostServiceProvider,
    SettingProfileServiceProvider,
    AddressPickupServiceProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
