(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular_portfolio"] = self["webpackChunkangular_portfolio"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    6698:
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* binding */
            _AboutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AboutComponent = /*#__PURE__*/function () {
        function _AboutComponent() {
          _classCallCheck(this, _AboutComponent);

          this.title = "Olá, meu nome é Braian ";
          this.paragraph = "Sou formado em Tecnologia em Análise e Desenvolvimento de Sistemas pela " + "faculdade Anhanguera de Sorocaba, meu objetivo é me tornar desenvolvedor full-stack.";
        }

        _createClass(_AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AboutComponent;
      }();

      _AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || _AboutComponent)();
      };

      _AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AboutComponent,
        selectors: [["about"]],
        decls: 14,
        vars: 2,
        consts: [["id", "about", 1, "about"], ["about", ""], [1, "about__details"], [1, "about__title"], [1, "gray"], [1, "about__paragraph"], ["href", "https://drive.google.com/file/d/1yRSAMo3W7vNun-umvc5Q_AfLHI2hCXT3/view?usp=sharing"], [1, "btn-primary", "btn--color"], ["src", "assets/img/profilePicture.jpg", "alt", "perfil", 1, "about__img"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ilva.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CURRICULO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.paragraph);
          }
        },
        styles: [".about[_ngcontent-%COMP%] {\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  background-color: #1868fd;\n}\n.about__details[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  color: #fff;\n}\n.about__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.5rem;\n}\n.about__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  margin-bottom: 15px;\n}\n.about__img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: auto;\n  max-width: 250px;\n  box-shadow: 10px -10px rgba(0, 0, 0, 0.6);\n  transition: 1s ease-in;\n}\n@media (max-width: 543px) {\n  .about__img[_ngcontent-%COMP%] {\n    max-width: 160px;\n    transition: 1s ease;\n  }\n  .about__details[_ngcontent-%COMP%] {\n    flex-basis: 90%;\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUNBTSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkRKc0I7RUFDeEIseUJFSks7QUZNUDtBQUFFO0VBQ0UsZUFBQTtFQUNBLFdFTEk7QUZPUjtBQUNFO0VBQ0UsV0VUSTtFRlVKLGlCRVBXO0FGUWY7QUFFRTtFQUNFLFdFZEk7RUZlSixlRUxRO0VGTVIsbUJBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0FBREo7QUNXUTtFREpKO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQUhKO0VBTUU7SUFDRSxlQUFBO0lDckNFLHVCQUFBO0lBRUosYUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHNCRGlDMEI7RUFBNUI7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmFib3V0IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcblxyXG4gICZfX2RldGFpbHMge1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDE7XHJcbiAgfVxyXG5cclxuICAmX19wYXJhZ3JhcGgge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogJHBhcmFncmFwaDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggLTEwcHggJGJveC1zaGFkb3c7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbXEoc20sIG1heCl7XHJcbiAgLmFib3V0IHtcclxuICAgICZfX2ltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZGV0YWlscyB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDkwJTtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcclxuXHJcbiAgICBAaWYgJGp1c3RpZnljb250ZW50IHsganVzdGlmeS1jb250ZW50OiAkanVzdGlmeWNvbnRlbnQ7fVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSgkbGluZSwkY29sdW1uKXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93OjMwMHB4XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwX2dldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcclxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL0NvbG9yc1xyXG4kZ3JheTIxOiAjMzYzNjM2O1xyXG4kYmx1ZTogIzE4NjhmZDtcclxuJGJsdWUtZGFyazogIzE5MzE3NTk5O1xyXG4kYmx1ZS1saWdodDogI2JiZGVmYjtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy9Gb250IFNpemVcclxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xyXG4kZm9udC1zaXplLWgyOiAycmVtO1xyXG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xyXG4kZm9udC1zaXplLWg0OiAxLjVyZW07XHJcbiRmb250LXNpemUtaDU6IDEuMjVyZW07XHJcbiRmb250LXNpemUtaDY6IDFyZW07XHJcblxyXG4kcGFyYWdyYXBoOiAxcmVtO1xyXG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XHJcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XHJcblxyXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcclxuXHJcbi8vRm9udFxyXG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiO1xyXG5cclxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kYnJlYWtwb2ludHMgOiAoXHJcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBtZDo3NjhweCwgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbik7Il19 */"]
      });
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header/header.component */
      3482);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about/about.component */
      6698);
      /* harmony import */


      var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./skill/skill.component */
      4673);
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      5574);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contact/contact.component */
      1563);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'angular-portfolio';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "about");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about/about.component */
      6698);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact/contact.component */
      1563);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/header.component */
      3482);
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      5574);
      /* harmony import */


      var _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./skill/skill.component */
      4673);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
        });
      })();
      /***/

    },

    /***/
    1563:
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* binding */
            _ContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/animations */
      6055);
      /* harmony import */


      var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/scroll-animation.component */
      1552);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ContactComponent = /*#__PURE__*/function (_shared_scroll_animat) {
        _inherits(_ContactComponent, _shared_scroll_animat);

        var _super = _createSuper(_ContactComponent);

        function _ContactComponent() {
          _classCallCheck(this, _ContactComponent);

          return _super.apply(this, arguments);
        }

        _createClass(_ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContactComponent;
      }(_shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent);

      _ContactComponent.ɵfac = /*@__PURE__*/function () {
        var ɵContactComponent_BaseFactory;
        return function ContactComponent_Factory(t) {
          return (ɵContactComponent_BaseFactory || (ɵContactComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_ContactComponent)))(t || _ContactComponent);
        };
      }();

      _ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ContactComponent,
        selectors: [["contact"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 3,
        consts: [["id", "contato", 1, "contato"], [1, "contato__title"], ["href", "mailto:ssilva.bn@gmail.com"], [1, "btn-secondary", "btn--degrade"], [1, "list"], [1, "list__item"], ["href", "https://github.com/BraianS"], [1, "fab", "fa-github", "fa-3x"], ["href", "https://twitter.com/braiancode"], [1, "fab", "fa-twitter", "fa-3x"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Entre em contato");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "CONTATO");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \xA9 Copyright 2019\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
          }
        },
        styles: [".contato[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px;\n  background-color: #363636;\n  color: #fff;\n}\n.contato__title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list__item[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media (min-width: 0) and (max-width: 767px) {\n  .btn-secondary[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 70px;\n    padding: 6px;\n    font-size: 28px;\n    transition: 1s ease;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHNjc3NcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDQ1EsdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JETHNCO0VBQ3hCLGFBQUE7RUFDQSx5QkVMTztFRk1QLFdFRk07QUZJUjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjtBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUNnQ1E7RUQ1Qk47SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YXRvIHtcclxuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4pO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXkyMTtcclxuICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xLWJldHdlZW4oeHMsbWQpIHtcclxuICAuYnRuLXNlY29uZGFyeSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xyXG4gIH1cclxufSIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xyXG5cclxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZWxlbWVudCB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRsaW5lLCRjb2x1bW4pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcclxuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xyXG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xyXG4gICAgICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogJGJyZWFrcG9pbnQtdmFsdWUgLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxyXG5AbWl4aW4gbXEtYmV0d2VlbigkbG93ZXIsJHVwcGVyKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vQ29sb3JzXHJcbiRncmF5MjE6ICMzNjM2MzY7XHJcbiRibHVlOiAjMTg2OGZkO1xyXG4kYmx1ZS1kYXJrOiAjMTkzMTc1OTk7XHJcbiRibHVlLWxpZ2h0OiAjYmJkZWZiO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4vL0ZvbnQgU2l6ZVxyXG4kZm9udC1zaXplLWgxOiAyLjVyZW07XHJcbiRmb250LXNpemUtaDI6IDJyZW07XHJcbiRmb250LXNpemUtaDM6IDEuNzVyZW07XHJcbiRmb250LXNpemUtaDQ6IDEuNXJlbTtcclxuJGZvbnQtc2l6ZS1oNTogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS1oNjogMXJlbTtcclxuXHJcbiRwYXJhZ3JhcGg6IDFyZW07XHJcbiRwYXJhZ3JhcGgtc206IDEuNXJlbTtcclxuJHBhcmFncmFwaC1sZzogMnJlbTtcclxuXHJcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRvdmVybGF5OiByZ2JhKDMyLCAzMiwgMzIsIDAuNzUpO1xyXG5cclxuLy9Gb250XHJcbiRmb250LW9wZW4tc2VyaWY6IFwiT3BlbnMgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1yb2JvdG86IFwiUm9ib3RvXCI7XHJcblxyXG4vL1NjcmVlbnMgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRicmVha3BvaW50cyA6IChcclxuICAgIHhzOjAsIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTo1NDRweCwgLy8gU21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIG1kOjc2OHB4LCAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XHJcbiAgICBsZzo5OTJweCwgLy9MYXJnZSBzY3JlZW4gLyBkZXNrdG9wXHJcbiAgICB4bDoxMjAwLCAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcclxuKTsiXX0= */"],
        data: {
          animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation]
        }
      });
      /***/
    },

    /***/
    3482:
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);

      var _c0 = function _c0(a0, a1) {
        return {
          "fa-bars": a0,
          "fa-times": a1
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "nav__open": a0
        };
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent() {
          _classCallCheck(this, _HeaderComponent);
        }

        _createClass(_HeaderComponent, [{
          key: "scroll",
          value: function scroll(id) {
            console.log("scrolling to ".concat(id));
            var el = document.getElementById(id);
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
            this.isNavOpen = false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isNavOpen = false;
          }
        }, {
          key: "navOpened",
          value: function navOpened() {
            console.log("clicado");
            this.isNavOpen = !this.isNavOpen;
          }
        }, {
          key: "onWindowScroll",
          value: function onWindowScroll(e) {
            if (window.pageYOffset > 300) {
              var element = document.getElementsByClassName('nav')[0];
              element.classList.add('nav--sticky');
            } else {
              var _element = document.getElementsByClassName('nav')[0];

              _element.classList.remove('nav--sticky');
            }
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)();
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
              return ctx.onWindowScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 26,
        vars: 7,
        consts: [[1, "toggle", 3, "click"], [1, "fas", "fa-2x", 3, "ngClass"], [1, "nav", "nav--hightlighted", 3, "ngClass"], [1, "nav__brand"], ["href", "#"], [1, "gray"], [1, "nav__item"], [3, "click"], ["skill", ""], ["portfolio", ""], ["contato", ""]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() {
              return ctx.navOpened();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Braian ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ilva");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
              return ctx.scroll("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
              return ctx.scroll("skill");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
              return ctx.scroll("portfolio");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() {
              return ctx.scroll("contato");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contato");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx.isNavOpen, ctx.isNavOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isNavOpen));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
        styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: auto;\n  width: 100%;\n  z-index: 1;\n  transition: 1s;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 2.5em;\n  right: 2.5em;\n  color: #363636;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.nav[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  font-size: 1.6rem;\n  background: transparent;\n  padding: 16px;\n  transition: 1s;\n}\n\n.nav__brand[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 2rem;\n  font-weight: 300;\n  transform: translateX(-100rem);\n}\n\n.nav__brand[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation: slideIn 0.2s forwards;\n          animation: slideIn 0.2s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%] {\n  transform: translateX(100rem);\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation: slideIn 0.2s forwards;\n          animation: slideIn 0.2s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation: slideIn 0.4s forwards;\n          animation: slideIn 0.4s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation: slideIn 0.6s forwards;\n          animation: slideIn 0.6s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation: slideIn 0.8s forwards;\n          animation: slideIn 0.8s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation: slideIn 1s forwards;\n          animation: slideIn 1s forwards;\n}\n\n.nav--hightlighted[_ngcontent-%COMP%] {\n  content: \"\";\n}\n\n.nav--hightlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  overflow: hidden;\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #363636;\n  transition: width 0.3s;\n}\n\n.nav--hightlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  transition: width 0.3s;\n}\n\n.nav--sticky[_ngcontent-%COMP%] {\n  background: #1868fd;\n  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.6);\n  top: 0;\n  color: #363636;\n  padding: 5px;\n  transition: 0.5s;\n}\n\n@media (max-width: 767px) {\n  .toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    display: none;\n    padding-top: 0;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n  }\n\n  .nav__open[_ngcontent-%COMP%] {\n    display: flex;\n    transform: scale(1);\n    opacity: 1;\n    background-color: #19317599;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0NqQk87RURrQlAsZUFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFRXJCMEIseUJGdUJJO0VFbkIxQixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJGZ0JzQjtFQUN4QixpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBRWhCUTtFQUNJLHdDQUFBO1VBQUEsZ0NBQUE7QUZrQlo7O0FBQUU7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtBQUNKOztBRXhCUTtFQUNJLHdDQUFBO1VBQUEsZ0NBQUE7QUYwQlo7O0FFM0JRO0VBQ0ksd0NBQUE7VUFBQSxnQ0FBQTtBRjZCWjs7QUU5QlE7RUFDSSx3Q0FBQTtVQUFBLGdDQUFBO0FGZ0NaOztBRWpDUTtFQUNJLHdDQUFBO1VBQUEsZ0NBQUE7QUZtQ1o7O0FFcENRO0VBQ0ksc0NBQUE7VUFBQSw4QkFBQTtBRnNDWjs7QUFiRTtFQUNFLFdBQUE7QUFlSjs7QUFiSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQ3RERztFRHVESCxzQkFBQTtBQWVOOztBQVpJO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBY047O0FBVkU7RUFDRSxtQkNoRUc7RURpRUgsMkNBQUE7RUFDQSxNQUFBO0VBQ0EsY0NwRUs7RURxRUwsWUFBQTtFQUNBLGdCQUFBO0FBWUo7O0FFNUNRO0VGcUNOO0lBQ0UsY0FBQTtFQVdGOztFQVJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQVdGOztFQVJBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQzFGUTtFRHFHVjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMi41ZW07XHJcbiAgcmlnaHQ6IDIuNWVtO1xyXG4gIGNvbG9yOiAkZ3JheTIxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAkdGhpczogJjtcclxuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3csZmxleC1lbmQpOyAgXHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG5cclxuICAmX19icmFuZCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDByZW0pO1xyXG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uLWRlbGF5KDEpO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcmVtKTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uLWRlbGF5KDUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJi0taGlnaHRsaWdodGVkIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgI3skdGhpc31fX2l0ZW06OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogJGdyYXkyMTtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcclxuICAgIH1cclxuXHJcbiAgICAjeyAkdGhpc31fX2l0ZW06aG92ZXI6OmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLS1zdGlja3kge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMnB4IDAgJGJveC1zaGFkb3c7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogJGdyYXkyMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcShtZCxtYXgpIHtcclxuICAudG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubmF2IHsgICBcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9XHJcblxyXG4gIC5uYXZfX29wZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtZGFyaztcclxuICB9XHJcbn0iLCIvL0NvbG9yc1xyXG4kZ3JheTIxOiAjMzYzNjM2O1xyXG4kYmx1ZTogIzE4NjhmZDtcclxuJGJsdWUtZGFyazogIzE5MzE3NTk5O1xyXG4kYmx1ZS1saWdodDogI2JiZGVmYjtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy9Gb250IFNpemVcclxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xyXG4kZm9udC1zaXplLWgyOiAycmVtO1xyXG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xyXG4kZm9udC1zaXplLWg0OiAxLjVyZW07XHJcbiRmb250LXNpemUtaDU6IDEuMjVyZW07XHJcbiRmb250LXNpemUtaDY6IDFyZW07XHJcblxyXG4kcGFyYWdyYXBoOiAxcmVtO1xyXG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XHJcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XHJcblxyXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcclxuXHJcbi8vRm9udFxyXG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiO1xyXG5cclxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kYnJlYWtwb2ludHMgOiAoXHJcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBtZDo3NjhweCwgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbik7IiwiQG1peGluIGZsZXgtY29udGFpbmVyKCRmbGV4ZGlyZWN0aW9uLCRqdXN0aWZ5Y29udGVudDpmYWxzZSl7XHJcblxyXG4gICAgQGlmICRqdXN0aWZ5Y29udGVudCB7IGp1c3RpZnktY29udGVudDogJGp1c3RpZnljb250ZW50O31cclxuICAgIEBlbHNlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICRmbGV4ZGlyZWN0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMDBweDtcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkZWxlbWVudCl7XHJcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRlbGVtZW50IHtcclxuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gKCN7JGkqMC4yc30pIGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUoJGxpbmUsJGNvbHVtbil7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJGxpbmUsJGNvbHVtbik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvdzozMDBweFxyXG59XHJcblxyXG4vL01lZGlhIHF1ZXJ5IHRvIHVzZSBicmVha3BvaW50c1xyXG5AbWl4aW4gbXEoJGJyZWFrcG9pbnQsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcbiAgICAgICAgQGlmICR0eXBlID09IG1heCB7XHJcbiAgICAgICAgICAgICRicmVha3BvaW50LXZhbHVlOiAkYnJlYWtwb2ludC12YWx1ZSAtIDFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhICgjeyR0eXBlfS13aWR0aDogJGJyZWFrcG9pbnQtdmFsdWUpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL01lZGlhIHF1ZXJ5IHRvIHVzZSB0aGUgc2NyZWVuIHdpdGggbWluaW11bSBhbmQgbWF4aW11bSBzaXplXHJcbkBtaXhpbiBtcS1iZXR3ZWVuKCRsb3dlciwkdXBwZXIpIHtcclxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcclxuICAgICAgICAkbG93ZXItYnJlYWtwb2ludDptYXAtZ2V0KCRicmVha3BvaW50cywgJGxvd2VyKTtcclxuICAgICAgICAkdXBwZXItYnJlYWtwb2ludDptYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6JGxvd2VyLWJyZWFrcG9pbnQpIGFuZCAobWF4LXdpZHRoOigkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcclxuICAgICAgIH1cclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    5574:
    /*!**************************************************!*\
      !*** ./src/app/portfolio/portfolio.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PortfolioComponent": function PortfolioComponent() {
          return (
            /* binding */
            _PortfolioComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/animations */
      6055);
      /* harmony import */


      var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/scroll-animation.component */
      1552);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function PortfolioComponent_figure_7_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tools_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tools_r3.title);
        }
      }

      function PortfolioComponent_figure_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "figure", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PortfolioComponent_figure_7_li_8_Template, 3, 1, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var portfolio_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", portfolio_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](portfolio_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](portfolio_r1.paragraph);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", portfolio_r1.tools);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", portfolio_r1.github, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var _PortfolioComponent = /*#__PURE__*/function (_shared_scroll_animat2) {
        _inherits(_PortfolioComponent, _shared_scroll_animat2);

        var _super2 = _createSuper(_PortfolioComponent);

        function _PortfolioComponent(_el, cdRef, http) {
          var _this;

          _classCallCheck(this, _PortfolioComponent);

          _this = _super2.call(this, _el, cdRef);
          _this.http = http;
          _this.projectList = [];
          return _this;
        }

        _createClass(_PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.http.get("./assets/json/projetos.json").subscribe(function (portfolio) {
              _this2.projectList = portfolio;
            });
          }
        }]);

        return _PortfolioComponent;
      }(_shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent);

      _PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || _PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _PortfolioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PortfolioComponent,
        selectors: [["portfolio"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 8,
        vars: 3,
        consts: [["id", "portfolio", 1, "portfolio"], [1, "portfolio__heading"], [1, "portfolio__title"], [1, "underline"], [1, "container"], [1, "grid"], ["class", "photo photo--wrapper", 4, "ngFor", "ngForOf"], [1, "photo", "photo--wrapper"], ["alt", "projeto", 1, "photo__img", 3, "src"], [1, "overlay"], [1, "overlay__title"], [1, "overlay__paragraph"], [1, "list"], ["class", "list__item", 4, "ngFor", "ngForOf"], [1, "overlay__icon"], [1, "fab", "fa-github", "fa-4x", 3, "href"], [1, "list__item"], [1, "list__tag"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PortfolioComponent_figure_7_Template, 11, 5, "figure", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: [".portfolio[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem 0 3rem 0;\n  background-color: #bbdefb;\n}\n.portfolio__heading[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n}\n.portfolio__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #363636;\n}\n.photo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.photo__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  background-repeat: no-repeat;\n  background-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 1s;\n  transform: scale(1);\n}\n.photo[_ngcontent-%COMP%]:hover   .photo__img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.photo--wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.photo[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(32, 32, 32, 0.75);\n  opacity: 1;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 1s;\n  box-sizing: border-box;\n  padding: 10px;\n  opacity: 0;\n  color: #fff;\n}\n.overlay__title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 2em;\n}\n.overlay__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.overlay__icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 1.5em;\n}\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n}\n.list__item[_ngcontent-%COMP%] {\n  margin: 3px;\n  background-color: #1868fd;\n  border-radius: 20px;\n}\n.list__tag[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-row: 300px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 544px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-row: 300px;\n  }\n}\n@media (max-width: 767px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-row: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNDUSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkRMc0I7RUFDeEIsc0JBQUE7RUFDQSx5QkVGVztBRkliO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDRTtFQUNFLGVFTFc7RUZNWCxjRWRLO0FGZVQ7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFNRTtFQUNFLHdDRXZCTTtFRndCTixVQUFBO0FBSko7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0VyRE07QUZnRFI7QUFPRTtFQUNFLFdFeERJO0VGeURKLGVBQUE7QUFMSjtBQVFFO0VBQ0UsV0U3REk7QUZ1RFI7QUFTRTtFQ2pFTSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkQ2RHdCO0VBQ3hCLGlCQUFBO0FBSEo7QUFPQTtFQ3ZFUSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkRtRXNCO0FBQTFCO0FBRUU7RUFDRSxXQUFBO0VBQ0EseUJFOUVHO0VGK0VILG1CQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtBO0VDOURJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0FENkRKO0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FDekRRO0VENkROO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGO0FDL0RRO0VEbUVOO0lBQ0UsZ0JBQUE7RUFERjtBQUNGO0FDcEVRO0VEeUVOO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGO0FDekVRO0VEK0VOO0lBQ0UsaUJBQUE7RUFIRjtBQUNGO0FDbEVRO0VEeUVOO0lDakdFLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLHdCQUFBO0VEOEZGO0FBQ0Y7QUNyRlE7RUQyRk47SUN2R0UsYUFBQTtJQUNBLHFDQUFBO0lBQ0Esd0JBQUE7RURxR0Y7QUFDRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5wb3J0Zm9saW8ge1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbik7XHJcbiAgcGFkZGluZzogM3JlbSAwIDNyZW0gMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1saWdodDtcclxuXHJcbiAgJl9faGVhZGluZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDI7XHJcbiAgICBjb2xvcjogJGdyYXkyMTtcclxuICB9XHJcbn1cclxuXHJcbi5waG90byB7XHJcbiAgJHRoaXM6ICY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmX19pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAjeyR0aGlzfV9faW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcblxyXG4gICYtLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG92ZXJsYXk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICB9XHJcblxyXG4gICZfX3BhcmFncmFwaCB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl9faWNvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3cpO1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93KTtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gICZfX3RhZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmdyaWQge1xyXG4gIEBpbmNsdWRlIGdyaWQtdGVtcGxhdGUoMywgMWZyKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AaW5jbHVkZSBtcShzbSxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcShtZCxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcShsZyxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcSh4bCxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbXEtYmV0d2VlbihtZCxsZykge1xyXG4gIC5ncmlkIHtcclxuICAgIEBpbmNsdWRlIGdyaWQtdGVtcGxhdGUoMiwgMWZyKTtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKG1kLG1heCkge1xyXG4gIC5ncmlkIHtcclxuICAgIEBpbmNsdWRlIGdyaWQtdGVtcGxhdGUoMSwgMWZyKTtcclxuICB9XHJcbn0iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcclxuXHJcbiAgICBAaWYgJGp1c3RpZnljb250ZW50IHsganVzdGlmeS1jb250ZW50OiAkanVzdGlmeWNvbnRlbnQ7fVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSgkbGluZSwkY29sdW1uKXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93OjMwMHB4XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwX2dldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcclxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL0NvbG9yc1xyXG4kZ3JheTIxOiAjMzYzNjM2O1xyXG4kYmx1ZTogIzE4NjhmZDtcclxuJGJsdWUtZGFyazogIzE5MzE3NTk5O1xyXG4kYmx1ZS1saWdodDogI2JiZGVmYjtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy9Gb250IFNpemVcclxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xyXG4kZm9udC1zaXplLWgyOiAycmVtO1xyXG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xyXG4kZm9udC1zaXplLWg0OiAxLjVyZW07XHJcbiRmb250LXNpemUtaDU6IDEuMjVyZW07XHJcbiRmb250LXNpemUtaDY6IDFyZW07XHJcblxyXG4kcGFyYWdyYXBoOiAxcmVtO1xyXG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XHJcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XHJcblxyXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcclxuXHJcbi8vRm9udFxyXG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiO1xyXG5cclxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kYnJlYWtwb2ludHMgOiAoXHJcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBtZDo3NjhweCwgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbik7Il19 */"],
        data: {
          animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation]
        }
      });
      /***/
    },

    /***/
    6055:
    /*!**************************************!*\
      !*** ./src/app/shared/animations.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "scrollAnimation": function scrollAnimation() {
          return (
            /* binding */
            _scrollAnimation
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      7175);

      var _scrollAnimation = (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scrollAnimation', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('show', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        transform: "translateX(0)"
      })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('hide', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 0,
        transform: "translateY(20%)"
      })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('show => hide', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out')), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('hide => show', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('700ms ease-in'))]);
      /***/

    },

    /***/
    1552:
    /*!******************************************************!*\
      !*** ./src/app/shared/scroll-animation.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollAnimationComponent": function ScrollAnimationComponent() {
          return (
            /* binding */
            _ScrollAnimationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      2516);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ScrollAnimationComponent = /*#__PURE__*/function () {
        function _ScrollAnimationComponent(_el, cdRef) {
          _classCallCheck(this, _ScrollAnimationComponent);

          this._el = _el;
          this.cdRef = cdRef;
        }

        _createClass(_ScrollAnimationComponent, [{
          key: "onScroll",
          value: function onScroll() {
            this.componentPosition = this._el.nativeElement.offsetTop;
            this.scrollPosition = window.pageYOffset + window.innerHeight * 3 / 4;
            this.checkState();
          }
        }, {
          key: "checkState",
          value: function checkState() {
            if (this.state = 'hide') {
              if (this.scrollPosition >= this.componentPosition) {
                this.state = 'show';
                this.unsubscribe();
              }
            }
          }
        }, {
          key: "subscribe",
          value: function subscribe() {
            var _this3 = this;

            this.subscribeScroll = (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'scroll').subscribe(function () {
              return _this3.onScroll();
            });
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            if (this.subscribeScroll) {
              this.subscribeScroll.unsubscribe();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.state = 'hide';
            this.cdRef.detectChanges();
            this.subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe();
          }
        }]);

        return _ScrollAnimationComponent;
      }();

      _ScrollAnimationComponent.ɵfac = function ScrollAnimationComponent_Factory(t) {
        return new (t || _ScrollAnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
      };

      _ScrollAnimationComponent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _ScrollAnimationComponent,
        outputs: {
          state: "state"
        }
      });
      _ScrollAnimationComponent.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ScrollAnimationComponent,
        factory: _ScrollAnimationComponent.ɵfac
      });
      /***/
    },

    /***/
    4673:
    /*!******************************************!*\
      !*** ./src/app/skill/skill.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SkillComponent": function SkillComponent() {
          return (
            /* binding */
            _SkillComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/animations */
      6055);
      /* harmony import */


      var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/scroll-animation.component */
      1552);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function SkillComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](skill_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r1.title);
        }
      }

      var _SkillComponent = /*#__PURE__*/function (_shared_scroll_animat3) {
        _inherits(_SkillComponent, _shared_scroll_animat3);

        var _super3 = _createSuper(_SkillComponent);

        function _SkillComponent(_el, cdRef, http) {
          var _this4;

          _classCallCheck(this, _SkillComponent);

          _this4 = _super3.call(this, _el, cdRef);
          _this4.http = http;
          _this4.skills = [];
          return _this4;
        }

        _createClass(_SkillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.http.get("./assets/json/skills.json").subscribe(function (skills) {
              _this5.skills = skills;
            });
          }
        }]);

        return _SkillComponent;
      }(_shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent);

      _SkillComponent.ɵfac = function SkillComponent_Factory(t) {
        return new (t || _SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _SkillComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SkillComponent,
        selectors: [["skill"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 4,
        consts: [["id", "skill", 1, "skill"], [1, "skill__heading"], [1, "skill_title"], [1, "skill__paragraph"], [1, "underline"], [1, "list"], ["class", "list__item list--visible ", 4, "ngFor", "ngForOf"], [1, "fab", "fa-angular", "fa-2x", "fab--border"], [1, "list__item", "list--visible"], [1, "list__label"]],
        template: function SkillComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "O que utilizo?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ferramentas e tecnologias ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SkillComponent_li_8_Template, 4, 3, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Atualmente aprendendo sobre ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "MICROSERVICES");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: [".skill[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 4rem 0 4rem 0;\n}\n.skill__heading[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  color: #fff;\n}\n.skill_title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-transform: uppercase;\n  color: #363636;\n}\n.skill__paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #363636;\n  font-size: 1rem;\n}\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  padding: 15px;\n}\n.list__item[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n}\n.list__label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 49px;\n  line-height: 49px;\n  border-radius: 17px;\n  margin-top: 20px;\n  color: #fff;\n  background: #1868fd;\n  text-align: center;\n  visibility: hidden;\n}\n.list__label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #1868fd;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.list--visible[_ngcontent-%COMP%]:hover   .list__label[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0NRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCRExzQjtFQUN4QixzQkFBQTtBQUVGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0VMSTtBRk9SO0FBQ0U7RUFDRSxlRUxXO0VGTVgseUJBQUE7RUFDQSxjRWZLO0FGZ0JUO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGNFcEJLO0VGcUJMLGVFUFE7QUZPWjtBQUlBO0VDdEJRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRG1Cc0I7RUFDeEIsYUFBQTtBQUVGO0FBQUU7RUMzQk0sdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JEdUJ3QjtBQU01QjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdFckNJO0VGc0NKLG1CRXpDRztFRjBDSCxrQkFBQTtFQUNBLGtCQUFBO0FBS0o7QUFISTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUtOO0FBREU7RUFDRSxtQkFBQTtBQUdKIiwiZmlsZSI6InNraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uc2tpbGwge1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbik7XHJcbiAgcGFkZGluZzogNHJlbSAwIDRyZW0gMDtcclxuXHJcbiAgJl9faGVhZGluZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl90aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICRncmF5MjE7XHJcbiAgfVxyXG5cclxuICAmX19wYXJhZ3JhcGgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAkZ3JheTIxO1xyXG4gICAgZm9udC1zaXplOiAkcGFyYWdyYXBoO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICR0aGlzOiAmO1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLS12aXNpYmxlOmhvdmVyICN7JHRoaXN9X19sYWJlbCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufSIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xyXG5cclxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZWxlbWVudCB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRsaW5lLCRjb2x1bW4pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcclxuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xyXG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xyXG4gICAgICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogJGJyZWFrcG9pbnQtdmFsdWUgLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxyXG5AbWl4aW4gbXEtYmV0d2VlbigkbG93ZXIsJHVwcGVyKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vQ29sb3JzXHJcbiRncmF5MjE6ICMzNjM2MzY7XHJcbiRibHVlOiAjMTg2OGZkO1xyXG4kYmx1ZS1kYXJrOiAjMTkzMTc1OTk7XHJcbiRibHVlLWxpZ2h0OiAjYmJkZWZiO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4vL0ZvbnQgU2l6ZVxyXG4kZm9udC1zaXplLWgxOiAyLjVyZW07XHJcbiRmb250LXNpemUtaDI6IDJyZW07XHJcbiRmb250LXNpemUtaDM6IDEuNzVyZW07XHJcbiRmb250LXNpemUtaDQ6IDEuNXJlbTtcclxuJGZvbnQtc2l6ZS1oNTogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS1oNjogMXJlbTtcclxuXHJcbiRwYXJhZ3JhcGg6IDFyZW07XHJcbiRwYXJhZ3JhcGgtc206IDEuNXJlbTtcclxuJHBhcmFncmFwaC1sZzogMnJlbTtcclxuXHJcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRvdmVybGF5OiByZ2JhKDMyLCAzMiwgMzIsIDAuNzUpO1xyXG5cclxuLy9Gb250XHJcbiRmb250LW9wZW4tc2VyaWY6IFwiT3BlbnMgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1yb2JvdG86IFwiUm9ib3RvXCI7XHJcblxyXG4vL1NjcmVlbnMgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRicmVha3BvaW50cyA6IChcclxuICAgIHhzOjAsIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTo1NDRweCwgLy8gU21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIG1kOjc2OHB4LCAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XHJcbiAgICBsZzo5OTJweCwgLy9MYXJnZSBzY3JlZW4gLyBkZXNrdG9wXHJcbiAgICB4bDoxMjAwLCAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcclxuKTsiXX0= */"],
        data: {
          animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation]
        }
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map