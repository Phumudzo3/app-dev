"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const AddressController_1 = require("../controller/AddressController");
const AddressValidators_1 = require("../validator/AddressValidators");
class AddressRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/useraddresses", GlobalMiddleware_1.GlobalMiddleWare.auth, AddressController_1.AddressController.getAddresses);
        // this.router.get('/:id',GlobalMiddleWare.auth,AddressController.getAddressById);
        this.router.get("/checkaddress", GlobalMiddleware_1.GlobalMiddleWare.auth, AddressValidators_1.AddressValidators.checkAddress(), GlobalMiddleware_1.GlobalMiddleWare.checkError, AddressController_1.AddressController.checkAddresses);
        this.router.get("/getlimitedaddresses", GlobalMiddleware_1.GlobalMiddleWare.auth, AddressValidators_1.AddressValidators.getLimitedAddresses(), GlobalMiddleware_1.GlobalMiddleWare.checkError, AddressController_1.AddressController.getLimitedAddresses);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleware_1.GlobalMiddleWare.auth, AddressValidators_1.AddressValidators.addAddress(), GlobalMiddleware_1.GlobalMiddleWare.checkError, AddressController_1.AddressController.addAddress);
    }
    patchRoutes() {
        //this.router.patch('/edit/:id',GlobalMiddleWare.auth,AddressValidators.editAddress(),GlobalMiddleWare.checkError,AddressController.editAddress);
    }
    putRoutes() {
        this.router.put("/edit/:id", GlobalMiddleware_1.GlobalMiddleWare.auth, AddressValidators_1.AddressValidators.editAddress(), GlobalMiddleware_1.GlobalMiddleWare.checkError, AddressController_1.AddressController.editAddress);
    }
    deleteRoutes() {
        this.router.delete("/delete/:id", GlobalMiddleware_1.GlobalMiddleWare.auth, AddressController_1.AddressController.deleteAddress);
    }
}
exports.default = new AddressRouter().router;
