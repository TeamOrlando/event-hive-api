import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";


export const remoteUploads = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: '/uploads/*'
  })
})