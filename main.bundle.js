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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);\n*, *:before, *:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  background: #C5DDEB;\n  font: 14px/20px \"Lato\", Arial, sans-serif;\n  padding: 40px 0;\n  color: white;\n}\n.container {\n  margin: 0 auto;\n  width: 750px;\n  background: #444753;\n  border-radius: 5px;\n}\n.people-list {\n  width: 260px;\n  float: left;\n}\n.people-list .search {\n  padding: 20px;\n}\n.people-list input {\n  border-radius: 3px;\n  border: none;\n  padding: 14px;\n  color: white;\n  background: #6A6C75;\n  width: 90%;\n  font-size: 14px;\n}\n.people-list .fa-search {\n  position: relative;\n  left: -25px;\n}\n.people-list ul {\n  padding: 20px;\n  height: 770px;\n}\n.people-list ul li {\n  padding-bottom: 20px;\n}\n.people-list img {\n  float: left;\n}\n.people-list .about {\n  float: left;\n  margin-top: 8px;\n}\n.people-list .about {\n  padding-left: 8px;\n}\n.people-list .status {\n  color: #92959E;\n}\n.chat {\n  width: 490px;\n  float: left;\n  background: #F2F5F8;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: #434651;\n}\n.chat .chat-header {\n  padding: 20px;\n  border-bottom: 2px solid white;\n}\n.chat .chat-header img {\n  float: left;\n}\n.chat .chat-header .chat-about {\n  float: left;\n  padding-left: 10px;\n  margin-top: 6px;\n}\n.chat .chat-header .chat-with {\n  font-weight: bold;\n  font-size: 16px;\n}\n.chat .chat-header .chat-num-messages {\n  color: #92959E;\n}\n.chat .chat-header .fa-star {\n  float: right;\n  color: #D8DADF;\n  font-size: 20px;\n  margin-top: 12px;\n}\n.chat .chat-history {\n  padding: 30px 30px 20px;\n  border-bottom: 2px solid white;\n  overflow-y: scroll;\n  height: 575px;\n}\n.chat .chat-history .message-data {\n  margin-bottom: 15px;\n}\n.chat .chat-history .message-data-time {\n  color: #a8aab1;\n  padding-left: 6px;\n}\n.chat .chat-history .message {\n  color: white;\n  padding: 18px 20px;\n  line-height: 26px;\n  font-size: 16px;\n  border-radius: 7px;\n  margin-bottom: 30px;\n  width: 90%;\n  position: relative;\n}\n.chat .chat-history .message:after {\n  bottom: 100%;\n  left: 7%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #86BB71;\n  border-width: 10px;\n  margin-left: -10px;\n}\n.chat .chat-history .my-message {\n  background: #86BB71;\n}\n.chat .chat-history .other-message {\n  background: #94C2ED;\n}\n.chat .chat-history .other-message:after {\n  border-bottom-color: #94C2ED;\n  left: 93%;\n}\n.chat .chat-message {\n  padding: 30px;\n}\n.chat .chat-message textarea {\n  width: 100%;\n  border: none;\n  padding: 10px 20px;\n  font: 14px/22px \"Lato\", Arial, sans-serif;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  resize: none;\n}\n.chat .chat-message .fa-file-o, .chat .chat-message .fa-file-image-o {\n  font-size: 16px;\n  color: gray;\n  cursor: pointer;\n}\n.chat .chat-message button {\n  float: right;\n  color: #94C2ED;\n  font-size: 16px;\n  text-transform: uppercase;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  background: #F2F5F8;\n}\n.chat .chat-message button:hover {\n  color: #75b1e8;\n}\n.online, .offline, .me {\n  margin-right: 3px;\n  font-size: 10px;\n}\n.online {\n  color: #86BB71;\n}\n.offline {\n  color: #E38968;\n}\n.me {\n  color: #94C2ED;\n}\n.align-left {\n  text-align: left;\n}\n.align-right {\n  text-align: right;\n}\n.float-right {\n  float: right;\n}\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)]=\"anotherid\">\n<h1>My id - {{mypeerid}}</h1>\n<button (click)=\"connect()\">Connect</button>\n<button (click)=\"videoconnect()\">VideoChat</button>\n<video [hidden]=\"startCall\" width=\"100px\" #myvideo></video>\n<video [hidden]=\"startCall\" width=\"800px\" #revideo></video>\n<div class=\"container clearfix\">\n  <div class=\"people-list\" id=\"people-list\" style=\"float:left\">\n    <div class=\"search\">\n      <input type=\"text\" placeholder=\"search\" />\n      <i class=\"fa fa-search\"></i>\n    </div>\n    <ul class=\"list\">\n      <li class=\"clearfix\">\n        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg\" alt=\"avatar\" />\n        <div class=\"about\">\n          <div class=\"name\">Vincent Porter</div>\n          <div class=\"status\">\n            <i class=\"fa fa-circle online\"></i> online\n          </div>\n        </div>\n      </li>         \n      <li class=\"clearfix\">\n        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg\" alt=\"avatar\" />\n        <div class=\"about\">\n          <div class=\"name\">Peyton Mckinney</div>\n          <div class=\"status\">\n            <i class=\"fa fa-circle online\"></i> online\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  \n  <div class=\"chat\" style=\"float:left;\n    width: 430px;\">\n    <div class=\"chat-header clearfix\">\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg\" alt=\"avatar\" />\n      \n      <div class=\"chat-about\">\n        <div class=\"chat-with\">Chat with Vincent Porter</div>\n        <div class=\"chat-num-messages\">already 1 902 messages</div>\n      </div>\n      <i class=\"fa fa-star\"></i>\n     \n     <a  href=\"javascript:void(0)\"><img src=\"../assets/image/image.png\" width=\"50px\" alt=\"\"></a>\n     <a *ngIf=\"Oncalled\"  href=\"javascript:void(0)\"><img (click)=\"startRecord()\" src=\"../assets/image/calling.gif\" alt=\"\"></a>\n    </div> <!-- end chat-header -->\n    <div class=\"chat-history\">\n      <ul>\n        <li class=\"clearfix\" *ngFor=\"let user in \">\n          <div class=\"message-data align-right\">\n            <span class=\"message-data-time\" >10:10 AM, Today</span> &nbsp; &nbsp;\n            <span class=\"message-data-name\" >Olia</span> <i class=\"fa fa-circle me\"></i>\n            \n          </div>\n          <div class=\"message other-message float-right\">\n            Hi Vincent, how are you? How is the project coming along?\n          </div>\n        </li>\n        \n        <li>\n          <div class=\"message-data\">\n            <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n            <span class=\"message-data-time\">10:12 AM, Today</span>\n          </div>\n          <div class=\"message my-message\">\n            Are we meeting today? Project has been already finished and I have results to show you.\n          </div>\n        </li>\n        \n        <li class=\"clearfix\">\n          <div class=\"message-data align-right\">\n            <span class=\"message-data-time\" >10:14 AM, Today</span> &nbsp; &nbsp;\n            <span class=\"message-data-name\" >Olia</span> <i class=\"fa fa-circle me\"></i>\n            \n          </div>\n          <div class=\"message other-message float-right\">\n            Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?\n          </div>\n        </li>\n        \n        <li>\n          <div class=\"message-data\">\n            <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n            <span class=\"message-data-time\">10:20 AM, Today</span>\n          </div>\n          <div class=\"message my-message\">\n            Actually everything was fine. I'm very excited to show this to our team.\n          </div>\n        </li>\n        \n        <li>\n          <div class=\"message-data\">\n            <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n            <span class=\"message-data-time\">10:31 AM, Today</span>\n          </div>\n          <i class=\"fa fa-circle online\"></i>\n          <i class=\"fa fa-circle online\" style=\"color: #AED2A6\"></i>\n          <i class=\"fa fa-circle online\" style=\"color:#DAE9DA\"></i>\n        </li>\n        \n      </ul>\n      \n    </div> <!-- end chat-history -->\n    \n    <div class=\"chat-message clearfix\">\n      <textarea name=\"message-to-send\" id=\"message-to-send\" placeholder =\"Type your message\" rows=\"3\"></textarea>\n              \n      <i class=\"fa fa-file-o\"></i> &nbsp;&nbsp;&nbsp;\n      <i class=\"fa fa-file-image-o\"></i>\n      \n      <button>Send</button>\n\n    </div> <!-- end chat-message -->\n    \n  </div> <!-- end chat -->\n  \n</div> <!-- end container -->\n\n<script id=\"message-template\" type=\"text/x-handlebars-template\">\n<li class=\"clearfix\">\n  <div class=\"message-data align-right\">\n    <span class=\"message-data-time\" >{{time}}, Today</span> &nbsp; &nbsp;\n    <span class=\"message-data-name\" >Olia</span> <i class=\"fa fa-circle me\"></i>\n  </div>\n  <div class=\"message other-message float-right\">\n    {{messageOutput}}\n  </div>\n</li>\n</script>\n\n<script id=\"message-response-template\" type=\"text/x-handlebars-template\">\n<li>\n  <div class=\"message-data\">\n    <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n    <span class=\"message-data-time\">{{time}}, Today</span>\n  </div>\n  <div class=\"message my-message\">\n    {{response}}\n  </div>\n</li>\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(chatservice) {
        this.chatservice = chatservice;
        this.title = 'app';
        this.startCall = true;
        this.Oncalled = false;
        this.stRecord = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peer = new Peer({ key: 'n90yu2ztuf03sor' });
        setTimeout(function () {
            _this.mypeerid = _this.peer.id;
        }, 3000);
        this.peer.on('connection', function (conn) {
            alert(conn);
            conn.on('data', function (data) {
                console.log(data);
            });
        });
        // this.chatservice.connect()
        this.peer.on('call', function (call) {
            _this.Oncalled = true;
            _this.waiting().then(function (res) {
                if (res === 1) {
                    var video_1 = _this.myVideo.nativeElement;
                    openStream().then(function (stream) {
                        call.answer(stream);
                        video_1.src = URL.createObjectURL(stream);
                        _this.startCall = false;
                        video_1.play();
                        call.on("stream", function (remoteStream) {
                            var videor = _this.reVideo.nativeElement;
                            videor.src = URL.createObjectURL(remoteStream);
                            videor.play();
                        });
                    });
                }
            });
        });
    };
    AppComponent.prototype.startRecord = function () {
        this.stRecord = true;
    };
    AppComponent.prototype.connect = function () {
        var _this = this;
        this.stRecord = true;
        this.startCall = false;
        // var conn = this.peer.connect(this.anotherid);
        // conn.on('open', function () {
        //   conn.send('Message from that id');
        // });
        var video = this.reVideo.nativeElement;
        openStream().then(function (stream) {
            console.log(JSON.stringify(stream));
            video.src = URL.createObjectURL(stream);
            video.play();
            _this.Oncalled = true;
            var call = _this.peer.call(_this.anotherid, stream);
            call.on("stream", function (remoteStream) {
                var videor = _this.myVideo.nativeElement;
                console.log(JSON.stringify(remoteStream));
                videor.src = URL.createObjectURL(remoteStream);
                videor.play();
            });
        });
    };
    AppComponent.prototype.waiting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.stRecord === true) {
                alert("1234");
                resolve(1);
            }
            else {
                setTimeout(function () {
                    resolve(_this.waiting());
                }, 2000);
            }
        });
    };
    AppComponent.prototype.ckeckCkickAs = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('myvideo'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "myVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('revideo'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "reVideo", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], AppComponent);
    return AppComponent;
}());

function openStream() {
    var config = {
        audio: false,
        video: true
    };
    return navigator.mediaDevices.getUserMedia(config);
}


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    ChatService.prototype.connect = function () {
        var _this = this;
        new Promise(function (resolve, reject) {
            // If you aren't familiar with environment variables then
            // you can hard code `environment.ws_url` as `http://localhost:5000`
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://localhost:3000");
            // We define our observable which will observe any incoming messages
            // from our socket.io server.
            _this.socket.on('userList', function (data) {
                console.log(data);
                console.log("Received message from Websocket Server");
                resolve("connect");
            });
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
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
    production: false
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
///<reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map