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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<scene></scene>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scene_scene_component__ = __webpack_require__("../../../../../src/app/scene/scene.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__scene_scene_component__["a" /* SceneComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/scene/js/EnableThreeExamples.js":
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__("../../../../three/build/three.module.js");

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #canvas (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\">\r\n</canvas>"

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_EnableThreeExamples__ = __webpack_require__("../../../../../src/app/scene/js/EnableThreeExamples.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_EnableThreeExamples___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_EnableThreeExamples__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_examples_js_controls_OrbitControls__ = __webpack_require__("../../../../three/examples/js/controls/OrbitControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_examples_js_controls_OrbitControls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_three_examples_js_controls_OrbitControls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader__ = __webpack_require__("../../../../three/examples/js/loaders/ColladaLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SceneComponent = (function () {
    function SceneComponent() {
        this.fieldOfView = 60;
        this.nearClippingPane = 1;
        this.farClippingPane = 1100;
        this.render = this.render.bind(this);
        this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
    }
    Object.defineProperty(SceneComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    SceneComponent.prototype.createScene = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.add(new __WEBPACK_IMPORTED_MODULE_1_three__["AxisHelper"](200));
        var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["ColladaLoader"]();
        loader.load('assets/model/multimaterial.dae', this.onModelLoadingCompleted);
    };
    SceneComponent.prototype.onModelLoadingCompleted = function (collada) {
        var modelScene = collada.scene;
        this.scene.add(modelScene);
        this.render();
    };
    SceneComponent.prototype.createLight = function () {
        var light = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, 100);
        this.scene.add(light);
        var light = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, -100);
        this.scene.add(light);
    };
    SceneComponent.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio();
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        // Set position and look at
        this.camera.position.x = 10;
        this.camera.position.y = 10;
        this.camera.position.z = 100;
    };
    SceneComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    SceneComponent.prototype.startRendering = function () {
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_1_three__["PCFSoftShadowMap"];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        var component = this;
        (function render() {
            //requestAnimationFrame(render);
            component.render();
        }());
    };
    SceneComponent.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    SceneComponent.prototype.addControls = function () {
        this.controls = new __WEBPACK_IMPORTED_MODULE_1_three__["OrbitControls"](this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.addEventListener('change', this.render);
    };
    /* EVENTS */
    SceneComponent.prototype.onMouseDown = function (event) {
        console.log("onMouseDown");
        event.preventDefault();
        // Example of mesh selection/pick:
        var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        var mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);
        var obj = [];
        this.findAllObjects(obj, this.scene);
        var intersects = raycaster.intersectObjects(obj);
        console.log("Scene has " + obj.length + " objects");
        console.log(intersects.length + " intersected objects found");
        intersects.forEach(function (i) {
            console.log(i.object); // do what you want to do with object
        });
    };
    SceneComponent.prototype.findAllObjects = function (pred, parent) {
        var _this = this;
        // NOTE: Better to keep separate array of selected objects
        if (parent.children.length > 0) {
            parent.children.forEach(function (i) {
                pred.push(i);
                _this.findAllObjects(pred, i);
            });
        }
    };
    SceneComponent.prototype.onMouseUp = function (event) {
        console.log("onMouseUp");
    };
    SceneComponent.prototype.onResize = function (event) {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        console.log("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    };
    SceneComponent.prototype.onKeyPress = function (event) {
        console.log("onKeyPress: " + event.key);
    };
    /* LIFECYCLE */
    SceneComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.addControls();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], SceneComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SceneComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SceneComponent.prototype, "onKeyPress", null);
    SceneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'scene',
            template: __webpack_require__("../../../../../src/app/scene/scene.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scene/scene.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SceneComponent);
    return SceneComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map