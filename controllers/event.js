import {eventModel} from "../models/event_e_models.js";

export const getEvents = async (req, res) => {
    try {
        // Get querry params
        const {limit, skip, search } = req.query;
        // get all events from database
        const allEvents = await RecipeModel
        .find({name: search})
        .limit(limit)
        .skip(skip);
        // Return all Events
        res.json(allEvents);
    } catch (error) {
      next (error);  
    }
}

// post Recipe
export const postEvent = async (req, res, next) => {
    try {
      // Add Event to database
      const newEvent = await EventModel.create({
        ...req.body,
        image:req.file.filename
      });
      // Return response
      res.json(newEvent); 
    } catch (error) {
     next(error);
    }
 }

// delete Event
export const deleteEvent = async (req, res, next) => {
    try {
        // Delete Event by id
        const deletedRecipe = await EventModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deletedRecipe)

    } catch (error) {
        next(error);
    }
}

export const patchEvent = async (req, res, next) => {
   try {
    // update recipe by id
    const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    // Return response
    res.json(updatedEvent);
   } catch (error) {
    next(error)
   } 
}

//get single event by ID

export const getEvent = async (req, res, next) => {
    try {
      const getEventById = await EventModel.findById(req.params.body)
      res.json(getEventById)
    } catch (error) {
      next(error)
    }
  }
