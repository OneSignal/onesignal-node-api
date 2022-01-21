"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApiResponseProcessor = exports.DefaultApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var DefaultApiRequestFactory = (function (_super) {
    __extends(DefaultApiRequestFactory, _super);
    function DefaultApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultApiRequestFactory.prototype.cancelNotification = function (app_id, notification_id, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling cancelNotification.');
                        }
                        if (notification_id === null || notification_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter notification_id was null or undefined when calling cancelNotification.');
                        }
                        localVarPath = '/notifications/{notification_id}'
                            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notification_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (app_id !== undefined) {
                            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(app_id, "string", ""));
                        }
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.createApp = function (app, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app === null || app === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app was null or undefined when calling createApp.');
                        }
                        localVarPath = '/apps';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(app, "App", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["user_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.createNotification = function (notification, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (notification === null || notification === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter notification was null or undefined when calling createNotification.');
                        }
                        localVarPath = '/notifications';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(notification, "Notification", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.createPlayer = function (player, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (player === null || player === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter player was null or undefined when calling createPlayer.');
                        }
                        localVarPath = '/players';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(player, "Player", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.createSegments = function (app_id, segment, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling createSegments.');
                        }
                        localVarPath = '/apps/{app_id}/segments'
                            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(segment, "Segment", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.deletePlayer = function (app_id, player_id, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling deletePlayer.');
                        }
                        if (player_id === null || player_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter player_id was null or undefined when calling deletePlayer.');
                        }
                        localVarPath = '/players/{player_id}'
                            .replace('{' + 'player_id' + '}', encodeURIComponent(String(player_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (app_id !== undefined) {
                            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(app_id, "string", ""));
                        }
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.deleteSegments = function (app_id, segment_id, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling deleteSegments.');
                        }
                        if (segment_id === null || segment_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter segment_id was null or undefined when calling deleteSegments.');
                        }
                        localVarPath = '/apps/{app_id}/segments/{segment_id}'
                            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)))
                            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segment_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.exportPlayers = function (app_id, export_players_request_body, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling exportPlayers.');
                        }
                        localVarPath = '/players/csv_export?app_id={app_id}'
                            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(export_players_request_body, "ExportPlayersRequestBody", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getApp = function (app_id, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling getApp.');
                        }
                        localVarPath = '/apps/{app_id}'
                            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = null;
                        authMethod = _config.authMethods["user_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getApps = function (_options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/apps';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = null;
                        authMethod = _config.authMethods["user_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getNotification = function (app_id, notification_id, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling getNotification.');
                        }
                        if (notification_id === null || notification_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter notification_id was null or undefined when calling getNotification.');
                        }
                        localVarPath = '/notifications/{notification_id}'
                            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notification_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (app_id !== undefined) {
                            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(app_id, "string", ""));
                        }
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getNotificationHistory = function (notification_id, get_notification_request_body, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (notification_id === null || notification_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter notification_id was null or undefined when calling getNotificationHistory.');
                        }
                        if (get_notification_request_body === null || get_notification_request_body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter get_notification_request_body was null or undefined when calling getNotificationHistory.');
                        }
                        localVarPath = '/notifications/{notification_id}/history'
                            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notification_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(get_notification_request_body, "GetNotificationRequestBody", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getNotifications = function (app_id, limit, offset, kind, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling getNotifications.');
                        }
                        localVarPath = '/notifications';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (app_id !== undefined) {
                            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(app_id, "string", ""));
                        }
                        if (limit !== undefined) {
                            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "string", ""));
                        }
                        if (offset !== undefined) {
                            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
                        }
                        if (kind !== undefined) {
                            requestContext.setQueryParam("kind", ObjectSerializer_1.ObjectSerializer.serialize(kind, "0 | 1 | 3", ""));
                        }
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getOutcomes = function (app_id, outcome_names, outcome_names2, outcome_time_range, outcome_platforms, outcome_attribution, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling getOutcomes.');
                        }
                        if (outcome_names === null || outcome_names === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter outcome_names was null or undefined when calling getOutcomes.');
                        }
                        localVarPath = '/apps/{app_id}/outcomes'
                            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (outcome_names !== undefined) {
                            requestContext.setQueryParam("outcome_names", ObjectSerializer_1.ObjectSerializer.serialize(outcome_names, "string", ""));
                        }
                        if (outcome_names2 !== undefined) {
                            requestContext.setQueryParam("outcome_names[]", ObjectSerializer_1.ObjectSerializer.serialize(outcome_names2, "string", ""));
                        }
                        if (outcome_time_range !== undefined) {
                            requestContext.setQueryParam("outcome_time_range", ObjectSerializer_1.ObjectSerializer.serialize(outcome_time_range, "string", ""));
                        }
                        if (outcome_platforms !== undefined) {
                            requestContext.setQueryParam("outcome_platforms", ObjectSerializer_1.ObjectSerializer.serialize(outcome_platforms, "string", ""));
                        }
                        if (outcome_attribution !== undefined) {
                            requestContext.setQueryParam("outcome_attribution", ObjectSerializer_1.ObjectSerializer.serialize(outcome_attribution, "string", ""));
                        }
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getPlayer = function (app_id, player_id, email_auth_hash, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling getPlayer.');
                        }
                        if (player_id === null || player_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter player_id was null or undefined when calling getPlayer.');
                        }
                        localVarPath = '/players/{player_id}'
                            .replace('{' + 'player_id' + '}', encodeURIComponent(String(player_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (app_id !== undefined) {
                            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(app_id, "string", ""));
                        }
                        if (email_auth_hash !== undefined) {
                            requestContext.setQueryParam("email_auth_hash", ObjectSerializer_1.ObjectSerializer.serialize(email_auth_hash, "string", ""));
                        }
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.getPlayers = function (app_id, limit, offset, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling getPlayers.');
                        }
                        localVarPath = '/players';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (app_id !== undefined) {
                            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(app_id, "string", ""));
                        }
                        if (limit !== undefined) {
                            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "string", ""));
                        }
                        if (offset !== undefined) {
                            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
                        }
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.updateApp = function (app_id, app, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling updateApp.');
                        }
                        if (app === null || app === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app was null or undefined when calling updateApp.');
                        }
                        localVarPath = '/apps/{app_id}'
                            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(app, "App", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["user_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.updatePlayer = function (player_id, player, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (player_id === null || player_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter player_id was null or undefined when calling updatePlayer.');
                        }
                        if (player === null || player === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter player was null or undefined when calling updatePlayer.');
                        }
                        localVarPath = '/players/{player_id}'
                            .replace('{' + 'player_id' + '}', encodeURIComponent(String(player_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(player, "Player", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    DefaultApiRequestFactory.prototype.updatePlayerTags = function (app_id, external_user_id, update_player_tags_request_body, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (app_id === null || app_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter app_id was null or undefined when calling updatePlayerTags.');
                        }
                        if (external_user_id === null || external_user_id === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter external_user_id was null or undefined when calling updatePlayerTags.');
                        }
                        localVarPath = '/apps/{app_id}/users/{external_user_id}'
                            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)))
                            .replace('{' + 'external_user_id' + '}', encodeURIComponent(String(external_user_id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(update_player_tags_request_body, "UpdatePlayerTagsRequestBody", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = _config.authMethods["app_key"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    return DefaultApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.DefaultApiRequestFactory = DefaultApiRequestFactory;
var DefaultApiResponseProcessor = (function () {
    function DefaultApiResponseProcessor() {
    }
    DefaultApiResponseProcessor.prototype.cancelNotification = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_1];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_2];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.createApp = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_3, _a, _b, _c, _d, body_4, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_3 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "App", ""]);
                        return [2, body_3];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_4 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "App", ""]);
                        return [2, body_4];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.createNotification = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_5, _a, _b, _c, _d, body_6, _e, _f, _g, _h, body_7, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_5 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "InlineResponse200", ""]);
                        return [2, body_5];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_6 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "InlineResponse400", ""]);
                        throw new exception_1.ApiException(400, body_6);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_7 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "InlineResponse200", ""]);
                        return [2, body_7];
                    case 6:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.createPlayer = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_8, _a, _b, _c, _d, body_9, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_8 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "InlineResponse2004", ""]);
                        return [2, body_8];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_9 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "InlineResponse2004", ""]);
                        return [2, body_9];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.createSegments = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_10, _a, _b, _c, _d, body_11, _e, _f, _g, _h, body_12, _j, _k, _l, _m, body_13, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("201", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_10 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "InlineResponse201", ""]);
                        return [2, body_10];
                    case 2:
                        if (!util_1.isCodeInRange("409", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_11 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "InlineResponse409", ""]);
                        throw new exception_1.ApiException(409, body_11);
                    case 4:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_12 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "InlineResponse409", ""]);
                        throw new exception_1.ApiException(400, body_12);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body_13 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "InlineResponse201", ""]);
                        return [2, body_13];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.deletePlayer = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_14, _a, _b, _c, _d, body_15, _e, _f, _g, _h, body_16, _j, _k, _l, _m, body_17, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_14 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_14];
                    case 2:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_15 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "InlineResponse2001", ""]);
                        throw new exception_1.ApiException(404, body_15);
                    case 4:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_16 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "InlineResponse4002", ""]);
                        throw new exception_1.ApiException(400, body_16);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body_17 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_17];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.deleteSegments = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_18, _a, _b, _c, _d, body_19, _e, _f, _g, _h, body_20, _j, _k, _l, _m, body_21, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_18 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "InlineResponse2003", ""]);
                        return [2, body_18];
                    case 2:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_19 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "InlineResponse2003", ""]);
                        throw new exception_1.ApiException(404, body_19);
                    case 4:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_20 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "InlineResponse4002", ""]);
                        throw new exception_1.ApiException(400, body_20);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body_21 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "InlineResponse2003", ""]);
                        return [2, body_21];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.exportPlayers = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_22, _a, _b, _c, _d, body_23, _e, _f, _g, _h, body_24, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_22 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "InlineResponse2005", ""]);
                        return [2, body_22];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_23 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "any", ""]);
                        throw new exception_1.ApiException(400, body_23);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_24 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "InlineResponse2005", ""]);
                        return [2, body_24];
                    case 6:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getApp = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_25, _a, _b, _c, _d, body_26, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_25 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "App", ""]);
                        return [2, body_25];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_26 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "App", ""]);
                        return [2, body_26];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getApps = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_27, _a, _b, _c, _d, body_28, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_27 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "string", ""]);
                        return [2, body_27];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_28 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "string", ""]);
                        return [2, body_28];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getNotification = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_29, _a, _b, _c, _d, body_30, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_29 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "Notification", ""]);
                        return [2, body_29];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_30 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "Notification", ""]);
                        return [2, body_30];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getNotificationHistory = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_31, _a, _b, _c, _d, body_32, _e, _f, _g, _h, body_33, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_31 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "InlineResponse2002", ""]);
                        return [2, body_31];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_32 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "InlineResponse4001", ""]);
                        throw new exception_1.ApiException(400, body_32);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_33 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "InlineResponse2002", ""]);
                        return [2, body_33];
                    case 6:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getNotifications = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_34, _a, _b, _c, _d, body_35, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_34 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "NotificationSlice", ""]);
                        return [2, body_34];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_35 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "NotificationSlice", ""]);
                        return [2, body_35];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getOutcomes = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_36, _a, _b, _c, _d, body_37, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_36 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "Array<OutcomeData>", ""]);
                        return [2, body_36];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_37 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "Array<OutcomeData>", ""]);
                        return [2, body_37];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getPlayer = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_38, _a, _b, _c, _d, body_39, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_38 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "Player", ""]);
                        return [2, body_38];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_39 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "Player", ""]);
                        return [2, body_39];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.getPlayers = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_40, _a, _b, _c, _d, body_41, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_40 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "PlayerSlice", ""]);
                        return [2, body_40];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_41 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "PlayerSlice", ""]);
                        return [2, body_41];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.updateApp = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_42, _a, _b, _c, _d, body_43, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_42 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "App", ""]);
                        return [2, body_42];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_43 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "App", ""]);
                        return [2, body_43];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.updatePlayer = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_44, _a, _b, _c, _d, body_45, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_44 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_44];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_45 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_45];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    DefaultApiResponseProcessor.prototype.updatePlayerTags = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_46, _a, _b, _c, _d, body_47, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_46 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "InlineResponse2003", ""]);
                        return [2, body_46];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_47 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "InlineResponse2003", ""]);
                        return [2, body_47];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return DefaultApiResponseProcessor;
}());
exports.DefaultApiResponseProcessor = DefaultApiResponseProcessor;
//# sourceMappingURL=DefaultApi.js.map