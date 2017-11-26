var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://localhost:4200/inline.bundle.js/', 'dir': '_m0/0', 'linked': 2, 'len': 5830 },
    { 'url': 'http://localhost:4200/main.bundle.js/', 'dir': '_m0/1', 'linked': 5, 'len': 65764 },
    { 'url': 'http://localhost:4200/polyfills.bundle.js/', 'dir': '_m0/2', 'linked': 2, 'len': 199499 },
    { 'url': 'http://localhost:4200/styles.bundle.js/', 'dir': '_m0/3', 'linked': 2, 'len': 12418 },
    { 'url': 'http://localhost:4200/vendor.bundle.js/', 'dir': '_m0/4', 'linked': 2, 'len': 400000 },
    { 'url': 'http://localhost:8080/', 'dir': '_m0/5', 'linked': 2, 'len': 323 },
    { 'url': 'http://localhost:8080/login/', 'dir': '_m0/6', 'linked': 2, 'len': 210 },
    { 'url': 'http://localhost:8080/login/.sf/', 'dir': '_m0/7', 'linked': 2, 'len': 114 },
    { 'url': 'http://localhost:8080/profile/', 'dir': '_m0/8', 'linked': 1, 'len': 250 },
    { 'url': 'http://localhost:8080/profile/transfers/', 'dir': '_m0/9', 'linked': 1, 'len': 2268 },
    { 'url': 'http://localhost:8080/profile/users/', 'dir': '_m0/10', 'linked': 1, 'len': 1629 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:4200/css-loader/index.js', 'dir': '_m1/0', 'linked': 1, 'len': 158 },
    { 'url': 'http://localhost:4200/webpack-dev-server', 'dir': '_m1/1', 'linked': 1, 'len': 382 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/', 'dir': '_m2/0', 'linked': 2, 'len': 121200 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:4200/', 'dir': '_m3/0', 'linked': 2, 'len': 621 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:4200/__webpack_dev_server__/live.bundle.js/', 'dir': '_m4/0', 'linked': 2, 'len': 150347 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40301, 'samples': [
    { 'url': 'http://localhost:8080/login.sfish/9-8', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8080/profile.sfish/9-8', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://localhost:4200/webpack-dev-server/client', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:4200/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:4200/__webpack_dev_server__/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:4200/__webpack_dev_server__/live.bundle.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:4200/__webpack_dev_server__/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:4200/ansi-html/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost:4200/assets/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/github.com/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/github.com/necolas/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://localhost:4200/assets/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/github.com/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://localhost:4200/common/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://localhost:4200/common/@angular/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'http://localhost:4200/common/@angular/common/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'http://localhost:4200/common/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'http://localhost:4200/common/@angular/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'http://localhost:4200/core/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'http://localhost:4200/core/@angular/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/19' },
    { 'url': 'http://localhost:4200/core/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/20' },
    { 'url': 'http://localhost:4200/core-js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/21' },
    { 'url': 'http://localhost:4200/core-js/es7/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/22' },
    { 'url': 'http://localhost:4200/core-js/modules/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/23' },
    { 'url': 'http://localhost:4200/core-js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/24' },
    { 'url': 'http://localhost:4200/css-loader/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/25' },
    { 'url': 'http://localhost:4200/css-loader/lib/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/26' },
    { 'url': 'http://localhost:4200/css-loader/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/27' },
    { 'url': 'http://localhost:4200/debug/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/28' },
    { 'url': 'http://localhost:4200/debug/src/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/29' },
    { 'url': 'http://localhost:4200/debug/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/30' },
    { 'url': 'http://localhost:4200/forms/@angular/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/31' },
    { 'url': 'http://localhost:4200/html-entities/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/32' },
    { 'url': 'http://localhost:4200/html-entities/lib/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/33' },
    { 'url': 'http://localhost:4200/html-entities/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/34' },
    { 'url': 'http://localhost:4200/inherits/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/35' },
    { 'url': 'http://localhost:4200/inline.bundle.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/36' },
    { 'url': 'http://localhost:4200/json3/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/37' },
    { 'url': 'http://localhost:4200/json3/lib/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/38' },
    { 'url': 'http://localhost:4200/loglevel/lib/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/39' },
    { 'url': 'http://localhost:4200/main.bundle.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/40' },
    { 'url': 'http://localhost:4200/platform-browser/@angular/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/41' },
    { 'url': 'http://localhost:4200/platform-browser-dynamic/@angular/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/42' },
    { 'url': 'http://localhost:4200/polyfills.bundle.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/43' },
    { 'url': 'http://localhost:4200/process/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/44' },
    { 'url': 'http://localhost:4200/querystring-es3/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/45' },
    { 'url': 'http://localhost:4200/router/@angular/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/46' },
    { 'url': 'http://localhost:4200/rxjs/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/47' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/48' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/add/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/49' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/add/observable/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/50' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/add/operator/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/51' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/observable/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/52' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/operator/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/53' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/operators/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/54' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/scheduler/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/55' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/symbol/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/56' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/util/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/57' },
    { 'url': 'http://localhost:4200/rxjs/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/58' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/59' },
    { 'url': 'http://localhost:4200/rxjs/_esm5/add/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/60' },
    { 'url': 'http://localhost:4200/src/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/61' },
    { 'url': 'http://localhost:4200/src/FOO-sfi9876/', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/62' },
    { 'url': 'http://localhost:4200/src/FOO-sfi9876$/', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/63' },
    { 'url': 'http://localhost:4200/src/app/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/64' },
    { 'url': 'http://localhost:4200/src/app/403/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/65' },
    { 'url': 'http://localhost:4200/src/app/admin/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/66' },
    { 'url': 'http://localhost:4200/src/app/history/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/67' },
    { 'url': 'http://localhost:4200/src/app/login/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/68' },
    { 'url': 'http://localhost:4200/src/app/services/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/69' },
    { 'url': 'http://localhost:4200/src/app/transaction/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/70' },
    { 'url': 'http://localhost:4200/src/environments/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/71' },
    { 'url': 'http://localhost:4200/src/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/72' },
    { 'url': 'http://localhost:4200/src/FOO-sfi9876/', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/73' },
    { 'url': 'http://localhost:4200/src/app/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/74' },
    { 'url': 'http://localhost:4200/style-loader/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/75' },
    { 'url': 'http://localhost:4200/styles.bundle.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/76' },
    { 'url': 'http://localhost:4200/vendor.bundle.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/77' },
    { 'url': 'http://localhost:4200/vendor.bundle.js/*/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/78' },
    { 'url': 'http://localhost:4200/vendor.bundle.js/img/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/79' },
    { 'url': 'http://localhost:4200/vendor.bundle.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/80' },
    { 'url': 'http://localhost:4200/webpack/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/81' },
    { 'url': 'http://localhost:4200/webpack/buildin/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/82' },
    { 'url': 'http://localhost:4200/webpack/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/83' },
    { 'url': 'http://localhost:4200/zone.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/84' },
    { 'url': 'http://localhost:4200/zone.js/dist/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/85' },
    { 'url': 'http://localhost:4200/zone.js/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/86' },
    { 'url': 'http://localhost:8080/profile/', 'extra': 'During injection testing', 'sid': '0', 'dir': '_i2/87' },
    { 'url': 'http://localhost:8080/profile/transfers/', 'extra': 'During injection testing', 'sid': '0', 'dir': '_i2/88' },
    { 'url': 'http://localhost:8080/profile/users/', 'extra': 'During injection testing', 'sid': '0', 'dir': '_i2/89' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:4200/__webpack_dev_server__/live.bundle.js/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:4200/webpack-dev-server', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:4200/webpack-dev-server/client', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:4200/webpack-dev-server/client/index.js', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:4200/webpack-dev-server/client/index.js?9876sfi', 'extra': '', 'sid': '0', 'dir': '_i3/4' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/', 'extra': 'text/css', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/', 'extra': 'text/css', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:4200/inline.bundle.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:4200/main.bundle.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:4200/polyfills.bundle.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://localhost:4200/styles.bundle.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://localhost:4200/vendor.bundle.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/6' },
    { 'url': 'http://localhost:4200/vendor.bundle.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/7' },
    { 'url': 'http://localhost:8080/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/8' },
    { 'url': 'http://localhost:8080/login/.sf/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/9' },
    { 'url': 'http://localhost:8080/profile/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/10' },
    { 'url': 'http://localhost:8080/profile/transfers/sfi9876', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/11' },
    { 'url': 'http://localhost:8080/profile/users/sfi9876', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/12' },
    { 'url': 'http://localhost:8080/transfer/.sf/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/13' },
    { 'url': 'http://localhost:8080/login/9-8', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/14' },
    { 'url': 'http://localhost:8080/profile.sfish', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i4/15' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://localhost:4200/main.bundle.js/', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8080/profile.sfish', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8080/login', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8080/login?username=', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8080/login.sfish', 'extra': '', 'sid': '0', 'dir': '_i7/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:4200/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:4200/__webpack_dev_server__/live.bundle.js/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://localhost:8080/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'http://localhost:8080/profile/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/5' },
    { 'url': 'http://localhost:8080/profile/transfers/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/6' },
    { 'url': 'http://localhost:8080/profile/users/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/7' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost:4200/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:4200/__webpack_dev_server__/live.bundle.js/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i9/2' },
    { 'url': 'http://localhost:4200/assets/bootstrap.min.css/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i9/3' } ]
  }
];

