import { Router } from "express";
import { EventModel } from "../models/event_e_models.js"; 
import { deleteEvent, getEvent, getEvents, patchEvent, postEvent } from "../controllers/event.js";

// create router
const eventRouter = Router();

// Define routes
eventRouter.get('/event', getEvents );

eventRouter.post('/event', remoteUpload.single('image'), postEvent );

eventRouter.patch('/event/:id', patchEvent );

eventRouter.delete('/event/:id', deleteEvent);

eventRouterr.get('/event/:id', getEvent);

// Export Router
export default eventRouter;