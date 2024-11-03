"use strict";
(self["webpackChunkmovie_app"] = self["webpackChunkmovie_app"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _movieapp_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieapp/components/header/header.component */ 3363);
/* harmony import */ var _movieapp_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieapp/components/footer/footer.component */ 1059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _movieapp_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _movieapp_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _movieapp_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieapp/pages/home/home.component */ 733);
/* harmony import */ var _todo_pages_todo_home_todo_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/pages/todo-home/todo-home.component */ 6686);
/* harmony import */ var _movieapp_pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieapp/pages/movies/movies.component */ 8181);
/* harmony import */ var _movieapp_pages_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movieapp/pages/tv-show/tv-show.component */ 6849);
/* harmony import */ var _movieapp_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movieapp/pages/about/about.component */ 2277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: '',
  redirectTo: 'tv-shows',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _movieapp_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'todo',
  component: _todo_pages_todo_home_todo_home_component__WEBPACK_IMPORTED_MODULE_1__.TodoHomeComponent
}, {
  path: 'movies',
  component: _movieapp_pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__.MoviesComponent
}, {
  path: 'tv-shows',
  component: _movieapp_pages_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_3__.TvShowComponent
}, {
  path: 'about',
  component: _movieapp_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 1059:
/*!****************************************************************!*\
  !*** ./src/app/movieapp/components/footer/footer.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 0,
    consts: [[1, "footer"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A9 2024 . All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  color: white;\n  width: 100%;\n  background-color: black;\n  height: 100px;\n  z-index: 10;\n}\n.footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7QUFDUiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG4gICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 1869:
/*!************************************************************!*\
  !*** ./src/app/movieapp/components/grid/grid.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridComponent: () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list-item/list-item.component */ 1743);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2136);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);







const _c0 = ["grid"];
const _forTrack0 = ($index, $item) => $item.title;
function GridComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx);
  }
}
function GridComponent_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-list-item", 6);
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", data_r1.title)("overView", data_r1.overview)("releaseDate", data_r1.release_date);
  }
}
function GridComponent_Conditional_2_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "There are no items to display.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@listStagger", undefined);
  }
}
function GridComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2, 0)(2, "div", 4)(3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](4, GridComponent_Conditional_2_For_5_Template, 1, 3, "app-list-item", 6, _forTrack0, false, GridComponent_Conditional_2_ForEmpty_6_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@listStagger", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx);
  }
}
function GridComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No movies found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
class GridComponent {
  constructor(elRef) {
    this.elRef = elRef;
    this.currentPage = 1;
    this.data$ = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.error$ = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.collectionName$ = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.loadNextPage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    this.viewChildGrid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.viewChild)('grid');
  }
  ngAfterViewInit() {
    if (this.viewChildGrid && this.viewChildGrid().nativeElement) {
      const gridElement = this.viewChildGrid().nativeElement.querySelector('.grid-resize');
      this.scrollSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(gridElement, 'scroll').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(200)).subscribe(() => this.onScroll());
      this.onScroll();
    }
  }
  onScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const maxScrollPosition = document.body.scrollHeight;
    if (scrollPosition >= maxScrollPosition * 0.99) {
      this.loadNextPage.emit({
        collectionName: this.collectionName$(),
        page: ++this.currentPage
      });
    }
  }
  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function GridComponent_Factory(t) {
    return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GridComponent,
    selectors: [["app-grid"]],
    viewQuery: function GridComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuerySignal"](ctx.viewChildGrid, _c0, 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryAdvance"]();
      }
    },
    inputs: {
      data$: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "data$"],
      error$: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "error$"],
      collectionName$: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "collectionName$"]
    },
    outputs: {
      loadNextPage: "loadNextPage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 9,
    consts: [["grid", ""], [1, "error"], [1, "grid"], [1, "no-movies"], [1, "grid-resize"], [1, "grid-scroll", "no-scroll"], [1, "grid-item", 3, "title", "overView", "releaseDate"], [1, "grid-item"]],
    template: function GridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GridComponent_Conditional_0_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GridComponent_Conditional_2_Template, 7, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GridComponent_Conditional_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.error$())) ? 0 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.data$())) ? 2 : -1, tmp_1_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx.data$())) == null ? null : tmp_2_0.length) === 0 ? 4 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__.ListItemComponent],
    styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n}\n.grid[_ngcontent-%COMP%]   .grid-resize[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  height: 90vh;\n  overflow: auto;\n}\n.grid[_ngcontent-%COMP%]   .grid-resize[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none; \n\n}\n.grid[_ngcontent-%COMP%]   .grid-resize[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  display: none; \n\n}\n.grid[_ngcontent-%COMP%]   .grid-resize[_ngcontent-%COMP%]::-moz-scrollbar {\n  display: none; \n\n}\n.grid[_ngcontent-%COMP%]   .grid-resize[_ngcontent-%COMP%]::-moz-scrollbar-thumb {\n  display: none; \n\n}\n.grid[_ngcontent-%COMP%]   .grid-resize[_ngcontent-%COMP%]   .grid-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUEsRUFBQSxvREFBQTtBQUNOO0FBRUk7RUFDRSxhQUFBLEVBQUEsMERBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQSxFQUFBLGtDQUFBO0FBRE47QUFJSTtFQUNFLGFBQUEsRUFBQSx3Q0FBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSE4iLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmdyaWQtcmVzaXplIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIHNjcm9sbGJhciBvbiBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHRoZSBzY3JvbGxiYXIgdGh1bWIgb24gQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tb3otc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgc2Nyb2xsYmFyIG9uIEZpcmVmb3ggKi9cclxuICAgIH1cclxuXHJcbiAgICAmOjotbW96LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBGaXJlZm94ICovXHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtc2Nyb2xsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [
      // Fade in error and no-movies messages
      (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('3000ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1
      }))])]),
      // Staggered fade-in and slide up for list items
      (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('listStagger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0
      }), {
        optional: true
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.stagger)('500ms', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('.5s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: .5
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1
      })]))]), {
        optional: true
      })])])]
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 3363:
/*!****************************************************************!*\
  !*** ./src/app/movieapp/components/header/header.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _store_search_search_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/search/search.action */ 7639);
/* harmony import */ var _validators_search_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/search.validator */ 2691);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/popup.service */ 9706);








class HeaderComponent {
  constructor(store, popupService) {
    this.store = store;
    this.popupService = popupService;
    // protected drp = inject('container')
    this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      search: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _validators_search_validator__WEBPACK_IMPORTED_MODULE_1__.searchValidator])
    });
  }
  ngOnInit() {
    this.searchForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(item => item.search.length >= 3)).subscribe(query => {
      this.openPopup(query.search);
      this.store.dispatch(_store_search_search_action__WEBPACK_IMPORTED_MODULE_0__.getSearch({
        page: 1,
        query: query.search
      }));
    });
  }
  openPopup(query) {
    this.popupService.openPopup(true, query);
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_popup_service__WEBPACK_IMPORTED_MODULE_2__.PopupService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 15,
    vars: 1,
    consts: [[1, "header"], [1, "logo"], ["src", "../../assets/logo_bog.png", "alt", "go_stream_logo", "loading", "eager"], [1, "navigation"], ["href", "/movie-app/home", "routerLink", "/", 1, "btn", "--primary"], ["href", "/movie-app/movies", "routerLink", "/movies", 1, "btn", "--primary"], ["href", "/movie-app/tv-shows", "routerLink", "/tv-shows", 1, "btn", "--primary"], ["href", "/movie-app/about", "routerLink", "/about", 1, "btn", "--primary"], [3, "formGroup"], ["type", "text", "placeholder", "Search", "formControlName", "search", 1, "input", "__field"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "TV shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".header[_ngcontent-%COMP%] {\n  background-color: black;\n  top: 0;\n  padding: 10px;\n  display: flex;\n  position: sticky;\n  z-index: 10;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: auto;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: max-content;\n  color: white;\n  font-size: xx-large;\n}\n.header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  align-items: end;\n}\n.header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  width: max-content;\n  margin: auto;\n}\n.header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: gray;\n}\n@media (max-width: 800px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUdRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRFo7QUFHWTtFQUNJLFlBQUE7QUFEaEI7QUFJWTtFQUNJLFdBQUE7QUFGaEI7QUFTSTtFQXRDSjtJQXVDUSxzQkFBQTtFQU5OO0VBUU07SUFDSSxXQUFBO0VBTlY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbntcclxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGE6Zm9jdXMsIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 1743:
/*!**********************************************************************!*\
  !*** ./src/app/movieapp/components/list-item/list-item.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItemComponent: () => (/* binding */ ListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class ListItemComponent {
  constructor() {
    this.title = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.overView = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.releaseDate = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
  }
  static #_ = this.ɵfac = function ListItemComponent_Factory(t) {
    return new (t || ListItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ListItemComponent,
    selectors: [["app-list-item"]],
    inputs: {
      title: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "title"],
      overView: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "overView"],
      releaseDate: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "releaseDate"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 5,
    consts: [[1, "list-item"], ["src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eh5RRJ5l1pqHQDN1ubb1VAHaEx%26pid%3DApi&f=1&ipt=b913b28e9438f2bd3cb85f57d12ef2b9d336fc0f7868099cd0a8bad03b2dcbf6&ipo=images", "data-srcset", "image-small.jpg 320w, image-medium.jpg 640w, image-large.jpg 1024w", "data-sizes", "auto", "alt", "Image", "loading", "eager"]],
    template: function ListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "li")(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overView());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Release Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx.releaseDate()), "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".list-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  border-radius: 5px;\n  border: 1px solid black;\n  background-color: #f0f0f0;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1 1\"><rect width=\"100%\" height=\"100%\" fill=\"#f0f0f0\"/></svg>'); \n\n  background-size: cover;\n  background-position: center;\n  margin: 5px;\n}\n.list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: auto;\n  width: inherit;\n  list-style-type: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 18px;\n  text-align: center;\n  z-index: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 5px;\n}\n.list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:focus, .list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtLQUFBLEVBQUEsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxIDFcIj48cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIiNmMGYwZjBcIi8+PC9zdmc+Jyk7IC8qIFNldCBhIHBsYWNlaG9sZGVyIFNWRyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG5cclxuICBpbWc6Zm9jdXMsIGltZzpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 7205:
/*!************************************************************!*\
  !*** ./src/app/movieapp/components/list/list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListComponent: () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list-item/list-item.component */ 1743);





const _forTrack0 = ($index, $item) => $item.title;
function ListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx, "\n");
  }
}
function ListComponent_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-list-item", 5);
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", data_r1.title)("overView", data_r1.overview)("releaseDate", data_r1.release_date);
  }
}
function ListComponent_Conditional_2_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "There are no items to display.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 3)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](5, ListComponent_Conditional_2_For_6_Template, 1, 3, "app-list-item", 5, _forTrack0, false, ListComponent_Conditional_2_ForEmpty_7_Template, 2, 0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.collectionName());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx);
  }
}
function ListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No movies found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ListComponent {
  constructor(elRef) {
    this.elRef = elRef;
    this.isDragging = false;
    this.startX = 0;
    this.scrollX = 0;
    this.currentPage = 1;
    this.data$ = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.error$ = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.collectionName = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.loadNextPage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
  }
  ngAfterViewInit() {
    this.contentElement = this.elRef.nativeElement.querySelector('.list-scroll');
    this.contentElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.contentElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.contentElement.addEventListener('mouseup', this.onMouseUp.bind(this));
  }
  onMouseDown(event) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.scrollX = this.contentElement.scrollLeft;
  }
  onMouseMove(event) {
    if (this.isDragging) {
      const dx = event.clientX - this.startX;
      this.contentElement.scrollLeft = this.scrollX - dx;
      const scrollPosition = this.contentElement.scrollLeft + this.contentElement.clientWidth;
      const maxScrollPosition = this.contentElement.scrollWidth;
      if (scrollPosition >= maxScrollPosition * 0.6) {
        this.loadNextPage.emit({
          collectionName: this.collectionName(),
          page: ++this.currentPage
        });
      }
    }
  }
  onMouseUp() {
    this.isDragging = false;
  }
  static #_ = this.ɵfac = function ListComponent_Factory(t) {
    return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ListComponent,
    selectors: [["app-list"]],
    inputs: {
      data$: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "data$"],
      error$: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "error$"],
      collectionName: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "collectionName"]
    },
    outputs: {
      loadNextPage: "loadNextPage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 9,
    consts: [[1, "error"], [1, "list-basic"], [1, "no-movies"], [1, "list-title"], [1, "list-scroll", "no-scroll"], [3, "title", "overView", "releaseDate"]],
    template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ListComponent_Conditional_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_Conditional_2_Template, 8, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListComponent_Conditional_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.error$())) ? 0 : -1, tmp_0_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.data$())) ? 2 : -1, tmp_1_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx.data$())) == null ? null : tmp_2_0.length) === 0 ? 4 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__.ListItemComponent],
    styles: [".list-basic[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n}\n.list-basic[_ngcontent-%COMP%]   .list-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: relative;\n}\n.list-basic[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: xx-large;\n}\n.list-basic[_ngcontent-%COMP%]   .no-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none; \n\n}\n.list-basic[_ngcontent-%COMP%]   .no-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  display: none; \n\n}\n.list-basic[_ngcontent-%COMP%]   .no-scroll[_ngcontent-%COMP%]::-moz-scrollbar {\n  display: none; \n\n}\n.list-basic[_ngcontent-%COMP%]   .no-scroll[_ngcontent-%COMP%]::-moz-scrollbar-thumb {\n  display: none; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBLEVBQUEsb0RBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQSxFQUFBLDBEQUFBO0FBRko7QUFLRTtFQUNFLGFBQUEsRUFBQSxrQ0FBQTtBQUhKO0FBTUU7RUFDRSxhQUFBLEVBQUEsd0NBQUE7QUFKSiIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWJhc2ljIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIC5saXN0LXNjcm9sbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuXHJcbiAgLm5vLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgc2Nyb2xsYmFyIG9uIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLm5vLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgc2Nyb2xsYmFyIHRodW1iIG9uIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLm5vLXNjcm9sbDo6LW1vei1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgc2Nyb2xsYmFyIG9uIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgLm5vLXNjcm9sbDo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgc2Nyb2xsYmFyIHRodW1iIG9uIEZpcmVmb3ggKi9cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 3091:
/*!****************************************************************!*\
  !*** ./src/app/movieapp/components/pop-up/pop-up.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupComponent: () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_search_search_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/search/search.action */ 7639);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _store_search_search_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/search/search.selector */ 4400);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid/grid.component */ 1869);







class PopupComponent {
  constructor(store) {
    this.store = store;
    this.close = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
    this.query = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
  }
  ngOnInit() {
    this.store.dispatch(_store_search_search_action__WEBPACK_IMPORTED_MODULE_0__.getSearch({
      query: this.query(),
      page: 1
    }));
    this.collection$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_store_search_search_selector__WEBPACK_IMPORTED_MODULE_1__.selectAllSearch));
    this.error$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_store_search_search_selector__WEBPACK_IMPORTED_MODULE_1__.selectSearchsError));
  }
  handleScroll(event) {
    this.store.dispatch(_store_search_search_action__WEBPACK_IMPORTED_MODULE_0__.getSearch({
      query: this.query(),
      page: event.page
    }));
  }
  closePopup() {
    this.close.emit();
  }
  static #_ = this.ɵfac = function PopupComponent_Factory(t) {
    return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PopupComponent,
    selectors: [["app-pop-up"]],
    inputs: {
      query: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].SignalBased, "query"]
    },
    outputs: {
      close: "close"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [[1, "overlay", 3, "click"], [1, "popup", 3, "click"], [3, "loadNextPage", "collectionName$", "data$", "error$"], [3, "click"]],
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_Template_div_click_0_listener() {
          return ctx.closePopup();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_Template_div_click_1_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("loadNextPage", function PopupComponent_Template_app_grid_loadNextPage_2_listener($event) {
          return ctx.handleScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_Template_button_click_3_listener() {
          return ctx.closePopup();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collectionName$", "Popup")("data$", ctx.collection$)("error$", ctx.error$);
      }
    },
    dependencies: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent],
    styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.popup[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  z-index: 15;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvY29tcG9uZW50cy9wb3AtdXAvcG9wLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucG9wdXAge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgei1pbmRleDogMTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2545:
/*!*******************************************!*\
  !*** ./src/app/movieapp/config/config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseUrl: () => (/* binding */ baseUrl),
/* harmony export */   headers: () => (/* binding */ headers)
/* harmony export */ });
const baseUrl = "https://api.themoviedb.org/3";
const headers = {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODdhYTYzZGFjZjQ1OWUzODA1NGIyMzM4ODBmYTc5MCIsIm5iZiI6MTcyOTUxNDM4OS4yMDk3NzgsInN1YiI6IjY3MTY0YTUwYmQ5MWM4MzgyOWQ3NjI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m6KVI9gp5HUVfS-Qnk0nBn6Xt-bSh4d_3eb89Q7eDd0'
};

/***/ }),

/***/ 90:
/*!*****************************************************!*\
  !*** ./src/app/movieapp/movieapp-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieRoutingModule: () => (/* binding */ MovieRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [];
class MovieRoutingModule {
  static #_ = this.ɵfac = function MovieRoutingModule_Factory(t) {
    return new (t || MovieRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MovieRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 8851:
/*!*********************************************!*\
  !*** ./src/app/movieapp/movieapp.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieAppModule: () => (/* binding */ MovieAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _movieapp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieapp-routing.module */ 90);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 1059);
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/grid/grid.component */ 1869);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ 733);
/* harmony import */ var _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/movies/movies.component */ 8181);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3363);
/* harmony import */ var _pages_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tv-show/tv-show.component */ 6849);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ 2277);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list/list.component */ 7205);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list-item/list-item.component */ 1743);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);














class MovieAppModule {
  static #_ = this.ɵfac = function MovieAppModule_Factory(t) {
    return new (t || MovieAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: MovieAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _movieapp_routing_module__WEBPACK_IMPORTED_MODULE_0__.MovieRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_4__.MoviesComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _pages_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_6__.TvShowComponent, _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__.AboutComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_9__.ListItemComponent, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MovieAppModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _movieapp_routing_module__WEBPACK_IMPORTED_MODULE_0__.MovieRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_4__.MoviesComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _pages_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_6__.TvShowComponent, _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__.AboutComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_9__.ListItemComponent, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 2277:
/*!*********************************************************!*\
  !*** ./src/app/movieapp/pages/about/about.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pop-up/pop-up.component */ 3091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/popup.service */ 9706);





function AboutComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-pop-up", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function AboutComponent_Conditional_11_Conditional_0_Template_app_pop_up_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("query", data_r3.query);
  }
}
function AboutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AboutComponent_Conditional_11_Conditional_0_Template, 1, 1, "app-pop-up", 1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx.visible ? 0 : -1);
  }
}
class AboutComponent {
  constructor(popupService) {
    this.popupService = popupService;
  }
  closePopup() {
    this.popupService.closePopup();
  }
  ngOnInit() {
    this.popupData$ = this.popupService.popupData$;
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_popup_service__WEBPACK_IMPORTED_MODULE_1__.PopupService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 3,
    consts: [[1, "about"], [3, "query"], [3, "close", "query"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "About the Movie & TV App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\nWelcome to the Movie & TV App, a user-friendly platform designed to give you quick access to the top-rated movies and TV shows. Whether you're looking for the latest blockbusters or critically acclaimed TV series, our app provides a streamlined experience to help you discover and explore your favorite content.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\nKey Features:\nTop 10 Movies & TV Shows: Instantly browse the top 10 rated movies and TV shows in just a few clicks.\nSearch Functionality: Search through an extensive database of movies and TV shows from TheMovieDB API. The app delivers results as you type, ensuring real-time feedback.\nResponsive Design: The app adapts to various screen sizes, offering a seamless experience on both desktop and mobile devices.\nDetailed View: Dive deeper into each movie or TV show with individual item pages showcasing detailed information such as synopsis, release date, and ratings.\nInfinite Scrolling: Enjoy a continuous browsing experience with infinite scrolling for loading additional content as you reach the end of the page.\nTechnology Stack:\nThis application is built using the latest stable version of Angular, leveraging NgRx for state management and RxJS for reactive programming. Styling is handled with SCSS following BEM (Block Element Modifier) methodology, ensuring clean and maintainable styles. The app also utilizes Angular animations for smooth transitions and enhances the user experience through modern Angular Signals.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\nWhether you're looking for entertainment recommendations or simply want to stay updated on trending content, the Movie & TV App delivers an easy-to-use and visually appealing solution.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\nEnjoy exploring the world of movies and TV shows! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AboutComponent_Conditional_11_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](11, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 1, ctx.popupData$)) ? 11 : -1, tmp_0_0);
      }
    },
    dependencies: [_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: [".about[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 100vh;\n  color: white;\n  text-align: center;\n}\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: max-content;\n  margin: auto;\n  padding: 10px;\n}\n.about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px;\n  width: max-content;\n  margin: auto;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ1I7QUFFSTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaDJ7XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW57XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 733:
/*!*******************************************************!*\
  !*** ./src/app/movieapp/pages/home/home.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/list/list.component */ 7205);
/* harmony import */ var _store_movies_movie_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/movies/movie.selector */ 3911);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/movies/movie.action */ 1236);
/* harmony import */ var _store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/tv-shows/tv-show.action */ 2204);
/* harmony import */ var _store_tv_shows_tv_show_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/tv-shows/tv-show.selector */ 8063);
/* harmony import */ var _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pop-up/pop-up.component */ 3091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/popup.service */ 9706);












function HomeComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-pop-up", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("close", function HomeComponent_Conditional_5_Conditional_0_Template_app_pop_up_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("query", data_r3.query);
  }
}
function HomeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, HomeComponent_Conditional_5_Conditional_0_Template, 1, 1, "app-pop-up", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](0, ctx.visible ? 0 : -1);
  }
}
class HomeComponent {
  constructor(store, popupService) {
    this.store = store;
    this.popupService = popupService;
  }
  ngOnInit() {
    this.store.dispatch(_store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__.getMovie({
      page: 1
    }));
    this.store.dispatch(_store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_3__.getTVShow({
      page: 1
    }));
    this.store.dispatch(_store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__.getPopularMovie({
      page: 1
    }));
    this.store.dispatch(_store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_3__.getPopularTVShow({
      page: 1
    }));
    this.movies$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_movies_movie_selector__WEBPACK_IMPORTED_MODULE_1__.selectAllMovies));
    this.error$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_movies_movie_selector__WEBPACK_IMPORTED_MODULE_1__.selectMoviesError));
    this.tvshows$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_tv_shows_tv_show_selector__WEBPACK_IMPORTED_MODULE_4__.selectAllTVShows));
    this.popularMovies$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_movies_movie_selector__WEBPACK_IMPORTED_MODULE_1__.selectPopularMovies));
    this.popularTVShows$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_tv_shows_tv_show_selector__WEBPACK_IMPORTED_MODULE_4__.selectPopularTVShows));
    this.popupData$ = this.popupService.popupData$;
  }
  handleLoadNextPage(event) {
    switch (event.collectionName) {
      case "Movies":
        this.store.dispatch(_store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__.getMovie({
          page: event.page
        }));
        break;
      case "TV-shows":
        this.store.dispatch(_store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_3__.getTVShow({
          page: event.page
        }));
        break;
      case "Popular movies":
        this.store.dispatch(_store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__.getPopularMovie({
          page: event.page
        }));
        break;
      case "Popular TV-shows":
        this.store.dispatch(_store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_3__.getPopularTVShow({
          page: event.page
        }));
        break;
    }
  }
  closePopup() {
    this.popupService.closePopup();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_popup_service__WEBPACK_IMPORTED_MODULE_6__.PopupService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 15,
    consts: [[1, "home", "no-scroll"], [3, "loadNextPage", "collectionName", "data$", "error$"], [3, "query"], [3, "close", "query"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadNextPage", function HomeComponent_Template_app_list_loadNextPage_1_listener($event) {
          return ctx.handleLoadNextPage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadNextPage", function HomeComponent_Template_app_list_loadNextPage_2_listener($event) {
          return ctx.handleLoadNextPage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadNextPage", function HomeComponent_Template_app_list_loadNextPage_3_listener($event) {
          return ctx.handleLoadNextPage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadNextPage", function HomeComponent_Template_app_list_loadNextPage_4_listener($event) {
          return ctx.handleLoadNextPage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HomeComponent_Conditional_5_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_12_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionName", "Movies")("data$", ctx.movies$)("error$", ctx.error$);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionName", "TV-shows")("data$", ctx.tvshows$)("error$", ctx.error$);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionName", "Popular movies")("data$", ctx.popularMovies$)("error$", ctx.error$);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionName", "Popular TV-shows")("data$", ctx.popularTVShows$)("error$", ctx.error$);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](5, (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 13, ctx.popupData$)) ? 5 : -1, tmp_12_0);
      }
    },
    dependencies: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent, _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_5__.PopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: [".home[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVhcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 8181:
/*!***********************************************************!*\
  !*** ./src/app/movieapp/pages/movies/movies.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoviesComponent: () => (/* binding */ MoviesComponent)
/* harmony export */ });
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/grid/grid.component */ 1869);
/* harmony import */ var _store_movies_movie_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/movies/movie.selector */ 3911);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/movies/movie.action */ 1236);
/* harmony import */ var _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pop-up/pop-up.component */ 3091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/popup.service */ 9706);










const _c0 = ["scrollContainer"];
function MoviesComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-pop-up", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("close", function MoviesComponent_Conditional_2_Conditional_0_Template_app_pop_up_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("query", data_r3.query);
  }
}
function MoviesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MoviesComponent_Conditional_2_Conditional_0_Template, 1, 1, "app-pop-up", 1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, ctx.visible ? 0 : -1);
  }
}
class MoviesComponent {
  constructor(store, popupService) {
    this.store = store;
    this.popupService = popupService;
  }
  ngOnInit() {
    this.store.dispatch(_store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__.getMovie({
      page: 1
    }));
    this.movies$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_movies_movie_selector__WEBPACK_IMPORTED_MODULE_1__.selectAllMovies));
    this.error$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_movies_movie_selector__WEBPACK_IMPORTED_MODULE_1__.selectMoviesError));
    //  this.currentPage$ = this.store.pipe(select(selectCurrentPage));
    this.popupData$ = this.popupService.popupData$;
  }
  handleScroll(event) {
    this.store.dispatch(_store_movies_movie_action__WEBPACK_IMPORTED_MODULE_2__.getMovie({
      page: event.page
    }));
  }
  closePopup() {
    this.popupService.closePopup();
  }
  static #_ = this.ɵfac = function MoviesComponent_Factory(t) {
    return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_popup_service__WEBPACK_IMPORTED_MODULE_4__.PopupService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MoviesComponent,
    selectors: [["app-movies"]],
    viewQuery: function MoviesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollContainer = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 6,
    consts: [[3, "loadNextPage", "collectionName$", "data$", "error$"], [3, "query"], [3, "close", "query"]],
    template: function MoviesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loadNextPage", function MoviesComponent_Template_app_grid_loadNextPage_1_listener($event) {
          return ctx.handleScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MoviesComponent_Conditional_2_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionName$", "Movies")("data$", ctx.movies$)("error$", ctx.error$);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](2, (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx.popupData$)) ? 2 : -1, tmp_3_0);
      }
    },
    dependencies: [_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__.PopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 6849:
/*!*************************************************************!*\
  !*** ./src/app/movieapp/pages/tv-show/tv-show.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvShowComponent: () => (/* binding */ TvShowComponent)
/* harmony export */ });
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/grid/grid.component */ 1869);
/* harmony import */ var _store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/tv-shows/tv-show.action */ 2204);
/* harmony import */ var _store_tv_shows_tv_show_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/tv-shows/tv-show.selector */ 8063);
/* harmony import */ var _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pop-up/pop-up.component */ 3091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/popup.service */ 9706);









function TvShowComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-pop-up", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("close", function TvShowComponent_Conditional_2_Conditional_0_Template_app_pop_up_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("query", data_r3.query);
  }
}
function TvShowComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TvShowComponent_Conditional_2_Conditional_0_Template, 1, 1, "app-pop-up", 1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, ctx.visible ? 0 : -1);
  }
}
class TvShowComponent {
  constructor(store, renderer, popupService) {
    this.store = store;
    this.renderer = renderer;
    this.popupService = popupService;
  }
  ngOnInit() {
    this.store.dispatch(_store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_1__.getTVShow({
      page: 1
    }));
    this.tvshow$ = this.store.select(_store_tv_shows_tv_show_selector__WEBPACK_IMPORTED_MODULE_2__.selectAllTVShows);
    this.error$ = this.store.select(_store_tv_shows_tv_show_selector__WEBPACK_IMPORTED_MODULE_2__.selectTVShowsError);
    this.popupData$ = this.popupService.popupData$;
  }
  handleScroll(event) {
    this.store.dispatch(_store_tv_shows_tv_show_action__WEBPACK_IMPORTED_MODULE_1__.getTVShow({
      page: event.page
    }));
  }
  closePopup() {
    this.popupService.closePopup();
  }
  static #_ = this.ɵfac = function TvShowComponent_Factory(t) {
    return new (t || TvShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_popup_service__WEBPACK_IMPORTED_MODULE_4__.PopupService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TvShowComponent,
    selectors: [["app-tv-show"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 6,
    consts: [[3, "loadNextPage", "collectionName$", "data$", "error$"], [3, "query"], [3, "close", "query"]],
    template: function TvShowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loadNextPage", function TvShowComponent_Template_app_grid_loadNextPage_1_listener($event) {
          return ctx.handleScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TvShowComponent_Conditional_2_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionName$", "TV-shows")("data$", ctx.tvshow$)("error$", ctx.error$);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](2, (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx.popupData$)) ? 2 : -1, tmp_3_0);
      }
    },
    dependencies: [_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__.PopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 2728:
/*!****************************************************!*\
  !*** ./src/app/movieapp/services/movie.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieService: () => (/* binding */ MovieService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ 2545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class MovieService {
  constructor(http) {
    this.http = http;
    this.apiAllMovies = 'discover/movie';
    this.apiPopularMovies = 'movie/popular';
    this.headersAPI = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(_config_config__WEBPACK_IMPORTED_MODULE_0__.headers);
  }
  getMovies(page) {
    try {
      return this.http.get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${this.apiAllMovies}`, {
        headers: this.headersAPI,
        params: {
          "include_adult": false,
          'include_video': false,
          'language': "en-US",
          'page': page,
          'sort_by': "popularity.desc"
        }
      });
    } catch (err) {
      throw Error(err);
    }
  }
  getPopularMovies(page) {
    try {
      return this.http.get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${this.apiPopularMovies}`, {
        headers: this.headersAPI,
        params: {
          "include_adult": false,
          'include_video': false,
          'language': "en-US",
          'page': page,
          'sort_by': "popularity.desc"
        }
      });
    } catch (err) {
      throw Error(err);
    }
  }
  static #_ = this.ɵfac = function MovieService_Factory(t) {
    return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MovieService,
    factory: MovieService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9706:
/*!****************************************************!*\
  !*** ./src/app/movieapp/services/popup.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupService: () => (/* binding */ PopupService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PopupService {
  constructor() {
    this.popupDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      visible: false
    });
  }
  get popupData$() {
    return this.popupDataSubject.asObservable();
  }
  openPopup(visible, query) {
    this.popupDataSubject.next({
      visible,
      query
    });
  }
  closePopup() {
    this.popupDataSubject.next({
      visible: false
    });
  }
  static #_ = this.ɵfac = function PopupService_Factory(t) {
    return new (t || PopupService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PopupService,
    factory: PopupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 864:
/*!*****************************************************!*\
  !*** ./src/app/movieapp/services/search.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchService: () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ 2545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class SearchService {
  constructor(http) {
    this.http = http;
    this.apiSearch = 'search/collection';
    this.headersAPI = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(_config_config__WEBPACK_IMPORTED_MODULE_0__.headers);
  }
  getSearch(query, page) {
    try {
      return this.http.get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${this.apiSearch}`, {
        headers: this.headersAPI,
        params: {
          "query": query,
          "include_adult": false,
          'language': "en-US",
          'page': page
        }
      });
    } catch (err) {
      throw Error(err);
    }
  }
  static #_ = this.ɵfac = function SearchService_Factory(t) {
    return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SearchService,
    factory: SearchService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8236:
/*!******************************************************!*\
  !*** ./src/app/movieapp/services/tv-show.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TVShowService: () => (/* binding */ TVShowService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ 2545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class TVShowService {
  constructor(http) {
    this.http = http;
    this.apiTVSHow = 'discover/tv';
    this.apiPopularTVShow = 'tv/popular';
    this.headersAPI = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(_config_config__WEBPACK_IMPORTED_MODULE_0__.headers);
  }
  getTVShow(page) {
    try {
      return this.http.get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${this.apiTVSHow}`, {
        headers: this.headersAPI,
        params: {
          "include_adult": false,
          'include_video': false,
          'language': "en-US",
          'page': page,
          'sort_by': "popularity.desc"
        }
      });
    } catch (err) {
      throw Error(err);
    }
  }
  getPopularTVShow(page) {
    try {
      return this.http.get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${this.apiPopularTVShow}`, {
        headers: this.headersAPI,
        params: {
          "include_adult": false,
          'include_video': false,
          'language': "en-US",
          'page': page,
          'sort_by': "popularity.desc"
        }
      });
    } catch (err) {
      throw Error(err);
    }
  }
  static #_ = this.ɵfac = function TVShowService_Factory(t) {
    return new (t || TVShowService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TVShowService,
    factory: TVShowService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1236:
/*!*******************************************************!*\
  !*** ./src/app/movieapp/store/movies/movie.action.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieActionTypes: () => (/* binding */ MovieActionTypes),
/* harmony export */   getMovie: () => (/* binding */ getMovie),
/* harmony export */   getPopularMovie: () => (/* binding */ getPopularMovie),
/* harmony export */   loadMoviesFailure: () => (/* binding */ loadMoviesFailure),
/* harmony export */   loadMoviesSuccess: () => (/* binding */ loadMoviesSuccess),
/* harmony export */   loadPopularMovies: () => (/* binding */ loadPopularMovies),
/* harmony export */   messagesKey: () => (/* binding */ messagesKey)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const messagesKey = '[Movie]';
var MovieActionTypes;
(function (MovieActionTypes) {
  MovieActionTypes["getMovie"] = "[Movie] Get Movies";
  MovieActionTypes["getPopularMovie"] = "[Movie] Get Popular Movies";
  MovieActionTypes["LoadMovie"] = "[Movie] Load Movies";
  MovieActionTypes["Error"] = "[Movie] Load Movies Failure";
  MovieActionTypes["Search"] = "[Movie] Search Movies";
  MovieActionTypes["Popular"] = "[Movie] Popular Movies";
})(MovieActionTypes || (MovieActionTypes = {}));
const getMovie = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(MovieActionTypes.getMovie, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getPopularMovie = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(MovieActionTypes.getPopularMovie, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadMoviesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(MovieActionTypes.LoadMovie, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadMoviesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(MovieActionTypes.Error, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPopularMovies = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(MovieActionTypes.Popular, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 3051:
/*!*******************************************************!*\
  !*** ./src/app/movieapp/store/movies/movie.effect.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieEffects: () => (/* binding */ MovieEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _movie_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie.action */ 1236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/movie.service */ 2728);







class MovieEffects {
  constructor(actions$, movieService) {
    this.actions$ = actions$;
    this.movieService = movieService;
    this.loadMovies$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_movie_action__WEBPACK_IMPORTED_MODULE_0__.MovieActionTypes.getMovie), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.loadAllMovies(action.page))));
    this.loadPopularMovies$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_movie_action__WEBPACK_IMPORTED_MODULE_0__.MovieActionTypes.getPopularMovie), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.loadPopularMovies(action.page))));
  }
  loadAllMovies(page) {
    return this.movieService.getMovies(page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(movies => ({
      type: _movie_action__WEBPACK_IMPORTED_MODULE_0__.MovieActionTypes.LoadMovie,
      movies: movies.results
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _movie_action__WEBPACK_IMPORTED_MODULE_0__.MovieActionTypes.Error,
      message: error
    })));
  }
  loadPopularMovies(page) {
    return this.movieService.getPopularMovies(page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(movies => ({
      type: _movie_action__WEBPACK_IMPORTED_MODULE_0__.MovieActionTypes.Popular,
      movies: movies.results
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _movie_action__WEBPACK_IMPORTED_MODULE_0__.MovieActionTypes.Error,
      message: error
    })));
  }
  static #_ = this.ɵfac = function MovieEffects_Factory(t) {
    return new (t || MovieEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_movie_service__WEBPACK_IMPORTED_MODULE_1__.MovieService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: MovieEffects,
    factory: MovieEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 824:
/*!********************************************************!*\
  !*** ./src/app/movieapp/store/movies/movie.reducer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   movieReducer: () => (/* binding */ movieReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _movie_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie.action */ 1236);


const initialState = {
  movies: [],
  popular: [],
  error: null,
  loading: false,
  currentPage: 1
};
const movieReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_movie_action__WEBPACK_IMPORTED_MODULE_0__.loadMoviesSuccess, (state, action) => ({
  ...state,
  movies: state.movies.concat(action.movies)
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_movie_action__WEBPACK_IMPORTED_MODULE_0__.loadPopularMovies, (state, action) => ({
  ...state,
  popular: state.popular.concat(action.movies)
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_movie_action__WEBPACK_IMPORTED_MODULE_0__.loadMoviesFailure, (state, action) => ({
  ...state,
  error: action.error
})));

/***/ }),

/***/ 3911:
/*!*********************************************************!*\
  !*** ./src/app/movieapp/store/movies/movie.selector.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAllMovies: () => (/* binding */ selectAllMovies),
/* harmony export */   selectMovieState: () => (/* binding */ selectMovieState),
/* harmony export */   selectMoviesError: () => (/* binding */ selectMoviesError),
/* harmony export */   selectPopularMovies: () => (/* binding */ selectPopularMovies)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectMovieState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('movie');
const selectAllMovies = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMovieState, state => state.movies);
const selectMoviesError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMovieState, state => state.error);
const selectPopularMovies = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMovieState, state => state.popular);

/***/ }),

/***/ 7639:
/*!********************************************************!*\
  !*** ./src/app/movieapp/store/search/search.action.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchActionTypes: () => (/* binding */ SearchActionTypes),
/* harmony export */   getSearch: () => (/* binding */ getSearch),
/* harmony export */   loadSearchFailure: () => (/* binding */ loadSearchFailure),
/* harmony export */   loadsearchSuccess: () => (/* binding */ loadsearchSuccess),
/* harmony export */   messagesKey: () => (/* binding */ messagesKey)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const messagesKey = '[Search]';
var SearchActionTypes;
(function (SearchActionTypes) {
  SearchActionTypes["getSearch"] = "[Search] Get collection";
  SearchActionTypes["SearchSuccess"] = "[Search] Search collection";
  SearchActionTypes["Error"] = "[Search] Search Failure";
})(SearchActionTypes || (SearchActionTypes = {}));
const getSearch = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(SearchActionTypes.getSearch, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadsearchSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(SearchActionTypes.SearchSuccess, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadSearchFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(SearchActionTypes.Error, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 5596:
/*!********************************************************!*\
  !*** ./src/app/movieapp/store/search/search.effect.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchEffects: () => (/* binding */ SearchEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _search_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.action */ 7639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ 864);







class SearchEffects {
  constructor(actions$, SearchService) {
    this.actions$ = actions$;
    this.SearchService = SearchService;
    this.loadSearchs$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_search_action__WEBPACK_IMPORTED_MODULE_0__.SearchActionTypes.getSearch), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.loadAllSearchs(action.query, action.page))));
  }
  loadAllSearchs(query, page) {
    return this.SearchService.getSearch(query, page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(search => ({
      type: _search_action__WEBPACK_IMPORTED_MODULE_0__.SearchActionTypes.SearchSuccess,
      search: search.results
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _search_action__WEBPACK_IMPORTED_MODULE_0__.SearchActionTypes.Error,
      message: error
    })));
  }
  static #_ = this.ɵfac = function SearchEffects_Factory(t) {
    return new (t || SearchEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: SearchEffects,
    factory: SearchEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8025:
/*!*********************************************************!*\
  !*** ./src/app/movieapp/store/search/search.reducer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchReducer: () => (/* binding */ SearchReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _search_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.action */ 7639);


const initialState = {
  search: [],
  error: null,
  loading: false,
  currentPage: 1
};
const SearchReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_search_action__WEBPACK_IMPORTED_MODULE_0__.loadsearchSuccess, (state, action) => ({
  ...state,
  search: action.search
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_search_action__WEBPACK_IMPORTED_MODULE_0__.loadSearchFailure, (state, action) => ({
  ...state,
  error: action.error
})));

/***/ }),

/***/ 4400:
/*!**********************************************************!*\
  !*** ./src/app/movieapp/store/search/search.selector.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAllSearch: () => (/* binding */ selectAllSearch),
/* harmony export */   selectSearchState: () => (/* binding */ selectSearchState),
/* harmony export */   selectSearchsError: () => (/* binding */ selectSearchsError)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectSearchState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('search');
const selectAllSearch = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectSearchState, state => state.search);
const selectSearchsError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectSearchState, state => state.error);

/***/ }),

/***/ 2204:
/*!***********************************************************!*\
  !*** ./src/app/movieapp/store/tv-shows/tv-show.action.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TVShowActionTypes: () => (/* binding */ TVShowActionTypes),
/* harmony export */   getPopularTVShow: () => (/* binding */ getPopularTVShow),
/* harmony export */   getTVShow: () => (/* binding */ getTVShow),
/* harmony export */   loadPopularTVShow: () => (/* binding */ loadPopularTVShow),
/* harmony export */   loadTVShowsFailure: () => (/* binding */ loadTVShowsFailure),
/* harmony export */   loadTVShowsSuccess: () => (/* binding */ loadTVShowsSuccess),
/* harmony export */   messagesKey: () => (/* binding */ messagesKey)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const messagesKey = '[TVShow]';
var TVShowActionTypes;
(function (TVShowActionTypes) {
  TVShowActionTypes["getTVShow"] = "[TVShow] Get TVShows";
  TVShowActionTypes["LoadTVShow"] = "[TVShow] Load TVShows";
  TVShowActionTypes["Error"] = "[TVShow] Load TVShows Failure";
  TVShowActionTypes["getPopularTVShow"] = "[TVShow] Get Popular Movies";
  TVShowActionTypes["PopularTVShow"] = "[TVShow] Popular Movies";
})(TVShowActionTypes || (TVShowActionTypes = {}));
const getTVShow = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TVShowActionTypes.getTVShow, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadTVShowsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TVShowActionTypes.LoadTVShow, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadTVShowsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TVShowActionTypes.Error, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getPopularTVShow = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TVShowActionTypes.getPopularTVShow, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPopularTVShow = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TVShowActionTypes.PopularTVShow, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 8979:
/*!***********************************************************!*\
  !*** ./src/app/movieapp/store/tv-shows/tv-show.effect.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TVShowEffects: () => (/* binding */ TVShowEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _tv_show_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv-show.action */ 2204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_tv_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tv-show.service */ 8236);







class TVShowEffects {
  constructor(actions$, TVShowService) {
    this.actions$ = actions$;
    this.TVShowService = TVShowService;
    this.loadTVShows$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_tv_show_action__WEBPACK_IMPORTED_MODULE_0__.TVShowActionTypes.getTVShow), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.loadAllTVShows(action.page))));
    this.loadPopularTVShows$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_tv_show_action__WEBPACK_IMPORTED_MODULE_0__.TVShowActionTypes.getPopularTVShow), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.loadPopularTVShows(action.page))));
  }
  loadAllTVShows(page) {
    return this.TVShowService.getTVShow(page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(tvshows => ({
      type: _tv_show_action__WEBPACK_IMPORTED_MODULE_0__.TVShowActionTypes.LoadTVShow,
      tvshows: tvshows.results
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _tv_show_action__WEBPACK_IMPORTED_MODULE_0__.TVShowActionTypes.Error,
      message: error
    })));
  }
  loadPopularTVShows(page) {
    return this.TVShowService.getPopularTVShow(page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(tvshows => ({
      type: _tv_show_action__WEBPACK_IMPORTED_MODULE_0__.TVShowActionTypes.PopularTVShow,
      tvshows: tvshows.results
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _tv_show_action__WEBPACK_IMPORTED_MODULE_0__.TVShowActionTypes.Error,
      message: error
    })));
  }
  static #_ = this.ɵfac = function TVShowEffects_Factory(t) {
    return new (t || TVShowEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_tv_show_service__WEBPACK_IMPORTED_MODULE_1__.TVShowService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: TVShowEffects,
    factory: TVShowEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4736:
/*!************************************************************!*\
  !*** ./src/app/movieapp/store/tv-shows/tv-show.reducer.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TVShowReducer: () => (/* binding */ TVShowReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _tv_show_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv-show.action */ 2204);


const initialState = {
  tvshows: [],
  popularTVShows: [],
  error: null,
  loading: false,
  currentPage: 1
};
const TVShowReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tv_show_action__WEBPACK_IMPORTED_MODULE_0__.loadTVShowsSuccess, (state, action) => ({
  ...state,
  tvshows: state.tvshows.concat(action.tvshows)
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tv_show_action__WEBPACK_IMPORTED_MODULE_0__.loadPopularTVShow, (state, action) => ({
  ...state,
  popularTVShows: state.popularTVShows.concat(action.tvshow)
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tv_show_action__WEBPACK_IMPORTED_MODULE_0__.loadTVShowsFailure, (state, action) => ({
  ...state,
  error: action.error
})));

/***/ }),

/***/ 8063:
/*!*************************************************************!*\
  !*** ./src/app/movieapp/store/tv-shows/tv-show.selector.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAllTVShows: () => (/* binding */ selectAllTVShows),
/* harmony export */   selectPopularTVShows: () => (/* binding */ selectPopularTVShows),
/* harmony export */   selectTVShowState: () => (/* binding */ selectTVShowState),
/* harmony export */   selectTVShowsError: () => (/* binding */ selectTVShowsError)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectTVShowState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('tvshow');
const selectAllTVShows = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectTVShowState, state => state.tvshows);
const selectTVShowsError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectTVShowState, state => state.error);
const selectPopularTVShows = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectTVShowState, state => state.tvshows);

/***/ }),

/***/ 2691:
/*!*********************************************************!*\
  !*** ./src/app/movieapp/validators/search.validator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchValidator: () => (/* binding */ searchValidator)
/* harmony export */ });
function searchValidator(control) {
  const value = control.value;
  if (!value || value.trim().lenth < 1 || value.trim().length > 10) {
    return {
      'searchInvalid': true
    };
  }
  return null;
}

/***/ }),

/***/ 9170:
/*!************************************************************************!*\
  !*** ./src/app/todo/components/todo-counter/todo-counter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoCounterComponent: () => (/* binding */ TodoCounterComponent)
/* harmony export */ });
/* harmony import */ var _store_todo_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/todo.reducers */ 7110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 1383);




class TodoCounterComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.totalCount$ = this.store.select(_store_todo_reducers__WEBPACK_IMPORTED_MODULE_0__.selectTodosCount);
  }
  static #_ = this.ɵfac = function TodoCounterComponent_Factory(t) {
    return new (t || TodoCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TodoCounterComponent,
    selectors: [["app-todo-counter"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    template: function TodoCounterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.totalCount$), ")\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5089:
/*!******************************************************************!*\
  !*** ./src/app/todo/components/todo-form/todo-form.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoFormComponent: () => (/* binding */ TodoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class TodoFormComponent {
  constructor() {
    this.formTodo = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('')
    });
  }
  ngOnInit() {}
  onSubmit() {
    //  this.store.dispatch(addTodo({ title: this.formTodo.controls }));
    //   this.formTodo.controls.title.reset();
  }
  static #_ = this.ɵfac = function TodoFormComponent_Factory(t) {
    return new (t || TodoFormComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TodoFormComponent,
    selectors: [["app-todo-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 1,
    consts: [[3, "ngSubmit", "formGroup"], [1, "field", "is-grouped"], [1, "control", "is-expanded"], ["type", "text", "formControlName", "title", "placeholder", "Add TODO", 1, "input"], [1, "control"], ["type", "submit", 1, "button", "is-info"]],
    template: function TodoFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TodoFormComponent_Template_form_ngSubmit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4)(5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formTodo);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8922:
/*!******************************************************************!*\
  !*** ./src/app/todo/components/todo-list/todo-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoListComponent: () => (/* binding */ TodoListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function TodoListComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0)(1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Conditional_1_For_1_Template_button_click_3_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.deleteTodo(item_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.title);
  }
}
function TodoListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, TodoListComponent_Conditional_1_For_1_Template, 5, 1, "li", 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx);
  }
}
class TodoListComponent {
  constructor() {
    this.todos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    this.todoSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  deleteTodo(id) {
    this.todoSelected.emit(id);
  }
  static #_ = this.ɵfac = function TodoListComponent_Factory(t) {
    return new (t || TodoListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TodoListComponent,
    selectors: [["app-todo-list"]],
    inputs: {
      todos: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "todos"]
    },
    outputs: {
      todoSelected: "todoSelected"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[1, "box"], [1, "item"], [1, "button", "is-danger", 3, "click"]],
    template: function TodoListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_Conditional_1_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.todos())) ? 1 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9kby9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxPQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6686:
/*!*************************************************************!*\
  !*** ./src/app/todo/pages/todo-home/todo-home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoHomeComponent: () => (/* binding */ TodoHomeComponent)
/* harmony export */ });
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/todo-list/todo-list.component */ 8922);
/* harmony import */ var _components_todo_counter_todo_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/todo-counter/todo-counter.component */ 9170);
/* harmony import */ var _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/todo-form/todo-form.component */ 5089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class TodoHomeComponent {
  constructor() {}
  ngOnInit() {}
  deleteTodo($event) {}
  static #_ = this.ɵfac = function TodoHomeComponent_Factory(t) {
    return new (t || TodoHomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TodoHomeComponent,
    selectors: [["app-todo-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 1,
    consts: [[1, "hero", "is-dark", "is-bold"], [1, "hero-body"], [1, "container"], [1, "title"], [1, "subtitle"], [1, "section"], [3, "todoSelected", "todos"]],
    template: function TodoHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Simple Todo App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Developed with NGRX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 5)(8, "div", 2)(9, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "New TODO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-todo-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "section", 5)(13, "div", 2)(14, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Todo list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-todo-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "app-todo-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("todoSelected", function TodoHomeComponent_Template_app_todo_list_todoSelected_18_listener($event) {
          return ctx.deleteTodo($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("todos", ctx.todos$);
      }
    },
    dependencies: [_components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_2__.TodoFormComponent, _components_todo_counter_todo_counter_component__WEBPACK_IMPORTED_MODULE_1__.TodoCounterComponent, _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_0__.TodoListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7727:
/*!***********************************************!*\
  !*** ./src/app/todo/services/todo.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoService: () => (/* binding */ TodoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


const baseURL = "https://671513e433bc2bfe40b95089.mockapi.io/api/v1";
class TodoService {
  constructor(http) {
    this.http = http;
  }
  getTodos() {
    return this.http.get(`${baseURL}/todolist`);
  }
  addTodo(title) {
    return this.http.post(`${baseURL}/api/todos`, {
      title
    });
  }
  deleteTodo(id) {
    return this.http.delete(`${baseURL}/api/todos`);
  }
  static #_ = this.ɵfac = function TodoService_Factory(t) {
    return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TodoService,
    factory: TodoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2520:
/*!********************************************!*\
  !*** ./src/app/todo/store/todo.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoActionTypes: () => (/* binding */ TodoActionTypes),
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   errorTodo: () => (/* binding */ errorTodo),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   loadTodos: () => (/* binding */ loadTodos)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

var TodoActionTypes;
(function (TodoActionTypes) {
  TodoActionTypes["GetAll"] = "[TODO Page] Get all todos";
  TodoActionTypes["LoadTodos"] = "[TODO API] Load todos";
  TodoActionTypes["Add"] = "[TODO Page] Add";
  TodoActionTypes["Delete"] = "[TODO Page] Delete";
  TodoActionTypes["Error"] = "[TODO API] Error";
})(TodoActionTypes || (TodoActionTypes = {}));
const getTodos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TodoActionTypes.GetAll);
const loadTodos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TodoActionTypes.LoadTodos, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addTodo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TodoActionTypes.Add, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteTodo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TodoActionTypes.Delete, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const errorTodo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(TodoActionTypes.Error, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 4045:
/*!********************************************!*\
  !*** ./src/app/todo/store/todo.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoEffect: () => (/* binding */ TodoEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ 2520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/todo.service */ 7727);







class TodoEffect {
  constructor(actions$, todoService) {
    this.actions$ = actions$;
    this.todoService = todoService;
    this.loadTodos$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.getTodos), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.loadAllTodos())));
    this.addTodo$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.addTodo), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.todoService.addTodo(action.title).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.loadAllTodos())))));
    this.deleteTodo$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.deleteTodo), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.todoService.deleteTodo(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.loadAllTodos())))));
  }
  loadAllTodos() {
    return this.todoService.getTodos().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(todos => ({
      type: _todo_actions__WEBPACK_IMPORTED_MODULE_0__.TodoActionTypes.LoadTodos,
      todos
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      type: _todo_actions__WEBPACK_IMPORTED_MODULE_0__.TodoActionTypes.Error,
      message: error
    })));
  }
  static #_ = this.ɵfac = function TodoEffect_Factory(t) {
    return new (t || TodoEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_1__.TodoService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: TodoEffect,
    factory: TodoEffect.ɵfac
  });
}

/***/ }),

/***/ 7110:
/*!*********************************************!*\
  !*** ./src/app/todo/store/todo.reducers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoReducer: () => (/* binding */ TodoReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   selectError: () => (/* binding */ selectError),
/* harmony export */   selectTodoState: () => (/* binding */ selectTodoState),
/* harmony export */   selectTodos: () => (/* binding */ selectTodos),
/* harmony export */   selectTodosCount: () => (/* binding */ selectTodosCount)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ 2520);


const initialState = {
  todos: [],
  error: ''
};
const TodoReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.loadTodos, (state, action) => ({
  ...state,
  todos: action.todos
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.errorTodo, (state, action) => ({
  ...state,
  error: action.message
})));
// SELECTORS
const selectTodoState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('todo');
const selectTodos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectTodoState, state => state.todos);
const selectError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectTodoState, state => state.error);
const selectTodosCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectTodoState, state => state.todos.length);

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_movieapp_store_movies_movie_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/movieapp/store/movies/movie.effect */ 3051);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ 1925);
/* harmony import */ var _app_movieapp_store_movies_movie_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/movieapp/store/movies/movie.reducer */ 824);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_movieapp_movieapp_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/movieapp/movieapp.module */ 8851);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_todo_store_todo_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/todo/store/todo.effects */ 4045);
/* harmony import */ var _app_movieapp_store_tv_shows_tv_show_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/movieapp/store/tv-shows/tv-show.reducer */ 4736);
/* harmony import */ var _app_movieapp_store_search_search_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/movieapp/store/search/search.reducer */ 8025);
/* harmony import */ var _app_todo_store_todo_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/todo/store/todo.reducers */ 7110);
/* harmony import */ var _app_movieapp_store_search_search_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/movieapp/store/search/search.effect */ 5596);
/* harmony import */ var _app_movieapp_store_tv_shows_tv_show_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/movieapp/store/tv-shows/tv-show.effect */ 8979);




















if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_app_routes__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _app_movieapp_movieapp_module__WEBPACK_IMPORTED_MODULE_4__.MovieAppModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.StoreModule.forRoot({
    movie: _app_movieapp_store_movies_movie_reducer__WEBPACK_IMPORTED_MODULE_3__.movieReducer,
    tvshow: _app_movieapp_store_tv_shows_tv_show_reducer__WEBPACK_IMPORTED_MODULE_7__.TVShowReducer,
    search: _app_movieapp_store_search_search_reducer__WEBPACK_IMPORTED_MODULE_8__.SearchReducer,
    todos: _app_todo_store_todo_reducers__WEBPACK_IMPORTED_MODULE_9__.TodoReducer
  }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
    connectInZone: true
  }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsModule.forRoot([_app_movieapp_store_movies_movie_effect__WEBPACK_IMPORTED_MODULE_2__.MovieEffects, _app_todo_store_todo_effects__WEBPACK_IMPORTED_MODULE_6__.TodoEffect, _app_movieapp_store_search_search_effect__WEBPACK_IMPORTED_MODULE_10__.SearchEffects, _app_movieapp_store_tv_shows_tv_show_effect__WEBPACK_IMPORTED_MODULE_11__.TVShowEffects])), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.withInterceptorsFromDi)()), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.provideAnimations)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map