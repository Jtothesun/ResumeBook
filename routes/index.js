import AWS from 'aws-sdk';
const { Route53Domains } = AWS;
import express from 'express';
import { UploadResume } from '../controllers/resumeController.js';

const router = express.Router();

// Your commented code can remain as is, but if you uncomment it later, 
// you'll need to update those imports as well.

// Example of how you might update the commented imports:
// import { User } from '../models/users.js';
// import { upload } from '../controllers/resumeUploadController.js';

router.post('/upload-resume', UploadResume);

export default router;