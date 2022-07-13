"use strict";
(self["webpackChunkangular_portfolio"] = self["webpackChunkangular_portfolio"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() {
        this.title = "Olá, meu nome é Braian ";
        this.paragraph = "Sou formado em Tecnologia em Análise e Desenvolvimento de Sistemas pela " +
            "faculdade Anhanguera de Sorocaba, meu objetivo é me tornar desenvolvedor full-stack.";
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 14, vars: 2, consts: [["id", "about", 1, "about"], ["about", ""], [1, "about__details"], [1, "about__title"], [1, "gray"], [1, "about__paragraph"], ["href", "https://docs.google.com/document/d/18CJ66UeT3SOSazgvb7G_e39crXcQbi-2/edit?usp=sharing&ouid=106696477638908142346&rtpof=true&sd=true"], [1, "btn-primary", "btn--color"], ["src", "assets/img/profilePicture.jpg", "alt", "perfil", 1, "about__img"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ilva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CURRICULO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.paragraph);
    } }, styles: [".about[_ngcontent-%COMP%] {\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  background-color: #1868fd;\n}\n.about__details[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  color: #fff;\n}\n.about__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.5rem;\n}\n.about__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  margin-bottom: 15px;\n}\n.about__img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: auto;\n  max-width: 250px;\n  box-shadow: 10px -10px rgba(0, 0, 0, 0.6);\n  transition: 1s ease-in;\n}\n@media (max-width: 543px) {\n  .about__img[_ngcontent-%COMP%] {\n    max-width: 160px;\n    transition: 1s ease;\n  }\n  .about__details[_ngcontent-%COMP%] {\n    flex-basis: 90%;\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dyYW1hJUMzJUE3JUMzJUEzb1xcR0lUSFVCXFxhbmd1bGFyLXBvcnRmb2xpb1xcc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUNBTSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkRKc0I7RUFDeEIseUJFSks7QUNNUDtBSEFFO0VBQ0UsZUFBQTtFQUNBLFdFTEk7QUNPUjtBSENFO0VBQ0UsV0VUSTtFRlVKLGlCRVBXO0FDUWY7QUhFRTtFQUNFLFdFZEk7RUZlSixlRUxRO0VGTVIsbUJBQUE7QUdBSjtBSEdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0FHREo7QUZXUTtFREpKO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFR0hKO0VITUU7SUFDRSxlQUFBO0lDckNFLHVCQUFBO0lBRUosYUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHNCRGlDMEI7RUdBNUI7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmFib3V0IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcblxyXG4gICZfX2RldGFpbHMge1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDE7XHJcbiAgfVxyXG5cclxuICAmX19wYXJhZ3JhcGgge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogJHBhcmFncmFwaDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggLTEwcHggJGJveC1zaGFkb3c7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbXEoc20sIG1heCl7XHJcbiAgLmFib3V0IHtcclxuICAgICZfX2ltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZGV0YWlscyB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDkwJTtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcclxuXHJcbiAgICBAaWYgJGp1c3RpZnljb250ZW50IHsganVzdGlmeS1jb250ZW50OiAkanVzdGlmeWNvbnRlbnQ7fVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSgkbGluZSwkY29sdW1uKXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93OjMwMHB4XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwX2dldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcclxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL0NvbG9yc1xyXG4kZ3JheTIxOiAjMzYzNjM2O1xyXG4kYmx1ZTogIzE4NjhmZDtcclxuJGJsdWUtZGFyazogIzE5MzE3NTk5O1xyXG4kYmx1ZS1saWdodDogI2JiZGVmYjtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy9Gb250IFNpemVcclxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xyXG4kZm9udC1zaXplLWgyOiAycmVtO1xyXG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xyXG4kZm9udC1zaXplLWg0OiAxLjVyZW07XHJcbiRmb250LXNpemUtaDU6IDEuMjVyZW07XHJcbiRmb250LXNpemUtaDY6IDFyZW07XHJcblxyXG4kcGFyYWdyYXBoOiAxcmVtO1xyXG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XHJcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XHJcblxyXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcclxuXHJcbi8vRm9udFxyXG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiO1xyXG5cclxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kYnJlYWtwb2ludHMgOiAoXHJcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBtZDo3NjhweCwgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbik7IiwiLmFib3V0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjhmZDtcbn1cbi5hYm91dF9fZGV0YWlscyB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWJvdXRfX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuLmFib3V0X19wYXJhZ3JhcGgge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFib3V0X19pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW47XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDNweCkge1xuICAuYWJvdXRfX2ltZyB7XG4gICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xuICB9XG4gIC5hYm91dF9fZGV0YWlscyB7XG4gICAgZmxleC1iYXNpczogOTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill/skill.component */ 4673);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 1563);






class AppComponent {
    constructor() {
        this.title = 'angular-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "about")(3, "skill")(4, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill/skill.component */ 4673);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent,
        _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] }); })();


/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 6055);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 1552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ContactComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
    ngOnInit() {
    }
}
ContactComponent.ɵfac = /*@__PURE__*/ function () { let ɵContactComponent_BaseFactory; return function ContactComponent_Factory(t) { return (ɵContactComponent_BaseFactory || (ɵContactComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ContactComponent)))(t || ContactComponent); }; }();
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 3, consts: [["id", "contato", 1, "contato"], [1, "contato__title"], ["href", "mailto:ssilva.bn@gmail.com"], [1, "btn-secondary", "btn--degrade"], [1, "list"], [1, "list__item"], ["href", "https://github.com/BraianS"], [1, "fab", "fa-github", "fa-3x"], ["href", "https://twitter.com/braiancode"], [1, "fab", "fa-twitter", "fa-3x"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Entre em contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "CONTATO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 5)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \u00A9 Copyright 2019\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
    } }, styles: [".contato[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px;\n  background-color: #363636;\n  color: #fff;\n}\n.contato__title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list__item[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media (min-width: 0) and (max-width: 767px) {\n  .btn-secondary[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 70px;\n    padding: 6px;\n    font-size: 28px;\n    transition: 1s ease;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHNjc3NcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ3JhbWElQzMlQTclQzMlQTNvXFxHSVRIVUJcXGFuZ3VsYXItcG9ydGZvbGlvXFxzcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0NRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCRExzQjtFQUN4QixhQUFBO0VBQ0EseUJFTE87RUZNUCxXRUZNO0FDSVI7QUhBRTtFQUNFLG1CQUFBO0FHRUo7QUhFQTtFQUNFLGFBQUE7QUdDRjtBSENFO0VBQ0UsYUFBQTtBR0NKO0FGZ0NRO0VENUJOO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VHQUY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uY29udGF0byB7XHJcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5MjE7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcS1iZXR3ZWVuKHhzLG1kKSB7XHJcbiAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICB9XHJcbn0iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcclxuXHJcbiAgICBAaWYgJGp1c3RpZnljb250ZW50IHsganVzdGlmeS1jb250ZW50OiAkanVzdGlmeWNvbnRlbnQ7fVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSgkbGluZSwkY29sdW1uKXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93OjMwMHB4XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwX2dldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcclxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL0NvbG9yc1xyXG4kZ3JheTIxOiAjMzYzNjM2O1xyXG4kYmx1ZTogIzE4NjhmZDtcclxuJGJsdWUtZGFyazogIzE5MzE3NTk5O1xyXG4kYmx1ZS1saWdodDogI2JiZGVmYjtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy9Gb250IFNpemVcclxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xyXG4kZm9udC1zaXplLWgyOiAycmVtO1xyXG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xyXG4kZm9udC1zaXplLWg0OiAxLjVyZW07XHJcbiRmb250LXNpemUtaDU6IDEuMjVyZW07XHJcbiRmb250LXNpemUtaDY6IDFyZW07XHJcblxyXG4kcGFyYWdyYXBoOiAxcmVtO1xyXG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XHJcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XHJcblxyXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcclxuXHJcbi8vRm9udFxyXG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiO1xyXG5cclxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kYnJlYWtwb2ludHMgOiAoXHJcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBtZDo3NjhweCwgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbik7IiwiLmNvbnRhdG8ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YXRvX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5saXN0X19pdGVtIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDApIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XG4gIH1cbn0iXX0= */"], data: { animation: [
            _shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation
        ] } });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


const _c0 = function (a0, a1) { return { "fa-bars": a0, "fa-times": a1 }; };
const _c1 = function (a0) { return { "nav__open": a0 }; };
class HeaderComponent {
    constructor() { }
    scroll(id) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        this.isNavOpen = false;
    }
    ngOnInit() {
        this.isNavOpen = false;
    }
    navOpened() {
        console.log("clicado");
        this.isNavOpen = !this.isNavOpen;
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 300) {
            let element = document.getElementsByClassName('nav')[0];
            element.classList.add('nav--sticky');
        }
        else {
            let element = document.getElementsByClassName('nav')[0];
            element.classList.remove('nav--sticky');
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 26, vars: 7, consts: [[1, "toggle", 3, "click"], [1, "fas", "fa-2x", 3, "ngClass"], [1, "nav", "nav--hightlighted", 3, "ngClass"], [1, "nav__brand"], ["href", "#"], [1, "gray"], [1, "nav__item"], [3, "click"], ["skill", ""], ["portfolio", ""], ["contato", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() { return ctx.navOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav")(4, "ul", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Braian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ilva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6)(12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6)(15, "a", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.scroll("skill"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6)(19, "a", 7, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() { return ctx.scroll("portfolio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6)(23, "a", 7, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() { return ctx.scroll("contato"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx.isNavOpen, ctx.isNavOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isNavOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: auto;\n  width: 100%;\n  z-index: 1;\n  transition: 1s;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 2.5em;\n  right: 2.5em;\n  color: #363636;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.nav[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  font-size: 1.6rem;\n  background: transparent;\n  padding: 16px;\n  transition: 1s;\n}\n\n.nav__brand[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 2rem;\n  font-weight: 300;\n  transform: translateX(-100rem);\n}\n\n.nav__brand[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation: slideIn 0.2s forwards;\n          animation: slideIn 0.2s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%] {\n  transform: translateX(100rem);\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation: slideIn 0.2s forwards;\n          animation: slideIn 0.2s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation: slideIn 0.4s forwards;\n          animation: slideIn 0.4s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation: slideIn 0.6s forwards;\n          animation: slideIn 0.6s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation: slideIn 0.8s forwards;\n          animation: slideIn 0.8s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation: slideIn 1s forwards;\n          animation: slideIn 1s forwards;\n}\n\n.nav--hightlighted[_ngcontent-%COMP%] {\n  content: \"\";\n}\n\n.nav--hightlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  overflow: hidden;\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #363636;\n  transition: width 0.3s;\n}\n\n.nav--hightlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  transition: width 0.3s;\n}\n\n.nav--sticky[_ngcontent-%COMP%] {\n  background: #1868fd;\n  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.6);\n  top: 0;\n  color: #363636;\n  padding: 5px;\n  transition: 0.5s;\n}\n\n@media (max-width: 767px) {\n  .toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    display: none;\n    padding-top: 0;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n  }\n\n  .nav__open[_ngcontent-%COMP%] {\n    display: flex;\n    transform: scale(1);\n    opacity: 1;\n    background-color: #19317599;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dyYW1hJUMzJUE3JUMzJUEzb1xcR0lUSFVCXFxhbmd1bGFyLXBvcnRmb2xpb1xcc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjRWpCTztFRmtCUCxlQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VHckIwQix5Qkh1Qkk7RUduQjFCLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkhnQnNCO0VBQ3hCLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FFaEJRO0VBQ0ksd0NBQUE7VUFBQSxnQ0FBQTtBRmtCWjs7QURBRTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FDQ0o7O0FFeEJRO0VBQ0ksd0NBQUE7VUFBQSxnQ0FBQTtBRjBCWjs7QUUzQlE7RUFDSSx3Q0FBQTtVQUFBLGdDQUFBO0FGNkJaOztBRTlCUTtFQUNJLHdDQUFBO1VBQUEsZ0NBQUE7QUZnQ1o7O0FFakNRO0VBQ0ksd0NBQUE7VUFBQSxnQ0FBQTtBRm1DWjs7QUVwQ1E7RUFDSSxzQ0FBQTtVQUFBLDhCQUFBO0FGc0NaOztBRGJFO0VBQ0UsV0FBQTtBQ2VKOztBRGJJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFdERHO0VGdURILHNCQUFBO0FDZU47O0FEWkk7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUNjTjs7QURWRTtFQUNFLG1CRWhFRztFRmlFSCwyQ0FBQTtFQUNBLE1BQUE7RUFDQSxjRXBFSztFRnFFTCxZQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QUU1Q1E7RUhxQ047SUFDRSxjQUFBO0VDV0Y7O0VEUkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VDV0Y7O0VEUkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsMkJFMUZRO0VEcUdWO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuLnRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyLjVlbTtcclxuICByaWdodDogMi41ZW07XHJcbiAgY29sb3I6ICRncmF5MjE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICR0aGlzOiAmO1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyxmbGV4LWVuZCk7ICBcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIFxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG4gICZfX2JyYW5kIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHJlbSk7XHJcbiAgICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoMSk7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDByZW0pO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmLS1oaWdodGxpZ2h0ZWQge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAjeyR0aGlzfV9faXRlbTo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JheTIxO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG4gICAgfVxyXG5cclxuICAgICN7ICR0aGlzfV9faXRlbTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLXN0aWNreSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCAkYm94LXNoYWRvdztcclxuICAgIHRvcDogMDtcclxuICAgIGNvbG9yOiAkZ3JheTIxO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKG1kLG1heCkge1xyXG4gIC50b2dnbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYgeyAgIFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIH1cclxuXHJcbiAgLm5hdl9fb3BlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1kYXJrO1xyXG4gIH1cclxufSIsImhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLnRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyLjVlbTtcbiAgcmlnaHQ6IDIuNWVtO1xuICBjb2xvcjogIzM2MzYzNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubmF2IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuLm5hdl9fYnJhbmQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDByZW0pO1xufVxuLm5hdl9fYnJhbmQ6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuMnMgZm9yd2FyZHM7XG59XG4ubmF2X19pdGVtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHJlbSk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2X19pdGVtOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjJzIGZvcndhcmRzO1xufVxuLm5hdl9faXRlbTpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb246IHNsaWRlSW4gMC40cyBmb3J3YXJkcztcbn1cbi5uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuNnMgZm9yd2FyZHM7XG59XG4ubmF2X19pdGVtOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGZvcndhcmRzO1xufVxuLm5hdl9faXRlbTpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb246IHNsaWRlSW4gMXMgZm9yd2FyZHM7XG59XG4ubmF2LS1oaWdodGxpZ2h0ZWQge1xuICBjb250ZW50OiBcIlwiO1xufVxuLm5hdi0taGlnaHRsaWdodGVkIC5uYXZfX2l0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzM2MzYzNjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cbi5uYXYtLWhpZ2h0bGlnaHRlZCAubmF2X19pdGVtOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xufVxuLm5hdi0tc3RpY2t5IHtcbiAgYmFja2dyb3VuZDogIzE4NjhmZDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdG9wOiAwO1xuICBjb2xvcjogIzM2MzYzNjtcbiAgcGFkZGluZzogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm5hdl9fb3BlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MzE3NTk5O1xuICB9XG59IiwiLy9Db2xvcnNcclxuJGdyYXkyMTogIzM2MzYzNjtcclxuJGJsdWU6ICMxODY4ZmQ7XHJcbiRibHVlLWRhcms6ICMxOTMxNzU5OTtcclxuJGJsdWUtbGlnaHQ6ICNiYmRlZmI7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbi8vRm9udCBTaXplXHJcbiRmb250LXNpemUtaDE6IDIuNXJlbTtcclxuJGZvbnQtc2l6ZS1oMjogMnJlbTtcclxuJGZvbnQtc2l6ZS1oMzogMS43NXJlbTtcclxuJGZvbnQtc2l6ZS1oNDogMS41cmVtO1xyXG4kZm9udC1zaXplLWg1OiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLWg2OiAxcmVtO1xyXG5cclxuJHBhcmFncmFwaDogMXJlbTtcclxuJHBhcmFncmFwaC1zbTogMS41cmVtO1xyXG4kcGFyYWdyYXBoLWxnOiAycmVtO1xyXG5cclxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJG92ZXJsYXk6IHJnYmEoMzIsIDMyLCAzMiwgMC43NSk7XHJcblxyXG4vL0ZvbnRcclxuJGZvbnQtb3Blbi1zZXJpZjogXCJPcGVucyBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRmb250LXJvYm90bzogXCJSb2JvdG9cIjtcclxuXHJcbi8vU2NyZWVucyBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcclxuJGJyZWFrcG9pbnRzIDogKFxyXG4gICAgeHM6MCwgLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIHNtOjU0NHB4LCAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgbWQ6NzY4cHgsIC8vIE1lZGl1bSBzY3JlZW4gLyB0YWJsZXRcclxuICAgIGxnOjk5MnB4LCAvL0xhcmdlIHNjcmVlbiAvIGRlc2t0b3BcclxuICAgIHhsOjEyMDAsIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxyXG4pOyIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xyXG5cclxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZWxlbWVudCB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRsaW5lLCRjb2x1bW4pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcclxuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xyXG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xyXG4gICAgICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogJGJyZWFrcG9pbnQtdmFsdWUgLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxyXG5AbWl4aW4gbXEtYmV0d2VlbigkbG93ZXIsJHVwcGVyKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcclxuICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5574:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 6055);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 1552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function PortfolioComponent_figure_7_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tools_r3.title);
} }
function PortfolioComponent_figure_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "figure", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9)(3, "h4", 10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const portfolio_r1 = ctx.$implicit;
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
} }
class PortfolioComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
    constructor(_el, cdRef, http) {
        super(_el, cdRef);
        this.http = http;
        this.projectList = [];
    }
    ngOnInit() {
        this.http.get("./assets/json/projetos.json").subscribe((portfolio) => {
            this.projectList = portfolio;
        });
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["portfolio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [["id", "portfolio", 1, "portfolio"], [1, "portfolio__heading"], [1, "portfolio__title"], [1, "underline"], [1, "container"], [1, "grid"], ["class", "photo photo--wrapper", 4, "ngFor", "ngForOf"], [1, "photo", "photo--wrapper"], ["alt", "projeto", 1, "photo__img", 3, "src"], [1, "overlay"], [1, "overlay__title"], [1, "overlay__paragraph"], [1, "list"], ["class", "list__item", 4, "ngFor", "ngForOf"], [1, "overlay__icon"], [1, "fab", "fa-github", "fa-4x", 3, "href"], [1, "list__item"], [1, "list__tag"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PortfolioComponent_figure_7_Template, 11, 5, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".portfolio[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem 0 3rem 0;\n  background-color: #bbdefb;\n}\n.portfolio__heading[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n}\n.portfolio__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #363636;\n}\n.photo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.photo__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  background-repeat: no-repeat;\n  background-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 1s;\n  transform: scale(1);\n}\n.photo[_ngcontent-%COMP%]:hover   .photo__img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.photo--wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.photo[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(32, 32, 32, 0.75);\n  opacity: 1;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 1s;\n  box-sizing: border-box;\n  padding: 10px;\n  opacity: 0;\n  color: #fff;\n}\n.overlay__title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 2em;\n}\n.overlay__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.overlay__icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 1.5em;\n}\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n}\n.list__item[_ngcontent-%COMP%] {\n  margin: 3px;\n  background-color: #1868fd;\n  border-radius: 20px;\n}\n.list__tag[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-row: 300px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 544px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-row: 300px;\n  }\n}\n@media (max-width: 767px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-row: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9ncmFtYSVDMyVBNyVDMyVBM29cXEdJVEhVQlxcYW5ndWxhci1wb3J0Zm9saW9cXHNyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0NRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCRExzQjtFQUN4QixzQkFBQTtFQUNBLHlCRUZXO0FDSWI7QUhBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUdFSjtBSENFO0VBQ0UsZUVMVztFRk1YLGNFZEs7QUNlVDtBSEdBO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0FHREY7QUhHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUdESjtBSElFO0VBQ0UscUJBQUE7QUdGSjtBSEtFO0VBQ0UsZ0JBQUE7QUdISjtBSE1FO0VBQ0Usd0NFdkJNO0VGd0JOLFVBQUE7QUdKSjtBSFFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXRXJETTtBQ2dEUjtBSE9FO0VBQ0UsV0V4REk7RUZ5REosZUFBQTtBR0xKO0FIUUU7RUFDRSxXRTdESTtBQ3VEUjtBSFNFO0VDakVNLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRDZEd0I7RUFDeEIsaUJBQUE7QUdISjtBSE9BO0VDdkVRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRG1Fc0I7QUdBMUI7QUhFRTtFQUNFLFdBQUE7RUFDQSx5QkU5RUc7RUYrRUgsbUJBQUE7QUdBSjtBSEdFO0VBQ0UsYUFBQTtBR0RKO0FIS0E7RUM5REksYUFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7QUU2REo7QUhHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FHQUY7QUZ6RFE7RUQ2RE47SUFDRSxnQkFBQTtFR0FGO0FBQ0Y7QUYvRFE7RURtRU47SUFDRSxnQkFBQTtFR0RGO0FBQ0Y7QUZwRVE7RUR5RU47SUFDRSxnQkFBQTtFR0ZGO0FBQ0Y7QUZ6RVE7RUQrRU47SUFDRSxpQkFBQTtFR0hGO0FBQ0Y7QUZsRVE7RUR5RU47SUNqR0UsYUFBQTtJQUNBLHFDQUFBO0lBQ0Esd0JBQUE7RUU4RkY7QUFDRjtBRnJGUTtFRDJGTjtJQ3ZHRSxhQUFBO0lBQ0EscUNBQUE7SUFDQSx3QkFBQTtFRXFHRjtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLnBvcnRmb2xpbyB7XHJcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcclxuICBwYWRkaW5nOiAzcmVtIDAgM3JlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWxpZ2h0O1xyXG5cclxuICAmX19oZWFkaW5nIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMjtcclxuICAgIGNvbG9yOiAkZ3JheTIxO1xyXG4gIH1cclxufVxyXG5cclxuLnBob3RvIHtcclxuICAkdGhpczogJjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyICN7JHRoaXN9X19pbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuXHJcbiAgJi0td3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3ZlcmxheTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fcGFyYWdyYXBoIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmX19pY29uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyk7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3cpO1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGFnIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgQGluY2x1ZGUgZ3JpZC10ZW1wbGF0ZSgzLCAxZnIpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKHNtLG1pbikge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKG1kLG1pbikge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKGxnLG1pbikge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKHhsLG1pbikge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcS1iZXR3ZWVuKG1kLGxnKSB7XHJcbiAgLmdyaWQge1xyXG4gICAgQGluY2x1ZGUgZ3JpZC10ZW1wbGF0ZSgyLCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbXEobWQsbWF4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgQGluY2x1ZGUgZ3JpZC10ZW1wbGF0ZSgxLCAxZnIpO1xyXG4gIH1cclxufSIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xyXG5cclxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZWxlbWVudCB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRsaW5lLCRjb2x1bW4pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcclxuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xyXG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xyXG4gICAgICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogJGJyZWFrcG9pbnQtdmFsdWUgLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxyXG5AbWl4aW4gbXEtYmV0d2VlbigkbG93ZXIsJHVwcGVyKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vQ29sb3JzXHJcbiRncmF5MjE6ICMzNjM2MzY7XHJcbiRibHVlOiAjMTg2OGZkO1xyXG4kYmx1ZS1kYXJrOiAjMTkzMTc1OTk7XHJcbiRibHVlLWxpZ2h0OiAjYmJkZWZiO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4vL0ZvbnQgU2l6ZVxyXG4kZm9udC1zaXplLWgxOiAyLjVyZW07XHJcbiRmb250LXNpemUtaDI6IDJyZW07XHJcbiRmb250LXNpemUtaDM6IDEuNzVyZW07XHJcbiRmb250LXNpemUtaDQ6IDEuNXJlbTtcclxuJGZvbnQtc2l6ZS1oNTogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS1oNjogMXJlbTtcclxuXHJcbiRwYXJhZ3JhcGg6IDFyZW07XHJcbiRwYXJhZ3JhcGgtc206IDEuNXJlbTtcclxuJHBhcmFncmFwaC1sZzogMnJlbTtcclxuXHJcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRvdmVybGF5OiByZ2JhKDMyLCAzMiwgMzIsIDAuNzUpO1xyXG5cclxuLy9Gb250XHJcbiRmb250LW9wZW4tc2VyaWY6IFwiT3BlbnMgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1yb2JvdG86IFwiUm9ib3RvXCI7XHJcblxyXG4vL1NjcmVlbnMgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRicmVha3BvaW50cyA6IChcclxuICAgIHhzOjAsIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTo1NDRweCwgLy8gU21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIG1kOjc2OHB4LCAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XHJcbiAgICBsZzo5OTJweCwgLy9MYXJnZSBzY3JlZW4gLyBkZXNrdG9wXHJcbiAgICB4bDoxMjAwLCAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcclxuKTsiLCIucG9ydGZvbGlvIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogM3JlbSAwIDNyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVmYjtcbn1cbi5wb3J0Zm9saW9fX2hlYWRpbmcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wb3J0Zm9saW9fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzM2MzYzNjtcbn1cblxuLnBob3RvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5waG90b19faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnBob3RvOmhvdmVyIC5waG90b19faW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuLnBob3RvLS13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5waG90bzpob3ZlciAub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC43NSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDFzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5vdmVybGF5X190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4ub3ZlcmxheV9fcGFyYWdyYXBoIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ub3ZlcmxheV9faWNvbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xufVxuXG4ubGlzdCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubGlzdF9faXRlbSB7XG4gIG1hcmdpbjogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2OGZkO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmxpc3RfX3RhZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3c6IDMwMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwKSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTE0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6IDMwMHB4O1xuICB9XG59Il19 */"], data: { animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation] } });


/***/ }),

/***/ 6055:
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollAnimation": () => (/* binding */ scrollAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const scrollAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scrollAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: "translateX(0)" })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: "translateY(20%)" })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('show => hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('hide => show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('700ms ease-in'))
]);


/***/ }),

/***/ 1552:
/*!******************************************************!*\
  !*** ./src/app/shared/scroll-animation.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollAnimationComponent": () => (/* binding */ ScrollAnimationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ScrollAnimationComponent {
    constructor(_el, cdRef) {
        this._el = _el;
        this.cdRef = cdRef;
    }
    onScroll() {
        this.componentPosition = this._el.nativeElement.offsetTop;
        this.scrollPosition = window.pageYOffset + ((window.innerHeight * 3) / 4);
        this.checkState();
    }
    checkState() {
        if (this.state = 'hide') {
            if (this.scrollPosition >= this.componentPosition) {
                this.state = 'show';
                this.unsubscribe();
            }
        }
    }
    subscribe() {
        this.subscribeScroll = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'scroll')
            .subscribe(() => this.onScroll());
    }
    unsubscribe() {
        if (this.subscribeScroll) {
            this.subscribeScroll.unsubscribe();
        }
    }
    ngAfterViewInit() {
        this.state = 'hide';
        this.cdRef.detectChanges();
        this.subscribe();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
ScrollAnimationComponent.ɵfac = function ScrollAnimationComponent_Factory(t) { return new (t || ScrollAnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ScrollAnimationComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ScrollAnimationComponent, outputs: { state: "state" } });
ScrollAnimationComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollAnimationComponent, factory: ScrollAnimationComponent.ɵfac });


/***/ }),

/***/ 4673:
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 6055);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 1552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function SkillComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](skill_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r1.title);
} }
class SkillComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
    constructor(_el, cdRef, http) {
        super(_el, cdRef);
        this.http = http;
        this.skills = [];
    }
    ngOnInit() {
        this.http.get("./assets/json/skills.json").subscribe(skills => {
            this.skills = skills;
        });
    }
}
SkillComponent.ɵfac = function SkillComponent_Factory(t) { return new (t || SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillComponent, selectors: [["skill"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 4, consts: [["id", "skill", 1, "skill"], [1, "skill__heading"], [1, "skill_title"], [1, "skill__paragraph"], [1, "underline"], [1, "list"], ["class", "list__item list--visible ", 4, "ngFor", "ngForOf"], [1, "fab", "fa-angular", "fa-2x", "fab--border"], [1, "list__item", "list--visible"], [1, "list__label"]], template: function SkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "O que utilizo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ferramentas e tecnologias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SkillComponent_li_8_Template, 4, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Atualmente aprendendo sobre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "MICROSERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".skill[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 4rem 0 4rem 0;\n}\n.skill__heading[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  color: #fff;\n}\n.skill_title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-transform: uppercase;\n  color: #363636;\n}\n.skill__paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #363636;\n  font-size: 1rem;\n}\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  padding: 15px;\n}\n.list__item[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n}\n.list__label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 49px;\n  line-height: 49px;\n  border-radius: 17px;\n  margin-top: 20px;\n  color: #fff;\n  background: #1868fd;\n  text-align: center;\n  visibility: hidden;\n}\n.list__label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #1868fd;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.list--visible[_ngcontent-%COMP%]:hover   .list__label[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9ncmFtYSVDMyVBNyVDMyVBM29cXEdJVEhVQlxcYW5ndWxhci1wb3J0Zm9saW9cXHNyY1xcYXBwXFxza2lsbFxcc2tpbGwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0NRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCRExzQjtFQUN4QixzQkFBQTtBRUVGO0FGQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0dMSTtBRE9SO0FGQ0U7RUFDRSxlR0xXO0VITVgseUJBQUE7RUFDQSxjR2ZLO0FEZ0JUO0FGRUU7RUFDRSxtQkFBQTtFQUNBLGNHcEJLO0VIcUJMLGVHUFE7QURPWjtBRklBO0VDdEJRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRG1Cc0I7RUFDeEIsYUFBQTtBRUVGO0FGQUU7RUMzQk0sdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JEdUJ3QjtBRU01QjtBRkhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdHckNJO0VIc0NKLG1CR3pDRztFSDBDSCxrQkFBQTtFQUNBLGtCQUFBO0FFS0o7QUZISTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRUtOO0FGREU7RUFDRSxtQkFBQTtBRUdKIiwiZmlsZSI6InNraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uc2tpbGwge1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbik7XHJcbiAgcGFkZGluZzogNHJlbSAwIDRyZW0gMDtcclxuXHJcbiAgJl9faGVhZGluZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl90aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICRncmF5MjE7XHJcbiAgfVxyXG5cclxuICAmX19wYXJhZ3JhcGgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAkZ3JheTIxO1xyXG4gICAgZm9udC1zaXplOiAkcGFyYWdyYXBoO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICR0aGlzOiAmO1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLS12aXNpYmxlOmhvdmVyICN7JHRoaXN9X19sYWJlbCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufSIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xyXG5cclxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZWxlbWVudCB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRsaW5lLCRjb2x1bW4pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcclxuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xyXG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xyXG4gICAgICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogJGJyZWFrcG9pbnQtdmFsdWUgLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxyXG5AbWl4aW4gbXEtYmV0d2VlbigkbG93ZXIsJHVwcGVyKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsIi5za2lsbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDRyZW0gMCA0cmVtIDA7XG59XG4uc2tpbGxfX2hlYWRpbmcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2tpbGxfdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMzYzNjM2O1xufVxuLnNraWxsX19wYXJhZ3JhcGgge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzM2MzYzNjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubGlzdCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubGlzdF9faXRlbSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGlzdF9fbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBsaW5lLWhlaWdodDogNDlweDtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxODY4ZmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmxpc3RfX2xhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjMTg2OGZkO1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5saXN0LS12aXNpYmxlOmhvdmVyIC5saXN0X19sYWJlbCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59IiwiLy9Db2xvcnNcclxuJGdyYXkyMTogIzM2MzYzNjtcclxuJGJsdWU6ICMxODY4ZmQ7XHJcbiRibHVlLWRhcms6ICMxOTMxNzU5OTtcclxuJGJsdWUtbGlnaHQ6ICNiYmRlZmI7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbi8vRm9udCBTaXplXHJcbiRmb250LXNpemUtaDE6IDIuNXJlbTtcclxuJGZvbnQtc2l6ZS1oMjogMnJlbTtcclxuJGZvbnQtc2l6ZS1oMzogMS43NXJlbTtcclxuJGZvbnQtc2l6ZS1oNDogMS41cmVtO1xyXG4kZm9udC1zaXplLWg1OiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLWg2OiAxcmVtO1xyXG5cclxuJHBhcmFncmFwaDogMXJlbTtcclxuJHBhcmFncmFwaC1zbTogMS41cmVtO1xyXG4kcGFyYWdyYXBoLWxnOiAycmVtO1xyXG5cclxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJG92ZXJsYXk6IHJnYmEoMzIsIDMyLCAzMiwgMC43NSk7XHJcblxyXG4vL0ZvbnRcclxuJGZvbnQtb3Blbi1zZXJpZjogXCJPcGVucyBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRmb250LXJvYm90bzogXCJSb2JvdG9cIjtcclxuXHJcbi8vU2NyZWVucyBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcclxuJGJyZWFrcG9pbnRzIDogKFxyXG4gICAgeHM6MCwgLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIHNtOjU0NHB4LCAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgbWQ6NzY4cHgsIC8vIE1lZGl1bSBzY3JlZW4gLyB0YWJsZXRcclxuICAgIGxnOjk5MnB4LCAvL0xhcmdlIHNjcmVlbiAvIGRlc2t0b3BcclxuICAgIHhsOjEyMDAsIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxyXG4pOyJdfQ== */"], data: { animation: [
            _shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation
        ] } });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map