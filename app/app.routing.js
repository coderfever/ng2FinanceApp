"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var transaction_component_1 = require("./components/transaction.component");
var appRoutes = [
    {
        path: '',
        component: transaction_component_1.TransactionComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map