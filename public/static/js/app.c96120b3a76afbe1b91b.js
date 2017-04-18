webpackJsonp([1],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(129)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_material_design_lite_material_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_material_design_lite_material_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_material_design_lite_material_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Sidebar_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Sidebar_vue__);
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
        NewsList: __WEBPACK_IMPORTED_MODULE_1__components_NewsList_vue___default.a, Sidebar: __WEBPACK_IMPORTED_MODULE_2__components_Sidebar_vue___default.a
    }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_eventHub__ = __webpack_require__(2);
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
    name: 'collapsible',
    props: ['category', 'content'],

    data() {
        return {
            open: false
        };
    },

    filters: {
        cap(str) {
            if (str) {
                return str[0].toUpperCase() + str.slice(1, str.length);
            }
        }
    },

    methods: {
        toggle(category) {
            console.log('got cat', category);
            this.open = !this.open;
        },

        setFilter(category, filter) {
            __WEBPACK_IMPORTED_MODULE_0__services_eventHub__["a" /* default */].$emit('set-filter', { parent: category, filter: filter });
        }
    },

    created() {
        // console.log('cats', this.category, this.content)
    }
});

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_local_env_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_eventHub__ = __webpack_require__(2);
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
    name: 'news-list',

    data() {
        return {
            news: [],
            loading: true
        };
    },

    methods: {
        tallClass(index) {
            return index % 2 === 0 ? '' : '';
        },

        getData(data) {
            let { list } = data;
            let news = [];
            let promises = [];
            this.loading = true;

            list.forEach(el => {
                let promise = window.fetch(`https://newsapi.org/v1/articles?source=${el}&apiKey=${__WEBPACK_IMPORTED_MODULE_0__config_local_env_js__["a" /* config */].apiKey}`).then(response => response.json());
                promises.push(promise);
            });

            Promise.all(promises).then(responses => {
                news = responses.map(resp => {
                    // Attach the name of the source to each article for rendering
                    resp.articles.forEach(article => article.sourceName = resp.source);
                    return resp.articles;
                });

                this.news = [].concat(...news);
                this.loading = false;
            });
        },

        filterBySource(source) {
            // this.loading = true;
            this.news = this.news.filter(el => el.sourceName === source);
            // this.loading = false;
        }
    },

    filters: {
        time(value) {
            value = value || new Date();
            return __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format('D MMM YYYY');
        }
    },

    mounted() {
        let self = this;
        window.fetch(`https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=${__WEBPACK_IMPORTED_MODULE_0__config_local_env_js__["a" /* config */].apiKey}`).then(response => response.json()).then(response => {
            self.loading = false;
            self.news = response.articles;
        });
    },

    created() {
        __WEBPACK_IMPORTED_MODULE_2__services_eventHub__["a" /* default */].$on('send-list', this.getData);
    }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collapsible_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collapsible_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Collapsible_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_local_env_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_eventHub__ = __webpack_require__(2);
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
    name: 'sidebar',
    components: { Collapsible: __WEBPACK_IMPORTED_MODULE_0__Collapsible_vue___default.a },

    data() {
        return {
            sources: [],
            filters: { category: {}, name: {}, language: {}, country: {} },
            open: false
        };
    },

    methods: {
        constructFilters(data) {
            let { filters } = this;
            for (let filter of Object.keys(filters)) {
                data.forEach(el => {
                    filters[filter][el[filter]] = filters[filter][el[filter]] || [];
                    filters[filter][el[filter]].push(el.id);
                });
            }
            this.filters = filters;
        },

        selectFilter(data) {
            let { parent, filter } = data;
            let filterList = this.filters[parent][filter];

            __WEBPACK_IMPORTED_MODULE_2__services_eventHub__["a" /* default */].$emit('send-list', { list: filterList });
            this.closeSidebar();
        },

        closeSidebar() {
            // Direct DOM manipulation since that's how sidebar's is-visible class is set by MDL
            document.getElementsByClassName('mdl-layout__drawer--custom')[0].classList.remove('is-visible');
        }
    },

    mounted() {
        let self = this;

        window.fetch(`https://newsapi.org/v1/sources?Key=${__WEBPACK_IMPORTED_MODULE_1__config_local_env_js__["a" /* config */].apiKey}`).then(response => response.json()).then(response => self.sources = response.sources).then(() => self.constructFilters(self.sources));
    },

    created() {
        __WEBPACK_IMPORTED_MODULE_2__services_eventHub__["a" /* default */].$on('set-filter', this.selectFilter);
    }

});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(121);
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

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(130)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(128)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(137),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(127)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(136),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-layout__drawer mdl-layout__drawer--custom"
  }, [_c('span', {
    staticClass: "mdl-layout-title"
  }, [_vm._v("Sort by:\n        "), _c('button', {
    staticClass: "mdl-button mdl-js-button mdl-button--icon close-sidebar",
    on: {
      "click": _vm.closeSidebar
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("clear")])])]), _vm._v(" "), _c('ul', {
    staticClass: "collapsible",
    attrs: {
      "data-collapsible": "accordion"
    }
  }, _vm._l((_vm.filters), function(val, key) {
    return _c('collapsible', {
      key: key,
      attrs: {
        "category": key,
        "content": val
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.loading) ? _c('ul', {
    staticClass: "news-list"
  }, _vm._l((_vm.news), function(article, index) {
    return _c('li', {
      staticClass: "mdl-card__wrapper"
    }, [_c('div', {
      staticClass: "mdl-card mdl-card__custom mdl-shadow--2dp"
    }, [_c('div', {
      staticClass: "mdl-card__media cover",
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
    }, [_c('p', [_vm._v(_vm._s(article.description))])]), _vm._v(" "), _c('div', {
      staticClass: "mdl-card__actions mdl-card--border"
    }, [_c('a', {
      staticClass: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.filterBySource(article.sourceName)
        }
      }
    }, [_vm._v("\n                            " + _vm._s(article.sourceName) + "\n                        ")])])])])])
  })) : _vm._e(), _vm._v(" "), (_vm.loading) ? _c('div', {
    staticClass: "loader-wrapper"
  }, [_c('div', {
    staticClass: "mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "mdl-layout mdl-js-layout"
  }, [_vm._m(0), _vm._v(" "), _c('sidebar'), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('main', {
    staticClass: "mdl-layout__content"
  }, [_c('NewsList')], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "mdl-layout__header mdl-layout__header--transparent"
  }, [_c('div', {
    staticClass: "mdl-layout__header-row"
  }, [_c('div', {
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

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('div', {
    staticClass: "collapsible-header",
    on: {
      "click": function($event) {
        _vm.toggle(_vm.category)
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm._f("cap")(_vm.category)) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "collapsible-body",
    class: {
      active: _vm.open
    }
  }, [_c('ul', {
    staticClass: "collapsible-body__list"
  }, _vm._l((_vm.content), function(v, k) {
    return _c('li', {
      key: k,
      on: {
        "click": function($event) {
          _vm.setFilter(_vm.category, k)
        }
      }
    }, [_vm._v(_vm._s(_vm._f("cap")(k)))])
  }))])])
},staticRenderFns: []}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);


const eventHub = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]();

/* harmony default export */ __webpack_exports__["a"] = (eventHub);

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const config = {
    apiKey: '99d30bc2e3464a8598f7bbc4d9f097ee'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = config;


/***/ })

},[126]);
//# sourceMappingURL=app.c96120b3a76afbe1b91b.js.map