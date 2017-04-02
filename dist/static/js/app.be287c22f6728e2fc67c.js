webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(125)

var Component = __webpack_require__(116)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(130),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const config = {
    apiKey: '99d30bc2e3464a8598f7bbc4d9f097ee'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = config;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_material_design_lite_material_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_material_design_lite_material_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_material_design_lite_material_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    components: {
        NewsList: __WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue___default.a
    }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_local_env_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'news-list',

    data() {
        return {
            news: [],
            sources: []
        };
    },

    methods: {
        tallClass(index) {
            return index % 2 === 0 ? '' : '';
        }
    },

    filters: {
        time(value) {
            value = value || new Date();
            return __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format('D MMM YYYY');
        }
    },

    created() {
        let self = this;
        window.fetch(`https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=${__WEBPACK_IMPORTED_MODULE_0__config_local_env_js__["a" /* config */].apiKey}`).then(response => response.json()).then(response => self.news = response.articles);
    }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



//import 'material-design-lite/material.min.css';

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(116)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(129),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "news-list"
  }, _vm._l((_vm.news), function(article, index) {
    return _c('li', {
      staticClass: "mdl-card__wrapper"
    }, [_c('div', {
      staticClass: "mdl-card mdl-card__custom mdl-shadow--2dp"
    }, [_c('div', {
      staticClass: "mdl-card__media cover",
      class: _vm.tallClass(index),
      style: ({
        'background-image': 'url(' + article.urlToImage + ')'
      })
    }), _vm._v(" "), _c('div', {
      staticClass: "mdl-card__content"
    }, [_c('p', {
      staticClass: "mdl-card__date"
    }, [_vm._v(_vm._s(_vm._f("time")(article.publishedAt)))]), _vm._v(" "), _c('p', {
      staticClass: "mdl-card__author"
    }, [_vm._v(_vm._s(article.author))]), _vm._v(" "), _c('a', {
      attrs: {
        "href": article.url
      }
    }, [_c('h3', {
      staticClass: "mdl-card__title-text"
    }, [_vm._v(_vm._s(article.title))])]), _vm._v(" "), _c('div', {
      staticClass: "mdl-card__supporting-text"
    }, [_c('p', [_vm._v(_vm._s(article.description))])]), _vm._v(" "), _vm._m(0, true)])])])
  }))
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-card__actions mdl-card--border"
  }, [_c('a', {
    staticClass: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
  }, [_vm._v("\n                        View Updates\n                      ")])])
}]}

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "mdl-layout mdl-js-layout"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('main', {
    staticClass: "mdl-layout__content"
  }, [_c('NewsList')], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "mdl-layout__header mdl-layout__header--transparent"
  }, [_c('div', {
    staticClass: "mdl-layout__header-row"
  }, [_c('span', {
    staticClass: "mdl-layout-title"
  }, [_vm._v("Title")]), _vm._v(" "), _c('div', {
    staticClass: "mdl-layout-spacer"
  }), _vm._v(" "), _c('nav', {
    staticClass: "mdl-navigation"
  }, [_c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-layout__drawer mdl-layout__drawer--custom"
  }, [_c('span', {
    staticClass: "mdl-layout-title"
  }, [_vm._v("Title")]), _vm._v(" "), _c('nav', {
    staticClass: "mdl-navigation"
  }, [_c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('a', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Link")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-layout__drawer-button",
    attrs: {
      "aria-expanded": "false",
      "role": "button",
      "tabindex": "0"
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("")])])
}]}

/***/ })

},[123]);
//# sourceMappingURL=app.be287c22f6728e2fc67c.js.map