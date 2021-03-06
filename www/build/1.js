webpackJsonp([1],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedPageModule", function() { return RecommendedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommended__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_swiper_swiper_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_imenu_imenu_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_music_card_music_card_module__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecommendedPageModule = (function () {
    function RecommendedPageModule() {
    }
    return RecommendedPageModule;
}());
RecommendedPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recommended__["a" /* RecommendedPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recommended__["a" /* RecommendedPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_swiper_swiper_module__["a" /* SwiperComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_imenu_imenu_module__["a" /* MenuComponentModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_music_card_music_card_module__["a" /* MusicCardComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__recommended__["a" /* RecommendedPage */]
        ]
    })
], RecommendedPageModule);

//# sourceMappingURL=recommended.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_songs_songs__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecommendedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RecommendedPage = (function () {
    function RecommendedPage(songs, navCtrl, navParams) {
        this.songs = songs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.swiperlist = [
            "http://p1.music.126.net/dgtzGyA4-jOxBi4VzR-Puw==/19176582300295372.jpg",
            "http://p1.music.126.net/xZ2eaUPI-kASZAmRDVhnBg==/19130402811918090.jpg",
            "http://p1.music.126.net/BBb-5V7cmeztaU8f9ruQRw==/19158990114249410.jpg",
            "http://p1.music.126.net/EOT2La1-GLsT1UEo4xSDJQ==/18897306346838331.jpg",
            "http://p1.music.126.net/DCQvBGXkY2Xbi-VZUqZQXQ==/18909400974745167.jpg",
            "http://p1.music.126.net/qT7G7rc5b_up3fB8GUOPjQ==/19232657393311450.jpg",
            "http://p1.music.126.net/kPHIrelpVxnvAbb8WeSyGQ==/18644418674212616.jpg",
            "http://p1.music.126.net/hIwCAw2dz0PiFiujNkM6RA==/19142497439833776.jpg"
        ];
        this.data = this.songs.datas;
        console.log(this.data);
    }
    RecommendedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecommendedPage');
    };
    return RecommendedPage;
}());
RecommendedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recommended',template:/*ion-inline-start:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/recommended.html"*/'<!--\n  Generated template for the RecommendedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n    <swiper [data]="swiperlist"></swiper>\n\n    <imenu></imenu>\n\n    <ion-list-header>\n        推荐歌单 >\n    </ion-list-header>\n    <music-card [data]="data.Hot"></music-card>\n\n    <ion-list-header>\n        华语 >\n    </ion-list-header>\n    <music-card [data]="data.Chinese"></music-card>\n\n    <ion-list-header>\n        流行 >\n    </ion-list-header>\n    <music-card [data]="data.Popular"></music-card>\n\n    <ion-list-header>\n        摇滚 >\n    </ion-list-header>\n    <music-card [data]="data.Rock"></music-card>\n\n    <ion-list-header>\n        推荐MV >\n    </ion-list-header>\n    <music-card [data]="data.Hot"></music-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/recommended.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_songs_songs__["a" /* SongsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], RecommendedPage);

//# sourceMappingURL=recommended.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swiper__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwiperComponentModule = (function () {
    function SwiperComponentModule() {
    }
    return SwiperComponentModule;
}());
SwiperComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__swiper__["a" /* SwiperComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__swiper__["a" /* SwiperComponent */]
        ]
    })
], SwiperComponentModule);

//# sourceMappingURL=swiper.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwiperComponent = (function () {
    function SwiperComponent() {
        //存储swiper对象
        this.oSwiper = null;
    }
    SwiperComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.oSwiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                // 如果需要分页器
                pagination: '.swiper-pagination',
            });
        }, 500);
    };
    return SwiperComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SwiperComponent.prototype, "data", void 0);
SwiperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'swiper',template:/*ion-inline-start:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/components/swiper/swiper.html"*/'<!-- Generated template for the SwiperComponent component -->\n<div class="swiper-container">\n    <div class="swiper-wrapper">\n\n        <div *ngFor="let imgs of data" class="swiper-slide" [style.background]="\'url(\'+imgs+\')\'"></div>\n\n    </div>\n    <!-- 如果需要分页器 -->\n    <div class="swiper-pagination"></div>\n</div>'/*ion-inline-end:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/components/swiper/swiper.html"*/
    }),
    __metadata("design:paramtypes", [])
], SwiperComponent);

//# sourceMappingURL=swiper.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imenu__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuComponentModule = (function () {
    function MenuComponentModule() {
    }
    return MenuComponentModule;
}());
MenuComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__imenu__["a" /* MenuComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__imenu__["a" /* MenuComponent */]
        ]
    })
], MenuComponentModule);

//# sourceMappingURL=imenu.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MenuComponent = (function () {
    function MenuComponent() {
        console.log('Hello MenuComponent Component');
        this.text = 'Hello World';
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'imenu',template:/*ion-inline-start:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/components/imenu/imenu.html"*/'<!-- Generated template for the MenuComponent component -->\n<section class="dv_box">\n    <div class="dv_items" (click)="pushQueList();">\n        <div class="icon-wrap">\n            <ion-icon name="radio"></ion-icon>\n        </div>\n        <p>云音乐私人FM</p>\n    </div>\n    <div class="dv_items" (click)="pushHotWork();">\n        <div class="icon-wrap">\n            <ion-icon name="calendar"></ion-icon>\n        </div>\n        <p>每日歌曲推荐</p>\n    </div>\n    <div class="dv_items" (click)="pushHotAnswer();">\n        <div class="icon-wrap">\n            <ion-icon name="podium"></ion-icon>\n        </div>\n        <p>云音乐热歌榜</p>\n    </div>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/components/imenu/imenu.html"*/
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=imenu.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_card__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicCardComponentModule = (function () {
    function MusicCardComponentModule() {
    }
    return MusicCardComponentModule;
}());
MusicCardComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__music_card__["a" /* MusicCardComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__music_card__["a" /* MusicCardComponent */]
        ]
    })
], MusicCardComponentModule);

//# sourceMappingURL=music-card.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MusicCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MusicCardComponent = (function () {
    function MusicCardComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.rootNavCtrl = navParams.get('rootNavCtrl');
    }
    MusicCardComponent.prototype.OpenPlaylistPage = function () {
        this.rootNavCtrl.push('OpenPlaylistPage');
    };
    return MusicCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MusicCardComponent.prototype, "data", void 0);
MusicCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'music-card',template:/*ion-inline-start:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/components/music-card/music-card.html"*/'<!-- Generated template for the MusicCardComponent component -->\n<section *ngFor="let idata of data" class="card" (click)="OpenPlaylistPage();">\n    <div class="imgs" [style.background]="\'url(\'+ idata.img +\')\'"></div>\n    <p class="title">{{idata.name}}</p>\n\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/Netease-music/src/pages/recommended/components/music-card/music-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], MusicCardComponent);

//# sourceMappingURL=music-card.js.map

/***/ })

});
//# sourceMappingURL=1.js.map