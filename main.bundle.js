webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background-color: #ffffff;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n#leftmenu{\r\n    float: left;\r\n    width: auto;\r\n}\r\n#container{\r\n    float: left;\r\n    background-color: #686565;\r\n\r\n\r\n}\r\n.clear-left{\r\n    clear: left;\r\n    border-radius: 0;\r\n    position: relative;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 15%;\r\n    padding-top: 0px;\r\n    border: none;\r\n    border-radius: 0;\r\n    width: 85%;\r\n\r\n    bottom: 0;\r\n   \r\n    padding-bottom: 40px;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  \n  <div id=\"leftmenu\"> <app-leftmenu></app-leftmenu></div>\n  <div class=\"clear-left\"><router-outlet></router-outlet></div>\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(db) {
        this.title = 'app';
        this.items = db.collection('donhangs').valueChanges();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__narbar_narbar_component__ = __webpack_require__("../../../../../src/app/narbar/narbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__leftmenu_leftmenu_component__ = __webpack_require__("../../../../../src/app/leftmenu/leftmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__leftmenu_share_data_service__ = __webpack_require__("../../../../../src/app/leftmenu/share/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__leftmenu_share_reverse_pipe__ = __webpack_require__("../../../../../src/app/leftmenu/share/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__leftmenu_share_filterbk_pipe__ = __webpack_require__("../../../../../src/app/leftmenu/share/filterbk.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tao_don_hang_tao_don_hang_component__ = __webpack_require__("../../../../../src/app/tao-don-hang/tao-don-hang.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__view_donhang_view_donhang_component__ = __webpack_require__("../../../../../src/app/view-donhang/view-donhang.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__view_detail_view_detail_component__ = __webpack_require__("../../../../../src/app/view-detail/view-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sua_don_hang_sua_don_hang_component__ = __webpack_require__("../../../../../src/app/sua-don-hang/sua-don-hang.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__narbar_narbar_component__["a" /* NarbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__leftmenu_leftmenu_component__["a" /* LeftmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_17__tao_don_hang_tao_don_hang_component__["a" /* TaoDonHangComponent */],
                __WEBPACK_IMPORTED_MODULE_18__view_donhang_view_donhang_component__["a" /* ViewDonhangComponent */],
                __WEBPACK_IMPORTED_MODULE_14__leftmenu_share_reverse_pipe__["a" /* ReversePipe */],
                __WEBPACK_IMPORTED_MODULE_15__leftmenu_share_filterbk_pipe__["a" /* FilterbkPipe */],
                __WEBPACK_IMPORTED_MODULE_19__view_detail_view_detail_component__["a" /* ViewDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sua_don_hang_sua_don_hang_component__["a" /* SuaDonHangComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'tao-don-hang/:title', component: __WEBPACK_IMPORTED_MODULE_17__tao_don_hang_tao_don_hang_component__["a" /* TaoDonHangComponent */] },
                    { path: 'xem-don-hang/:title/:state', component: __WEBPACK_IMPORTED_MODULE_18__view_donhang_view_donhang_component__["a" /* ViewDonhangComponent */] },
                    { path: 'xem-don-hang/Xem đơn hàng/:state/:id', component: __WEBPACK_IMPORTED_MODULE_19__view_detail_view_detail_component__["a" /* ViewDetailComponent */] },
                    { path: 'sua-don-hang/:title/:id', component: __WEBPACK_IMPORTED_MODULE_20__sua_don_hang_sua_don_hang_component__["a" /* SuaDonHangComponent */] },
                    { path: '', redirectTo: '/xem-don-hang/Xem đơn hàng/Tất cả', pathMatch: 'full' },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* AlertModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__leftmenu_share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_14__leftmenu_share_reverse_pipe__["a" /* ReversePipe */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/leftmenu/leftmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.sidebar{\r\n    border-radius: 0;\r\n    position: fixed;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    width: 15%;\r\n    padding-top: 10px;\r\n    border: none;\r\n    border-radius: 0;\r\n    overflow-y: auto;\r\n    background-color: #222;\r\n    bottom: 0;\r\n   \r\n    padding-bottom: 40px;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n.title{\r\n    color: rgb(190, 93, 2);\r\n    font-size: 23px;\r\n    padding-left: 10px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\n.list-group .list-group-item {\r\n    border-radius: 0px;\r\n    background-color: #222;\r\n    color: #ffffff;\r\n    border: 0px;\r\n    border-bottom: 1px solid #3b3b3b;\r\n\r\n}\r\n.cus-list{\r\n    height: 50px;\r\n    font-size: 18pt;\r\n    padding-left: 20px;\r\n\r\n}\r\n.list-group .list-group-item:hover {\r\n    background-color: #3b3b3b;\r\n\r\n}\r\n.view-filter{\r\n    height: auto;\r\n    padding-left: 20%; \r\n    margin: 1px;\r\n    font-size: 16px;\r\n}\r\n       \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leftmenu/leftmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\">\n  <div class=\"title\">CỬA HÀNG VH</div>\n  <ul class=\"list-group\">\n     <a  routerLink =\"xem-don-hang/{{category[0]}}/Tất cả\" class=\"list-group-item  cus-list\" >{{category[0]}}\n      </a>\n          <div class=\"list-group\" >\n              <a routerLink =\"xem-don-hang/{{category[0]}}/{{filter.name}}\" *ngFor = \"let filter of filters\"   class=\"list-group-item view-filter\"  >{{filter.name}} <span class=\"badge\" >{{filter.count}}</span></a> \n          </div>\n          \n     \n     <a routerLink =\"tao-don-hang/{{category[1]}}\"  class=\"list-group-item cus-list\" >{{category[1]}}</a>\n  \n  </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/leftmenu/leftmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leftmenu_share_data_service__ = __webpack_require__("../../../../../src/app/leftmenu/share/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftmenuComponent = (function () {
    function LeftmenuComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.category = ["Xem đơn hàng", "Tạo đơn hàng"];
        this.filters = [];
        this.filters = this.dataService.filters;
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
            //console.log("viewdonhang-lefmenu",this.donhangs.length);
            // this.filters[0].count = this.donhangs.length;
            // for (let index = 1; index < this.filters.length; index++) {
            //   this.filters[index].count = this.dataService.count(this.filters[index].name, this.donhangs);
            // }
            _this.dataService.countState(_this.donhangs);
        });
        //console.log(this.filters);
        //this.dataService.countState( this.donhangs); console.log("filter:",this.filters) ;
    }
    LeftmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leftmenu',
            template: __webpack_require__("../../../../../src/app/leftmenu/leftmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/leftmenu/leftmenu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__leftmenu_share_data_service__["a" /* DataService */]])
    ], LeftmenuComponent);
    return LeftmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/leftmenu/share/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(afs) {
        // this.donhangs = this.afs.collection('donhangs').valueChanges();
        this.afs = afs;
        // donhangs = [
        //   {
        //     id: 'bk1', tenkh: 'Nguyen van a', sdt: '0904573234', dc: 'Thuy Son, TN, HP', trangthai: 'Chưa giao',
        //     thanhtoan: 0, tong: 3700000, nolai: 3700000, ngaytao: '2017-11-16', ngaygiao: '2017-11-16', laixe: 'the', xe: '16L 9670'
        //   },
        //   {
        //     id: 'bk2', tenkh: 'Nguyen van b', sdt: '0902345232', dc: 'Nui Deo, TN, HP', trangthai: 'Đơn bị hủy',
        //     thanhtoan: 1000000, tong: 4000000, nolai: 3000000, ngaytao: '2017-11-16', ngaygiao: '2017-11-16', laixe: 'Long', xe: '15C 18037'
        //   },
        //   {
        //     id: 'bk3', tenkh: 'Nguyen van c', sdt: '0902345232', dc: 'Nui Deo, TN, HP', trangthai: 'Đang bốc hàng',
        //     thanhtoan: 1000000, tong: 4000000, nolai: 3000000, ngaytao: '2017-11-16', ngaygiao: '2017-11-16', laixe: 'Long', xe: '15C 18037'
        //   }
        // ];
        // bks = [
        //   { id: 'bk1', stt: 1, tenhang: 'Gạch lát A1 ĐV', dvt: 'viên', dongia: 70000, soluong: 1000, thanhtien: 1200000 },
        //   { id: 'bk1', stt: 2, tenhang: 'Gạch 6 lỗ', dvt: 'viên', dongia: 2500, soluong: 1000, thanhtien: 2500000 },
        //   { id: 'bk2', stt: 1, tenhang: 'Gạch đặc', dvt: 'viên', dongia: 1500, soluong: 1000, thanhtien: 1500000 },
        //   { id: 'bk2', stt: 2, tenhang: 'Gạch 6 lỗ', dvt: 'viên', dongia: 2500, soluong: 1000, thanhtien: 2500000 }
        // ];
        this.filters = [
            { name: "Tất cả", count: 0 },
            { name: "Chưa giao", count: 0 },
            { name: "Đã giao", count: 0 },
            { name: "Đang bốc hàng", count: 0 },
            { name: "Đang đi giao", count: 0 },
            { name: "Đơn bị hủy", count: 0 }
        ];
    }
    DataService.prototype.ngOninit = function () { };
    ;
    DataService.prototype.getDonhangs = function () {
        //console.log("getdonhang");
        this.donhang = this.afs.collection('donhangs');
        this.donhangs = this.donhang.snapshotChanges().map(function (changes) {
            //  console.log("change");
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.ma = a.payload.doc.id;
                // console.log("donhangs");
                return data;
            });
        });
        return this.donhangs;
    };
    ;
    // getDonhang(id:string){
    //   this.donhang = this.afs.collection<donhang>('donhangs',ref => ref.where('id', '==', id));
    //   this.donhangs = this.donhang.snapshotChanges().map(changes => {
    //     return changes.map(a => {
    //       const data = a.payload.doc.data() as donhang;
    //       return data;
    //     })
    //   });
    //   console.log("getdonhang",this.donhangs);
    //   return this.donhangs;
    // }
    DataService.prototype.getBks = function () {
        this.bk = this.afs.collection('bks');
        this.bks = this.bk.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.ma = a.payload.doc.id;
                return data;
            });
        });
        return this.bks;
    };
    ;
    DataService.prototype.getBk = function (id) {
        this.bk = this.afs.collection('bks', function (ref) { return ref.where('id', '==', id); });
        this.bks = this.bk.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.ma = a.payload.doc.id;
                return data;
            });
        });
        // console.log("getdonhang", this.bks);
        return this.bks;
    };
    DataService.prototype.getMathangs = function () {
        this.mathangs = this.afs.collection('mathang').snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return this.mathangs;
    };
    ;
    DataService.prototype.getXes = function () {
        this.xes = this.afs.collection('xe').snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return this.xes;
    };
    ;
    DataService.prototype.addDonhang = function (dh) {
        this.donhang.add(dh);
    };
    ;
    DataService.prototype.updateDh = function (dh) {
        this.donhangDoc = this.afs.doc("donhangs/" + dh.ma);
        console.log("bkDoc", this.donhangDoc);
        this.donhangDoc.update(dh);
    };
    ;
    DataService.prototype.addBk = function (bangke) {
        console.log("bk", this.bk);
        console.log("bangke", bangke);
        this.bk.add(bangke);
    };
    ;
    DataService.prototype.addBks = function (bangke) {
        for (var i = 0; i < bangke.length; i++) {
            this.bk.add(bangke[i]);
        }
    };
    ;
    DataService.prototype.removeBk = function (bangke) {
        console.log("remove", bangke);
        this.bkDoc = this.afs.doc("bks/" + bangke.ma);
        console.log("bkDoc", this.bkDoc);
        this.bkDoc.delete();
        console.log("delete");
    };
    ;
    DataService.prototype.removeBks = function (id, bke) {
        console.log("xóa");
        var lgth;
        var bangke;
        for (var i = 0; i < bke.length; i++) {
            console.log("for", i);
            console.log("ma", bke[i].ma);
            this.bkDoc = this.afs.doc("bks/" + bke[i].ma);
            this.bkDoc.delete();
        }
    };
    ;
    DataService.prototype.updatebk = function (bangke) {
        this.bkDoc = this.afs.doc("bks/" + bangke.ma);
        this.bkDoc.update(bangke);
    };
    DataService.prototype.counts = function (state, donhangs) {
        var cnt = 0;
        for (var i = 0; i < donhangs.length; i++) {
            if (donhangs[i].trangthai == state) {
                cnt++;
            }
        }
        return cnt;
    };
    ;
    DataService.prototype.countState = function (donhangs) {
        this.filters[0].count = donhangs.length;
        for (var index = 1; index < this.filters.length; index++) {
            this.filters[index].count = this.counts(this.filters[index].name, donhangs);
        }
    };
    ;
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/leftmenu/share/filterbk.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterbkPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterbkPipe = (function () {
    function FilterbkPipe() {
    }
    FilterbkPipe.prototype.transform = function (arr, id) {
        var bks;
        var a = [];
        a = arr;
        for (var i = 0; i < a.length; i++) {
            if (a[i].id == id) {
                bks.push(arr[i]);
            }
        }
        console.log(bks);
        return bks;
    };
    FilterbkPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filterbk',
            pure: false
        })
    ], FilterbkPipe);
    return FilterbkPipe;
}());



/***/ }),

/***/ "../../../../../src/app/leftmenu/share/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (arr) {
        return arr.slice().reverse();
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "../../../../../src/app/narbar/narbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.nav{\r\n    border-radius: 0px;\r\n    height: 50px;\r\n    width: 100%;\r\n    background-color: rgb(190, 93, 2);\r\n       \r\n}\r\n.space{\r\n    width: 300px;\r\n    height: 50px;\r\n    float: left;\r\n}\r\n.title{\r\n    color: #ffffff;\r\n    font-size: 18pt;\r\n    padding-top: 7px;\r\n    padding-left: 20px;\r\n    margin: 0px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/narbar/narbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fix-top  header\">\n  <nav class=\"nav\">\n      \n     <p class=\"title\">{{title}}</p>\n     \n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/narbar/narbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NarbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NarbarComponent = (function () {
    function NarbarComponent(route) {
        this.route = route;
        this.title = "";
    }
    NarbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            return _this.title = params.get('title');
        });
    };
    NarbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-narbar',
            template: __webpack_require__("../../../../../src/app/narbar/narbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/narbar/narbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NarbarComponent);
    return NarbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404 Page Not Found</h1>"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sua-don-hang/sua-don-hang.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contain{\r\n    float: left;\r\n    position: relative;\r\n    width: 100%;\r\n    \r\n}\r\n.state{\r\n    width: 80%;\r\n    height: auto;\r\n    min-height: 35px;\r\n    margin: 0px auto;\r\n    margin-bottom: 40px;\r\n}\r\n.boxstate{\r\n    min-height: 40px;\r\n    height: auto;\r\n    width: 19%;\r\n    float: left;\r\n    text-align: center;\r\n    padding-top: 2%;\r\n    \r\n    background-color: rgb(143, 142, 142);\r\n    margin: 2px;\r\n}\r\n.chuagiao:active{\r\n    \r\n    background-color:rgb(165, 7, 7); \r\n    color: #ffffff;\r\n}\r\n.chuagiao:focus{\r\n    background-color:rgb(165, 7, 7); \r\n    color: #ffffff;\r\n}\r\n.chuagiao:visited{\r\n    background-color:rgb(165, 7, 7); \r\n    color: #ffffff;\r\n}\r\n.boxstate:visited{ background-color:rgb(253, 186, 0);\r\n    color: #ffffff}\r\n.dangboc:focused{\r\n    background-color:rgb(253, 186, 0);\r\n    color: #ffffff\r\n}\r\n.taodon{\r\n    margin: 0px auto;\r\n    width: 80%;\r\n    max-width: 900px;\r\n}\r\n\r\n.tieude{\r\n    margin: 10px auto;\r\n    width: 300px;\r\n}\r\n.formnhap{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n}\r\n.form-group{\r\n    padding-left: 20px;\r\n}\r\n.control-label{\r\n  \r\n  \r\n    display: block;\r\n    height: 34px;\r\n    padding: 6px 15px;\r\n    font-size: 11pt; \r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n}\r\n\r\n.tenkh{\r\n    width: 50%;  \r\n    float: left;\r\n    margin-right: 22px;\r\n}\r\n.sdt{\r\n    width: 20%;     \r\n}\r\n.diachi{\r\n    width: 80%;\r\n    margin-left: 137px;\r\n}\r\n.float-left{\r\n    float: left;\r\n   \r\n}\r\n.add-donhang{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n    padding-left: 15px;\r\n}\r\n.slect{\r\n    width: 27%;  \r\n}\r\n.dvt{\r\n    width: 12%;\r\n \r\n}\r\n.sl{\r\n    width: 20%;\r\n   \r\n}\r\n.sll{\r\n    width: 25%;\r\n   \r\n}\r\n.dg{\r\n    width: 23%;\r\n}\r\n.mg-r{\r\n    margin-right: 20px;\r\n}\r\n.mg-l{\r\n    margin-left: 20px;\r\n}\r\n.mg-t-40{\r\n    margin-top: 40px;\r\n}\r\n.pd-0{\r\n    padding: 5px 0px;\r\n}\r\n.fl-l{\r\n    float: left;\r\n}\r\n.fl-r{\r\n    float: right;\r\n}\r\n.other{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n    padding-left: 15px;\r\n}\r\nth{\r\n    text-align: center;\r\n    font-size: 13pt;\r\n    font-weight:  bold;\r\n}\r\n.tbl-stt{\r\n    width: 3%;\r\n}\r\n.tbl-tenhang{\r\n    width: 30%;\r\n}\r\n.tbl-dvt{\r\n    width: 10%;\r\n}\r\n.tbl-soluong{\r\n    width: 16%;\r\n}\r\n.tbl-dongia{\r\n    width: 18%;\r\n}\r\n\r\n.txt-center{\r\n    text-align: center;\r\n}\r\n.txt-right{\r\n    text-align: right;\r\n}\r\nhr{\r\n    clear: both;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sua-don-hang/sua-don-hang.component.html":
/***/ (function(module, exports) {

module.exports = "<app-narbar></app-narbar>\n<div class=\"contain\" *ngFor='let donhang of donhangs'>\n\n    <div class=\"taodon\" *ngIf=\"donhang.id == id\">\n\n        <div class=\"tieude\">\n            <h1>Hóa đơn bán hàng</h1>\n        </div>\n        <br>\n        <div class=\"formnhap\">\n            <form #donForm=\"ngForm\" (ngSubmit)=\"change(donForm.value); donForm.reset()\">\n                <div class=\"state\">\n                    <label class=\"control-label fl-l\" for=\"trangthai\">Trạng thái đơn hàng </label>\n                    <select class=\"form-control\" style=\"width :70%\" name=\"trangthai\"\n                        [(ngModel)]=\"donhang.trangthai\" ngModel>\n\n                        <option *ngFor=\"let st of state\" [value]=\"st\">{{st}}</option>\n                    </select>\n                    \n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label fl-l\" for=\"tenkh\">Tên khách hàng </label>\n                    <input type=\"text\" class=\"form-control tenkh\" name=\"tenkh\" id=\"tenkh\" placeholder=\"Nhập tên khách hàng\" [(ngModel)]=\"donhang.kh.tenkh\"\n                        ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label fl-l\" for=\"sdt\">SĐT </label>\n                    <input type=\"text\" class=\"form-control sdt\" name=\"sdt\" id=\"sdt\" placeholder=\"Nhấp số điện thoại\" [(ngModel)]=\"donhang.kh.sdt\"\n                        ngModel>\n                </div>\n\n                <br>\n                <div class=\"form-group\">\n                    <label class=\"control-label fl-l\">Địa chỉ </label>\n                    <input type=\"text\" class=\"form-control diachi\" name=\"diachi\" placeholder=\"Nhập địa chỉ giao hàng\" [(ngModel)]=\"donhang.kh.dc\"\n                        ngModel>\n                </div>\n                <hr>\n\n                <div class=\"add-donhang\">\n                    <h4>Thêm mặt hàng</h4>\n                    <form #tempForm=\"ngForm\" (ngSubmit)=\"addbk(tempForm.value); tempForm.reset()\">\n                        <div class=\"form-group slect mg-r fl-l\">\n                            <label class=\"control-label  pd-0\">Tên hàng:</label>\n                            <select class=\"form-control \" name=\"tenhang\" [(ngModel)]=\"th\" ngModel>\n                                <option disabled>Chọn mặt hàng</option>\n                                <option *ngFor=\"let mathang of mathang\" [value]=\"mathang.tenhang\">{{mathang.tenhang}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group dvt mg-r fl-l\">\n                            <label class=\"control-label pd-0\">ĐVT:</label>\n                            <input class=\"form-control \" type=\"text\" placeholder=\"ĐVT\" name=\"dvt\" [(ngModel)]=\"dt\" ngModel>\n                        </div>\n                        <div class=\"form-group sl mg-r fl-l\">\n                            <label class=\"control-label pd-0\">Số lượng:</label>\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Số lượng\" name=\"soluong\" [(ngModel)]=\"sl\" ngModel>\n                        </div>\n                        <div class=\"form-group dg mg-r fl-l\">\n                            <label class=\"control-label  pd-0\">Đơn giá:</label>\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Đơn giá\" name=\"dongia\" [(ngModel)]=\"dg\" ngModel>\n                        </div>\n                        <div *ngIf=\"statebk\">\n                            <input class=\"btn mg-t-40\" type=\"submit\" value=\"Thêm\">\n                        </div>\n                        <div *ngIf=\"!statebk\">\n                            <input class=\"btn mg-t-40\" type=\"submit\" value=\"Sửa\">\n                        </div>\n\n                    </form>\n                </div>\n                <hr>\n                <div class=\"other\">\n                    <div class=\"form-group slect mg-r fl-l\">\n                        <label class=\"control-label  pd-0\">Xe chở hàng:</label>\n                        <select class=\"form-control \" name=\"xe\" [(ngModel)]=\"donhang.xe.bienso\" ngModel>\n                            <option disabled>Chọn xe giao hàng</option>\n                            <option *ngFor=\"let xe of xe\" [value]=\"xe.bienso\">{{xe.bienso}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group sll mg-r fl-l\">\n                        <label class=\"control-label  pd-0\">Ngày giao hàng:</label>\n                        <input class=\"form-control \" type=\"date\" name=\"ngaygiao\" [(ngModel)]=\"donhang.ngaygiao\" ngModel>\n                    </div>\n                    <div class=\"form-group sll mg-r fl-l \">\n                        <label class=\"control-label pd-0\">Đã thanh toán:</label>\n                        <input class=\"form-control\" type=\"number\" name=\"thanhtoan\" placeholder=\"Đã thanh toán\" [(ngModel)]=\"donhang.thanhtoan\" ngModel>\n                    </div>\n                </div>\n                <hr>\n\n\n                <input type=\"submit\" class=\"btn fl-r mg-r\" value=\"Lưu lại\">\n            </form>\n\n        </div>\n        <br>\n        <div class=\"bangke\">\n            <br>\n            <br>\n            <table class=\"table table-bordered\">\n                <thead>\n                    <tr>\n                        <th class=\"tbl-stt\">STT</th>\n                        <th class=\"tbl-tenhang\">Tên hàng</th>\n                        <th class=\"tbl-dvt\">ĐVT</th>\n                        <th class=\"tbl-soluong\">Số lượng</th>\n                        <th class=\"tbl-dongia\">Đơn giá</th>\n                        <th class=\"tbl-thanhtien\">Thành tiền</th>\n\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let b of bks, let ind = index'>\n                        <td class=\"txt-center\">{{ind+1}}</td>\n                        <td>{{b.mathang.tenhang}}</td>\n                        <td class=\"txt-center\">{{b.mathang.dvt}}</td>\n                        <td class=\"txt-right\">{{b.soluong}}</td>\n                        <td class=\"txt-right\">{{b.mathang.dongia}}</td>\n                        <td class=\"txt-right\">{{b.thanhtien}}\n                            <span (click)=\"updateBk(ind)\">Sửa</span>\n                            <span (click)=\"removeBk(ind)\">Xoas</span>\n                        </td>\n\n                    </tr>\n                    <tr>\n                        <td class=\"txt-center\"></td>\n                        <td>{{th==\"Chọn mặt hàng\"? \"\": th}}</td>\n                        <td class=\"txt-center\">{{dt}}</td>\n                        <td>{{sl}}</td>\n                        <td class=\"txt-right\">{{dg}}</td>\n                        <td class=\"txt-right\">{{dg*sl}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"5\">Tổng cộng</td>\n                        <td class=\"txt-right\">{{donhang.tong}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"5\">Đã thanh toán</td>\n                        <td class=\"txt-right\">{{donhang.thanhtoan}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"5\">Còn nợ lại</td>\n                        <td class=\"txt-right\">{{donhang.tong-donhang.thanhtoan}}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/sua-don-hang/sua-don-hang.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuaDonHangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leftmenu_share_data_service__ = __webpack_require__("../../../../../src/app/leftmenu/share/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuaDonHangComponent = (function () {
    function SuaDonHangComponent(dataService, route) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        //item: bk;
        this.th = "Chọn mặt hàng";
        this.dt = "";
        this.sl = null;
        this.dg = null;
        this.statebk = true;
        this.t = 0;
        this.state = ["Đã giao", "Đang đi giao", "Đang bốc hàng", "Chưa giao", "Đơn bị hủy"];
        this.items = [];
        this.item = { stt: 1, tenhang: "a", dvt: "v", soluong: 0, dongia: 0, thanhtien: 0 };
        this.addbk = function (temp) {
            if (temp.tenhang != "" && temp.dvt != "" && temp.soluong != 0) {
                this.statebk = true;
                this.item.stt = this.bks.length + 1;
                this.item.tenhang = temp.tenhang;
                this.item.dvt = temp.dvt;
                this.item.soluong = temp.soluong;
                this.item.dongia = temp.dongia;
                this.item.thanhtien = temp.dongia * temp.soluong;
                //this.items.push(this.item);
                temp = [];
                this.th = "Chọn mặt hàng";
                this.dv = "";
                this.sl = null;
                this.dg = null;
            }
            console.log("items", this.items);
            //for (let i = 0; i < this.items.length; i++) {
            var mh;
            mh = { tenhang: this.item.tenhang, dvt: this.item.dvt, dongia: this.item.dongia };
            var it = { id: this.id, mathang: mh, soluong: this.item.soluong, thanhtien: this.item.thanhtien };
            // this.dataService.addBk(it);
            this.bks.push(it);
            console.log("bks", this.bks);
            //  this.items = [];
            //}
            for (var i = 0; i <= this.bks.length; i++) {
                if (this.bks.length == 0) {
                    this.t = 0;
                }
                ;
                this.t = this.t + this.bks[i].thanhtien;
                console.log("tong: ", this.t);
                //this.donhang.tong = t;
            }
            for (var i = 0; i < this.donhangs.length; i++) {
                if (this.donhangs[i].id == this.id) {
                    this.donhangs[i].tong = this.t;
                    console.log("Tong dh: ", this.donhangs[i].tong);
                }
            }
            //  this.dataService.setTong(t,)
        };
        this.change = function (don) {
            console.log(don);
            if (don.tenkh != "" && don.sdt != "" && don.diachi != "") {
                var i = this.lengthdh + 1;
                var kh = { tenkh: don.tenkh, sdt: don.sdt, dc: don.diachi };
                var x;
                for (var i_1 = 0; i_1 < this.xe.length; i_1++) {
                    if (this.xe[i_1].bienso == don.xe) {
                        x = this.xe[i_1];
                    }
                }
                ;
                console.log("bkremove", this.bkremove);
                for (var i_2 = 0; i_2 < this.donhangs.length; i_2++) {
                    console.log("for component", i_2);
                    if (this.donhangs[i_2].id == this.id) {
                        // var dhang: donhang = {
                        //   id: this.donhangs[i].id, kh: kh, trangthai: don.trangthai, thanhtoan: don.thanhtoan == null ? 0 : don.thanhtoan,
                        //   tong: don.tong, nolai: don.tong - don.thanhtoan, ngaytao: this.donhangs[i].ngaytao, ngaygiao: don.ngaygiao, laixe: this.donhangs[i].laixe, xe: x
                        // };
                        this.donhangs[i_2].kh = kh;
                        this.donhangs[i_2].trangthai = don.trangthai;
                        this.donhangs[i_2].thanhtoan = don.thanhtoan == null ? 0 : don.thanhtoan;
                        this.donhangs[i_2].tong = this.t;
                        this.donhangs[i_2].nolai = this.t - don.thanhtoan;
                        this.donhangs[i_2].ngaygiao = don.ngaygiao;
                        this.donhangs[i_2].xe = x;
                        console.log("don hang", this.donhangs[i_2]);
                        this.dataService.updateDh(this.donhangs[i_2]);
                        this.chonxe = "Chọn xe giao hàng";
                        console.log("bks", this.bks);
                        console.log("chõne", this.chonxe);
                    }
                }
                ;
                this.chonxe = "Chọn xe giao hàng";
                this.dataService.countState(this.dataService.donhangs);
                console.log("count");
                // for (let j = 0; j < this.bks.length; j++) {
                //   var mh:mathang;
                //   mh = {tenhang: this.bks[j].mathang.tenhang, dvt: this.bks[j].mathang.dvt, dongia: this.bks[j].mathang.dongia};
                //   var it: bk = { id: this.id, mathang: mh , soluong: this.bks[j].soluong, thanhtien: this.bks[j].thanhtien };
                this.dataService.removeBks(this.id, this.bkremove);
                this.dataService.addBks(this.bks);
                console.log("add");
            }
        };
        this.route.paramMap.subscribe(function (param) {
            _this.id = param.get('id');
            return _this.id;
        });
        this.dataService.getMathangs().subscribe(function (mh) {
            _this.mathang = mh;
            console.log("mh", _this.mathang);
        });
        this.dataService.getXes().subscribe(function (x) {
            _this.xe = x;
            console.log("xes", _this.xe);
        });
        this.dataService.getDonhangs().subscribe(function (dh) {
            _this.donhangs = dh;
        });
        this.dataService.getBk(this.id).subscribe(function (bk) {
            _this.bks = bk;
            // this.bkremove = bk;
            console.log("viewdonhang-bk", _this.bks);
        });
        this.dataService.getBk(this.id).subscribe(function (bk) {
            _this.bkremove = bk;
        });
    }
    SuaDonHangComponent.prototype.ngOnInit = function () {
    };
    SuaDonHangComponent.prototype.removeBk = function (index) {
        //console.log(this.bks[index]);
        // var bktemp: bk = this.bks[index];
        this.bks.splice(index, 1);
        if (this.bks.length == 0) {
            this.t = 0;
        }
        ;
        for (var i = 0; i < this.bks.length; i++) {
            this.t = this.t + this.bks[i].thanhtien;
            console.log("tong: ", this.t);
        }
        for (var i = 0; i < this.donhangs.length; i++) {
            if (this.donhangs[i].id == this.id) {
                this.donhangs[i].tong = this.t;
                console.log("Tong dh: ", this.donhangs[i].tong);
            }
        }
        //this.dataService.removeBk(bktemp);
        console.log("bangke splice", this.bks);
        console.log("bangke remove", this.bkremove);
    };
    SuaDonHangComponent.prototype.updateBk = function (ind) {
        console.log(ind);
        this.statebk = false;
        this.th = this.bks[ind].mathang.tenhang;
        this.dt = this.bks[ind].mathang.dvt;
        this.sl = this.bks[ind].soluong;
        this.dg = this.bks[ind].mathang.dongia;
        this.removeBk(ind);
    };
    SuaDonHangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sua-don-hang',
            template: __webpack_require__("../../../../../src/app/sua-don-hang/sua-don-hang.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sua-don-hang/sua-don-hang.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__leftmenu_share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SuaDonHangComponent);
    return SuaDonHangComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tao-don-hang/tao-don-hang.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contain{\r\n    float: left;\r\n    position: relative;\r\n    width: 100%;\r\n    \r\n}\r\n.taodon{\r\n    margin: 0px auto;\r\n    width: 80%;\r\n    max-width: 900px;\r\n}\r\n\r\n.tieude{\r\n    margin: 10px auto;\r\n    width: 300px;\r\n}\r\n.formnhap{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n}\r\n.form-group{\r\n    padding-left: 20px;\r\n\r\n}\r\n.control-label{\r\n    \r\n  \r\n    display: block;\r\n    height: 34px;\r\n    padding: 6px 15px;\r\n    font-size: 11pt; \r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n}\r\n\r\n.tenkh{\r\n    width: 50%;  \r\n    float: left;\r\n    margin-right: 22px;\r\n}\r\n.sdt{\r\n    width: 20%;     \r\n}\r\n.diachi{\r\n    width: 80%;\r\n    margin-left: 137px;\r\n}\r\n.float-left{\r\n    float: left;\r\n   \r\n}\r\n.add-donhang{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n    padding-left: 15px;\r\n}\r\n.slect{\r\n    width: 27%;  \r\n}\r\n.dvt{\r\n    width: 12%;\r\n \r\n}\r\n.sl{\r\n    width: 20%;\r\n   \r\n}\r\n.sll{\r\n    width: 25%;\r\n   \r\n}\r\n.dg{\r\n    width: 23%;\r\n}\r\n.bt{\r\n    width: 10%;\r\n}\r\n.mg-r{\r\n    margin-right: 20px;\r\n}\r\n.mg-l{\r\n    margin-left: 20px;\r\n}\r\n.mg-t-40{\r\n    margin-top: 40px;\r\n}\r\n.pd-0{\r\n    padding: 5px 0px;\r\n}\r\n.fl-l{\r\n    float: left;\r\n}\r\n.fl-r{\r\n    float: right;\r\n}\r\n.other{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n    padding-left: 15px;\r\n}\r\nth{\r\n    text-align: center;\r\n    font-size: 13pt;\r\n    font-weight:  bold;\r\n}\r\n.tbl-stt{\r\n    width: 3%;\r\n}\r\n.tbl-tenhang{\r\n    width: 30%;\r\n}\r\n.tbl-dvt{\r\n    width: 10%;\r\n}\r\n.tbl-soluong{\r\n    width: 17%;\r\n}\r\n.tbl-dongia{\r\n    width: 19%;\r\n}\r\n\r\n.txt-center{\r\n    text-align: center;\r\n}\r\n.txt-right{\r\n    text-align: right;\r\n}\r\nhr{\r\n    clear: both;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tao-don-hang/tao-don-hang.component.html":
/***/ (function(module, exports) {

module.exports = "<app-narbar></app-narbar>\n<div class=\"contain\">\n        \n    <div class=\"taodon\">\n            <alert type=\"success\">\n                    <strong>Well done!</strong> You successfully read this important alert message.\n                  </alert>\n        <div class=\"tieude\">\n            <h1>Hóa đơn bán hàng</h1>\n        </div>\n        <br>\n        <div class=\"formnhap\">\n            <form #donForm=\"ngForm\" (ngSubmit)=\"adddon(donForm.value); donForm.reset()\">\n\n                <div class=\"form-group\">\n                    <label class=\"control-label fl-l\" for=\"tenkh\">Tên khách hàng </label>\n                    <input type=\"text\" class=\"form-control tenkh\" name=\"tenkh\" id=\"tenkh\" placeholder=\"Nhập tên khách hàng\" [(ngModel)]=\"tenkh\"\n                        ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label fl-l\" for=\"sdt\">SĐT </label>\n                    <input type=\"text\" class=\"form-control sdt\" name=\"sdt\" id=\"sdt\" placeholder=\"Nhấp số điện thoại\" [(ngModel)]=\"sdt\" ngModel>\n                </div>\n\n                <br>\n                <div class=\"form-group\">\n                    <label class=\"control-label fl-l\">Địa chỉ </label>\n                    <input type=\"text\" class=\"form-control diachi\" name=\"diachi\" placeholder=\"Nhập địa chỉ giao hàng\" [(ngModel)]=\"diachi\" ngModel>\n                </div>\n                <hr>\n\n                <div class=\"add-donhang\">\n                    <h4>Thêm mặt hàng</h4>\n                    <form #tempForm=\"ngForm\" (ngSubmit)=\"addTemp(tempForm.value)\">\n                        <div class=\"form-group slect mg-r fl-l\">\n                            <label class=\"control-label  pd-0\">Tên hàng:</label>\n                            <select class=\"form-control\" name=\"tenhang\" [(ngModel)]=\"th\" >\n                                <option disabled >Chọn mặt hàng</option>\n                                <option *ngFor=\"let mathang of mathang\" [value]=\"mathang.tenhang\" >{{mathang.tenhang}}</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group dvt mg-r fl-l\">\n                            <label class=\"control-label pd-0\">ĐVT:</label>\n                            <input class=\"form-control  \" type=\"text\" placeholder=\"ĐVT\" name=\"dvt\" [(ngModel)]=\"dv\" ngModel>\n                        </div>\n                        <div class=\"form-group sl mg-r fl-l\">\n                            <label class=\"control-label pd-0\">Số lượng:</label>\n                            <input class=\"form-control \" type=\"number\" placeholder=\"Số lượng\" name=\"soluong\" [(ngModel)]=\"sl\" ngModel>\n                        </div>\n                        <div class=\"form-group dg mg-r fl-l\">\n                            <label class=\"control-label  pd-0\">Đơn giá:</label>\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Đơn giá\" name=\"dongia\" [(ngModel)]=\"dg\" ngModel>\n                        </div>\n\n                        <div *ngIf=\"statebk\"> \n                                <input class=\"btn mg-t-40\" type=\"submit\" value=\"Thêm\"></div>\n                                <div *ngIf=\"!statebk\"><input class=\"btn mg-t-40\" type=\"submit\" value=\"Sửa\"></div>\n\n                    </form>\n                </div>\n\n                <hr>\n                <div class=\"other\">\n                    <div class=\"form-group slect mg-r fl-l\">\n                        <label class=\"control-label  pd-0\">Xe chở hàng:</label>\n                        <select class=\"form-control\" name=\"xe\" [(ngModel)]=\"chonxe\" ngModel>\n                            <option disabled >Chọn xe giao hàng</option>\n                            <option *ngFor=\"let xe of xe\" [value]=\"xe.bienso\" >{{xe.bienso}}</option>\n                        </select>\n                    </div>\n                   \n                    <div class=\"form-group sll mg-r fl-l\">\n                        <label class=\"control-label  pd-0\">Ngày giao hàng:</label>\n                        <input class=\"form-control\" type=\"date\" name=\"ngaygiao\" placeholder=\"Ngày giao hàng\" ngModel>\n                    </div>\n                    <div class=\"form-group sll mg-r fl-l \">\n                        <label class=\"control-label pd-0\">Đã thanh toán:</label>\n                        <input class=\"form-control \" type=\"number\" name=\"thanhtoan\" placeholder=\"Đã thanh toán\" [(ngModel)]=\"tt\" ngModel>\n                    </div>\n                </div>\n\n                <hr>\n\n\n                <input type=\"submit\" class=\"btn fl-r mg-r\" value=\"Tạo đơn hàng\">\n            </form>\n\n        </div>\n        <br>\n        <div class=\"bangke\">\n            <br>\n            <br>\n            <table class=\"table table-bordered\">\n                <thead>\n                    <tr>\n                        <th class=\"tbl-stt\">STT</th>\n                        <th class=\"tbl-tenhang\">Tên hàng</th>\n                        <th class=\"tbl-dvt\">ĐVT</th>\n                        <th class=\"tbl-soluong\">Số lượng</th>\n                        <th class=\"tbl-dongia\">Đơn giá</th>\n                        <th class=\"tbl-thanhtien\">Thành tiền</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let it of items, let i= index'>\n                        <td class=\"txt-center\">{{i+1}}</td>\n                        <td>{{it.tenhang}}</td>\n                        <td class=\"txt-center\">{{it.dvt}}</td>\n                        <td>{{it.soluong}}</td>\n                        <td class=\"txt-right\">{{it.dongia}}</td>\n                        <td class=\"txt-right\">{{it.soluong*it.dongia}}\n                                <span (click)=\"updateBk(i)\">Sửa</span>\n                                <span (click)=\"removeBk(i)\">Xoas</span>\n                            </td>\n    \n                    </tr>\n                    <tr>\n                        <td class=\"txt-center\"></td>\n                        <td>{{th==\"Chọn mặt hàng\"?'':th}}</td>\n                        <td class=\"txt-center\">{{dv}}</td>\n                        <td>{{sl}}</td>\n                        <td class=\"txt-right\">{{dg}}</td>\n                        <td class=\"txt-right\">{{dg*sl}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"5\">Tổng cộng</td>\n                        <td class=\"txt-right\">{{tong}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"5\">Đã thanh toán</td>\n                        <td class=\"txt-right\">{{tt==null? 0 : tt}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"5\">Còn nợ lại</td>\n                        <td class=\"txt-right\">{{tt==null? tong-0 : tong-tt}}</td>\n                    </tr>\n                </tbody>\n\n            </table>\n\n        </div>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/tao-don-hang/tao-don-hang.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaoDonHangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leftmenu_share_data_service__ = __webpack_require__("../../../../../src/app/leftmenu/share/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaoDonHangComponent = (function () {
    function TaoDonHangComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.items = [];
        this.item = { stt: 1, tenhang: "a", dvt: "v", soluong: 0, dongia: 0, thanhtien: 0 };
        this.i = 1;
        this.tong = 0;
        this.statebk = true;
        this.now = new Date();
        this.th = "Chọn mặt hàng";
        this.dt = "";
        this.sl = null;
        this.dg = null;
        this.chonxe = "Chọn xe giao hàng";
        this.addTemp = function (temp) {
            if (temp.tenhang != "" && temp.dvt != "" && temp.soluong != 0) {
                this.item.stt = this.items.length + 1;
                this.item.tenhang = temp.tenhang;
                this.item.dvt = temp.dvt;
                this.item.soluong = temp.soluong;
                this.item.dongia = temp.dongia;
                this.item.thanhtien = temp.dongia * temp.soluong;
                this.items.push(this.item);
                this.item = {};
                temp = {};
                console.log('items', this.items);
                this.th = "Chọn mặt hàng";
                this.dv = "";
                this.sl = null;
                this.dg = null;
            }
            this.tong = 0;
            for (var i = 0; i < this.items.length; i++) {
                this.tong = this.tong + this.items[i].thanhtien;
            }
        };
        this.adddon = function (don) {
            console.log(don);
            if (don.tenkh != "" && don.sdt != "" && don.diachi != "") {
                var i = this.lengthdh + 1;
                var kh = { tenkh: don.tenkh, sdt: don.sdt, dc: don.diachi };
                var x;
                for (var i_1 = 0; i_1 < this.xe.length; i_1++) {
                    if (this.xe[i_1].bienso == don.xe) {
                        x = this.xe[i_1];
                    }
                }
                ;
                var donhang = {
                    id: "bk" + i, kh: kh, trangthai: "Chưa giao", thanhtoan: don.thanhtoan == null ? 0 : don.thanhtoan,
                    tong: this.tong, nolai: this.tong - don.thanhtoan, ngaytao: this.now, ngaygiao: don.ngaygiao, laixe: "", xe: x
                };
                for (var i_2 = 0; i_2 < this.items.length; i_2++) {
                    var mh;
                    mh = { tenhang: this.items[i_2].tenhang, dvt: this.items[i_2].dvt, dongia: this.items[i_2].dongia };
                    var it = { id: donhang.id, mathang: mh, soluong: this.items[i_2].soluong, thanhtien: this.items[i_2].thanhtien };
                    this.dataService.addBk(it);
                }
                this.dataService.addDonhang(donhang);
                this.chonxe = "Chọn xe giao hàng";
            }
            this.dataService.countState(this.dataService.donhangs);
        };
        this.dataService.getMathangs().subscribe(function (mh) {
            _this.mathang = mh;
            console.log("mh", _this.mathang);
        });
        this.dataService.getXes().subscribe(function (x) {
            _this.xe = x;
            console.log("xes", _this.xe);
        });
        this.dataService.getDonhangs().subscribe(function (d) {
            _this.lengthdh = d.length;
        });
    }
    TaoDonHangComponent.prototype.ngOninit = function () {
        console.log("xes", this.xe);
    };
    TaoDonHangComponent.prototype.updateBk = function (ind) {
        console.log(ind);
        this.statebk = false;
        this.th = this.items[ind].tenhang;
        this.dt = this.items[ind].dvt;
        this.sl = this.items[ind].soluong;
        this.dg = this.items[ind].dongia;
        this.items.splice(ind, 1);
    };
    TaoDonHangComponent.prototype.removeBk = function (index) {
        //console.log(this.bks[index]);
        // var bktemp: bk = this.bks[index];
        this.items.splice(index, 1);
        this.tong = 0;
        for (var i = 0; i < this.items.length; i++) {
            this.tong = this.tong + this.items[i].thanhtien;
        }
        console.log("tong: ", this.tong);
    };
    TaoDonHangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tao-don-hang',
            template: __webpack_require__("../../../../../src/app/tao-don-hang/tao-don-hang.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tao-don-hang/tao-don-hang.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__leftmenu_share_data_service__["a" /* DataService */]])
    ], TaoDonHangComponent);
    return TaoDonHangComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contain{\r\n    float: left;\r\n    position: relative;\r\n    width: 100%;\r\n    \r\n}\r\n.state{\r\n    width: 80%;\r\n    height: auto;\r\n    min-height: 35px;\r\n    margin: 20px auto;\r\n\r\n    \r\n  \r\n}\r\n.box-state{\r\n    min-height: 40px;\r\n    height: auto;\r\n    width: 100%;\r\n    float: left;\r\n    text-align: center;\r\n    padding-top: 1%;\r\n    float: left;\r\n    margin: 2px;\r\n    font-size: 13pt;\r\n}\r\n.donhang{\r\n    margin: 0px auto;\r\n    width: 80%;\r\n    max-width: 900px;\r\n}\r\n\r\n.tieude{\r\n    margin: 10px auto;\r\n    width: 300px;\r\n}\r\n.mahd{\r\n    float: right;\r\n    margin-right: 15%;\r\n    font-size: 10pt;\r\n\r\n}\r\n.mahd p{\r\n    margin: 0px;\r\n}\r\n.formdon{\r\n    clear: both;\r\n    width: 96%;\r\n    margin: 0px auto;\r\n}\r\n.inf{\r\n    font-size: 13pt;\r\n}\r\n\r\n.tenkh{\r\n    width: 40%;  \r\n    float: left;\r\n    margin-right: 22px;\r\n    \r\n}\r\n.bt-l{\r\n    border-bottom: 1px rgba(0, 0, 0, 0.171);\r\n    border-bottom-style:  dotted;\r\n\r\n}\r\n.sdt{\r\n    width: 20%;     \r\n}\r\n.diachi{\r\n    width: 80%;\r\n    margin-left: 150px;\r\n}\r\n.fl-l{\r\n    float: left;\r\n}\r\n.fl-r{\r\n    float: right;\r\n}\r\n.mg-l{ \r\n    margin-left: 15px;\r\n}\r\n.mg-r{\r\n    margin-right: 10px;\r\n}\r\n.space{\r\n    margin-right: 30px;\r\n}\r\n.add-donhang{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n    padding-left: 15px;\r\n}\r\n.slect{\r\n    width: 27%;  \r\n}\r\n.dvt{\r\n    width: 12%;\r\n \r\n}\r\n.sl{\r\n    width: 20%;\r\n   \r\n}\r\n.dg{\r\n    width: 23%;\r\n}\r\n\r\n.other{\r\n    width: 96%;\r\n    margin: 0px auto;\r\n    padding-left: 15px;\r\n}\r\nth{\r\n    text-align: center;\r\n    font-size: 13pt;\r\n    font-weight:  bold;\r\n}\r\n.tbl-stt{\r\n    width: 3%;\r\n}\r\n.tbl-tenhang{\r\n    width: 30%;\r\n}\r\n.tbl-dvt{\r\n    width: 10%;\r\n}\r\n.tbl-soluong{\r\n    width: 17%;\r\n}\r\n.tbl-dongia{\r\n    width: 19%;\r\n}\r\n\r\n.txt-center{\r\n    text-align: center;\r\n}\r\n.txt-right{\r\n    text-align: right;\r\n}\r\n.sign{\r\n    float: left;\r\n    margin-left: 7%;\r\n    \r\n}\r\n.driver{\r\n    float: right;\r\n    margin-right: 7%;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-narbar></app-narbar>\n<div class=\"contain\">\n  <div *ngFor='let donhang of donhangs'>\n    <div *ngIf=\"donhang.id === id\">\n      <div class=\"donhang\">\n        <div class=\"state\" >\n          <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Đã giao'\" style=\"background-color:green; color: #ffffff \">{{donhang.trangthai}}</div>\n          <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Chưa giao'\" style=\"background-color:rgb(165, 7, 7); color: #ffffff\">{{donhang.trangthai}}</div>\n          <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Đơn bị hủy'\" style=\"background-color:rgb(0, 0, 0); color: #ffffff\">{{donhang.trangthai}}</div>\n          <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Đang bốc hàng'|| donhang.trangthai=='Đang đi giao' \" style=\"background-color:rgb(253, 186, 0);color: #ffffff\">{{donhang.trangthai}}</div>\n        </div>\n        <div class=\"tieude\">\n          <h1>Hóa đơn bán hàng</h1>\n          \n        </div>\n        <br>\n        <div class=\"mahd\">\n          <p>Mã HD: {{donhang.id}}</p>\n          <p>Ngày lập: {{donhang.ngaytao|date}}</p>\n          <p>Ngày giao hàng: {{donhang.ngaygiao|date}}</p>\n        </div>\n\n        <div class=\"formdon\">\n          <br>\n          <p class=\"inf fl-l mg-l mg-r\">Tên khách hàng: </p>\n          <p class=\"tenkh inf fl-l mg-r space\">{{donhang.kh.tenkh}} </p>\n          <p class=\"inf fl-l mg-r mg-r mg-l\">SĐT: </p>\n          <p class=\"SDT inf\">{{donhang.kh.sdt}}</p>\n          <p class=\"inf fl-l mg-l mg-r\">Địa chỉ: </p>\n          <p class=\"diachi inf\">{{donhang.kh.dc}}</p>\n          <hr>\n\n        </div>\n        <div class=\"bangke\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th class=\"tbl-stt\">STT</th>\n                <th class=\"tbl-tenhang\">Tên hàng</th>\n                <th class=\"tbl-dvt\">ĐVT</th>\n                <th class=\"tbl-soluong\">Số lượng</th>\n                <th class=\"tbl-dongia\">Đơn giá</th>\n                <th class=\"tbl-thanhtien\">Thành tiền</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor='let b of bk, let ind = index'>\n                <td class=\"txt-center\">{{ind+1}}</td>\n                <td>{{b.mathang.tenhang}}</td>\n                <td class=\"txt-center\">{{b.mathang.dvt}}</td>\n                <td>{{b.soluong}}</td>\n                <td class=\"txt-right\">{{b.mathang.dongia}}</td>\n                <td class=\"txt-right\">{{b.thanhtien}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"5\">Tổng cộng</td>\n                <td class=\"txt-right\">{{donhang.tong}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"5\">Đã thanh toán</td>\n                <td class=\"txt-right\">{{donhang.thanhtoan}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"5\">Còn nợ lại</td>\n                <td class=\"txt-right\">{{donhang.nolai}}</td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n        <div class=\"sign\">\n          Người nhận hàng\n          <br>\n          <img>\n        </div>\n        <div class=\"driver\">\n\n          Người giao hàng\n          <br> {{donhang.laixe}}\n          <br>Xe {{donhang.xe.bienso}}\n        </div>\n\n        <div class=\"cn-tt\">\n          <div class=\"state\"></div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leftmenu_share_data_service__ = __webpack_require__("../../../../../src/app/leftmenu/share/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewDetailComponent = (function () {
    function ViewDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.donhangs = [];
        this.bk = [];
        this.id = "";
    }
    ViewDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            _this.id = param.get('id');
            console.log('id', _this.id);
            return _this.id;
        });
        this.dataService.getBk(this.id).subscribe(function (bk) {
            _this.bk = bk;
        });
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
        });
        // for(let i=0; i<this.dataService.donhangs.length; i++){
        //   if(this.dataService.donhangs[i].id==this.id){
        //     this.donhang = this.dataService.donhangs[i];
        //   }
        // }
        // for(let i=0; i<this.dataService.bks.length; i++){
        //   if(this.dataService.bks[i].id==this.id){
        //     this.bk.push( this.dataService.bks[i]);
        //   }
        // }
    };
    ViewDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-detail',
            template: __webpack_require__("../../../../../src/app/view-detail/view-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-detail/view-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__leftmenu_share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ViewDetailComponent);
    return ViewDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-donhang/view-donhang.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contain{\r\n    width: 100%;\r\n    margin: 0px auto;\r\n    float: left;\r\n}\r\n.view{\r\n    width: 45%; \r\n    margin: 2.5%;\r\n    float: left;\r\n    border: 2px solid #f3f3f3;\r\n    border-radius: 4px;\r\n    box-shadow: #555 1px 1px 8px 1px;\r\n    background-color: rgb(253, 251, 245)\r\n    \r\n}\r\n.view-each{\r\n    width: 75%;\r\n    border-right:2px solid #c0bfbf; \r\n    float: left;\r\n    min-height: 450px ;\r\n    max-height: 450px;\r\n}\r\n\r\na:hover{\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n.view-state{\r\n    float: left;\r\n    width: 25%;\r\n}\r\n.sign{\r\n    float: left;\r\n    margin-left: 7%;\r\n    \r\n}\r\n.driver{\r\n    float: right;\r\n    margin-right: 7%;\r\n    text-align: center;\r\n}\r\n.title-hoadon{\r\n    text-align: center;\r\n  \r\n}\r\n.fl-l{\r\n    float: left;\r\n}\r\n.fl-r{\r\n    float: right;\r\n}\r\n.mg-l{ \r\n    margin-left: 15px;\r\n}\r\n.mg-r{\r\n    margin-right: 10px;\r\n}\r\n.space{\r\n    margin-right: 30px;\r\n}\r\nth{\r\n    text-align: center;\r\n    font-size: 9.5pt;\r\n    \r\n}\r\n.bangke{\r\n    margin: 5px;\r\n    width: 98%;\r\n    min-height: 50%;\r\n}\r\n.bangke .tbl-stt{\r\n    width: 1%;\r\n    padding: 7px 3px;\r\n    \r\n}\r\n.tbl-tenhang{\r\n    width: 30%;\r\n    padding: 7px 3px;\r\n}\r\n.tbl-dvt{\r\n    width: 10%;\r\n    padding: 7px 3px;\r\n}\r\n.tbl-soluong{\r\n    width: 15%;\r\n    padding: 7px 3px;\r\n}\r\n.tbl-dongia{\r\n    width: 15%;\r\n    padding: 7px 3px;\r\n}\r\n.tbl-thanhtien{\r\n    padding: 7px 3px;\r\n}\r\n\r\n.txt-center{\r\n    text-align: center;\r\n}\r\n.txt-right{\r\n    text-align: right;\r\n}\r\n.box-state{\r\n    height: 40px;\r\n    border-bottom: 2px solid #f7f4f4;\r\n    text-align: center;\r\n    padding-top: 5%;\r\n    font-weight: 600;\r\n\r\n}\r\n.box-ngaytao{\r\n    padding: 5px;\r\n    text-align: center;\r\n    background-color: rgb(250, 223, 191);\r\n}\r\n.box-ngaygiao{\r\n    padding: 5px;\r\n    text-align: center;\r\n    background-color: rgb(212, 229, 245);\r\n}\r\n.box-thanhtoan{\r\n    padding: 5px;\r\n    text-align: center;\r\n    background-color: rgb(177, 212, 214);\r\n}\r\n.box-nolai{\r\n    padding: 5px;\r\n    text-align: center;\r\n    background-color: rgb(236, 190, 184);\r\n}\r\nhr{\r\n    margin: 0px;\r\n}\r\n.box-btn{\r\n    margin: 0px auto;\r\n    text-align: center;\r\n}\r\n.btn{\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-donhang/view-donhang.component.html":
/***/ (function(module, exports) {

module.exports = "<app-narbar>\n</app-narbar>\n\n<div class=\"contain\">\n\n  <div *ngFor=\"let donhang of donhangs\">\n    <div class=\"view\" *ngIf=\"donhang.trangthai == state || state == 'Tất cả'\">\n      <a routerLink=\"{{donhang.id}}\" class=\"view-each\">\n        <div class=\"title-hoadon\">\n          <h3>Hoá đơn bán hàng</h3>\n\n        </div>\n        <div class=\"info-kh\">\n          <p class=\"fl-l mg-l mg-r\">Tên khách hàng: </p>\n          <p class=\"tenkh fl-l mg-r space\">{{donhang.kh.tenkh}} </p>\n          <p class=\"fl-l mg-r mg-r mg-l\">SĐT: </p>\n          <p class=\"SDT\">{{donhang.kh.sdt}}</p>\n          <p class=\"fl-l mg-l mg-r\">Địa chỉ: </p>\n          <p class=\"diachi\">{{donhang.kh.dc}}</p>\n          <div class=\"bangke\">\n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th class=\"tbl-stt\">STT</th>\n                  <th class=\"tbl-tenhang\">Tên hàng</th>\n                  <th class=\"tbl-dvt\">ĐVT</th>\n                  <th class=\"tbl-soluong\">Số lượng</th>\n                  <th class=\"tbl-dongia\">Đơn giá</th>\n                  <th class=\"tbl-thanhtien\">Thành tiền</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let bk of bk, let ind = index\">\n\n                  <td *ngIf=\"bk.id == donhang.id\" class=\"txt-center\"></td>\n                  <td *ngIf=\"bk.id == donhang.id\"> {{bk.mathang.tenhang}}</td>\n                  <td *ngIf=\"bk.id == donhang.id \" class=\"txt-center\">{{bk.mathang.dvt}}</td>\n                  <td *ngIf=\"bk.id == donhang.id\">{{bk.soluong}}</td>\n                  <td *ngIf=\"bk.id == donhang.id\" class=\"txt-right\">{{bk.mathang.dongia}}</td>\n                  <td *ngIf=\"bk.id == donhang.id\" class=\"txt-right\">{{bk.thanhtien}}</td>\n\n                </tr>\n\n                <tr>\n                  <td colspan=\"5\">Tổng cộng</td>\n                  <td class=\"txt-right\">{{donhang.tong}}</td>\n                </tr>\n\n            </table>\n\n          </div>\n          <div class=\"sign\">\n            Người nhận hàng\n            <br>\n            <img>\n          </div>\n          <div class=\"driver\">\n            Người giao hàng\n            <br> {{donhang.laixe}}\n            <br> {{donhang.xe.bienso}}\n          </div>\n\n        </div>\n      </a>\n\n\n      <div class=\"view-state\">\n        <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Đã giao'\" style=\"background-color:green; color: #ffffff \">{{donhang.trangthai}}</div>\n        <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Chưa giao'\" style=\"background-color:rgb(165, 7, 7); color: #ffffff\">{{donhang.trangthai}}</div>\n        <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Đơn bị hủy'\" style=\"background-color:rgb(0, 0, 0); color: #ffffff\">{{donhang.trangthai}}</div>\n        <div class=\"box-state\" *ngIf=\"donhang.trangthai=='Đang bốc hàng'|| donhang.trangthai=='Đang đi giao' \" style=\"background-color:rgb(253, 186, 0);color: #ffffff\">{{donhang.trangthai}}</div>\n        <br>\n        <div class=\"box-ngaytao\"> Ngày tạo\n          <br>{{donhang.ngaytao|date:'dd/MM/yyyy'}}</div>\n        <hr>\n        <div class=\"box-ngaygiao\">Ngày giao hàng\n          <br>{{donhang.ngaygiao|date:'dd/MM/yyyy' }}</div>\n        <hr>\n        <div class=\"box-thanhtoan\">Đã thanh toán\n          <br> {{donhang.thanhtoan}}</div>\n        <hr>\n        <div class=\"box-nolai\">Còn nợ lại\n          <br>{{donhang.nolai}}</div>\n        <hr>\n        <br>\n        <div class=\"box-btn\" *ngIf=\"donhang.trangthai != 'Đã giao'&& donhang.trangthai != 'Đơn bị hủy'\">\n          <a class=\"a-btn\" routerLink=\"/sua-don-hang/Sửa đơn hàng/{{donhang.id}}\">\n            <button class=\"btn\" >Sửa</button>\n          </a>\n          <button class=\"btn\" (click)=\"cancel(donhang.id)\">Hủy đơn</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view-donhang/view-donhang.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDonhangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leftmenu_share_data_service__ = __webpack_require__("../../../../../src/app/leftmenu/share/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewDonhangComponent = (function () {
    function ViewDonhangComponent(route, dataService) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.state = "";
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
            //console.log("viewdonhang",this.donhangs[0].ngaygiao.getDate().toString());
        });
        this.dataService.getBks().subscribe(function (bks) {
            _this.bk = bks;
            // console.log("viewdonhang-bk",this.bk);
        });
    }
    ViewDonhangComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            return _this.state = param.get('state');
        });
        console.log("state", this.state);
    };
    ViewDonhangComponent.prototype.cancel = function (id) {
        for (var i = 0; i < this.donhangs.length; i++) {
            if (this.donhangs[i].id === id) {
                this.donhangs[i].trangthai = "Đơn bị hủy";
                this.dataService.updateDh(this.donhangs[i]);
                this.dataService.countState(this.donhangs);
            }
        }
    };
    ViewDonhangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-donhang',
            template: __webpack_require__("../../../../../src/app/view-donhang/view-donhang.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-donhang/view-donhang.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__leftmenu_share_data_service__["a" /* DataService */]])
    ], ViewDonhangComponent);
    return ViewDonhangComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBLzzMBHCJmHPe8JHRBcJfImHmZAinQA8M",
        authDomain: "quanlygiaohang-cb907.firebaseapp.com",
        databaseURL: "https://quanlygiaohang-cb907.firebaseio.com",
        projectId: "quanlygiaohang-cb907",
        storageBucket: "quanlygiaohang-cb907.appspot.com",
        messagingSenderId: "744669230842"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map