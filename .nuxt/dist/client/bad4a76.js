(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{271:function(t,e,r){"use strict";r.r(e);var l=r(4),n=(r(36),r(66)),c={name:"profileIndex",middleware:"authenticated",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,c=r.username,Object(n.b)({method:"GET",url:"/api/profiles/".concat(c)});case 3:return l=e.sent,data=l.data,e.abrupt("return",{profile:data.profile});case 6:case"end":return e.stop()}var c}),e)})))()}},o=r(30),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v(t._s(t.profile.bio)+" ")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active:t.profile.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n             \n            Follow Eric Simons\n          ")])])])])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:""}},[t._v("My Articles")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Favorited Articles")])])])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v("Eric Simons")]),t._v(" "),r("span",{staticClass:"date"},[t._v("January 20th")])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[r("i",{staticClass:"ion-heart"}),t._v(" 29\n            ")])]),t._v(" "),r("a",{staticClass:"preview-link",attrs:{href:""}},[r("h1",[t._v("How to build webapps that scale")]),t._v(" "),r("p",[t._v("This is the description for the post.")]),t._v(" "),r("span",[t._v("Read more...")])])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:"http://i.imgur.com/N4VcUeJ.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v("Albert Pai")]),t._v(" "),r("span",{staticClass:"date"},[t._v("January 20th")])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[r("i",{staticClass:"ion-heart"}),t._v(" 32\n            ")])]),t._v(" "),r("a",{staticClass:"preview-link",attrs:{href:""}},[r("h1",[t._v("The song you won't ever stop singing. No matter how hard you try.")]),t._v(" "),r("p",[t._v("This is the description for the post.")]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},[r("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("Music")]),t._v(" "),r("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("Song")])])])])])])])}],!1,null,"4e5b7493",null);e.default=component.exports}}]);