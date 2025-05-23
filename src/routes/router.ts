import express from "express";
import schoolRoute from "./school.route";

const router = express.Router();

export default ():express.Router=>{
    schoolRoute(router);

    return router;
}