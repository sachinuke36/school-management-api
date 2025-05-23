import listSchools, { add_school } from "../controllers/school.controller";
import { Router } from "express";


export default (router: Router)=>{
    router.post('/school/addschool', add_school);
    router.get('/school/listschools', listSchools)
}