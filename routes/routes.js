import { Router } from "express";
import { remoteUploads } from "../middleware/uploads.js";
import { addCollege, deleteCollege, getCollege, getCollegeById, updateCollege } from "../controllers/college_controller.js";


//create routes
const eventRouter = Router();


//define endpoints for route
eventRouter.post('/colleges', remoteUploads.single('image'), addCollege);
eventRouter.get('/colleges', getCollege);
eventRouter.get('/colleges/:id', getCollegeById);
eventRouter.patch('/colleges', updateCollege);
eventRouter.delete('/colleges/:id', deleteCollege);



export default eventRouter;