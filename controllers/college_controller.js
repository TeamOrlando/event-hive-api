import { CollegeModel } from "../models/college_model.js";



//create endpoints

//adding a college

export const addCollege = async (req, res, next) => {
  console.log('required', req.body)
  try {
    const add_newCollege = await CollegeModel.create(...req.body)
    res.json(add_newCollege)
  } catch (error) {
    next(error)
  }
}

//getting all colleges
export const getCollege = async (req, res, next) => {
  console.log('required', req.body)
  try {
    const get_allCollege = await CollegeModel.find()
    res.json(get_allCollege)
  } catch (error) {
    next(error)
  }
}

//getting college by ID
export const getCollegeById = async (req, res, next) => {
  console.log('required', req.body)
  try {
    const get_collegeById = await CollegeModel.findById(req.params.id)
    res.json(get_collegeById)
  } catch (error) {
    next(error)
  }
}

//update college
export const updateCollege = async (req, res, next) => {
  console.log('required', req.body)
  try {
    const update_college = await CollegeModel.findByIdAndUpdate(...req.params.id)
    res.json(update_college)
  } catch (error) {
    next(error)
  }
}

//deleting college by ID
export const deleteCollege = async (req, res, next) => {
  console.log('require', req.body)
  try {
    const delete_collegeById = await CollegeModel.findByIdAndDelete(req.params.id)
    res.json(delete_collegeById)
  } catch (error) {
    next(error)
  }
}