"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableDefaultApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var DefaultApi_1 = require("../apis/DefaultApi");
var ObservableDefaultApi = (function () {
    function ObservableDefaultApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApi_1.DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApi_1.DefaultApiResponseProcessor();
    }
    ObservableDefaultApi.prototype.cancelNotification = function (app_id, notification_id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.cancelNotification(app_id, notification_id, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.cancelNotification(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.createApp = function (app, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createApp(app, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createApp(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.createNotification = function (notification, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createNotification(notification, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createNotification(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.createPlayer = function (player, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createPlayer(player, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createPlayer(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.createSegments = function (app_id, segment, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSegments(app_id, segment, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createSegments(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.deletePlayer = function (app_id, player_id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deletePlayer(app_id, player_id, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deletePlayer(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.deleteSegments = function (app_id, segment_id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteSegments(app_id, segment_id, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteSegments(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.exportPlayers = function (app_id, export_players_request_body, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.exportPlayers(app_id, export_players_request_body, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.exportPlayers(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getApp = function (app_id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getApp(app_id, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getApp(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getApps = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getApps(_options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getApps(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getNotification = function (app_id, notification_id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNotification(app_id, notification_id, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getNotification(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getNotificationHistory = function (notification_id, get_notification_request_body, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNotificationHistory(notification_id, get_notification_request_body, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getNotificationHistory(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getNotifications = function (app_id, limit, offset, kind, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNotifications(app_id, limit, offset, kind, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getNotifications(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getOutcomes = function (app_id, outcome_names, outcome_names2, outcome_time_range, outcome_platforms, outcome_attribution, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOutcomes(app_id, outcome_names, outcome_names2, outcome_time_range, outcome_platforms, outcome_attribution, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getOutcomes(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getPlayer = function (app_id, player_id, email_auth_hash, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPlayer(app_id, player_id, email_auth_hash, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getPlayer(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.getPlayers = function (app_id, limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPlayers(app_id, limit, offset, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getPlayers(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.updateApp = function (app_id, app, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateApp(app_id, app, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateApp(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.updatePlayer = function (player_id, player, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updatePlayer(player_id, player, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updatePlayer(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.updatePlayerTags = function (app_id, external_user_id, update_player_tags_request_body, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updatePlayerTags(app_id, external_user_id, update_player_tags_request_body, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updatePlayerTags(rsp); }));
        }));
    };
    return ObservableDefaultApi;
}());
exports.ObservableDefaultApi = ObservableDefaultApi;
//# sourceMappingURL=ObservableAPI.js.map