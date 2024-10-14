import { uploadToS3 } from "../utils/functions.js";
import config from "../config/awsConfig.js";

const UploadResume = async (req , res) => {
    console.log("Print if we hit UploadResume!");
    console.log("req.files", req.files);
    try {
        if(req.files && req.files.file) {
            //upload file
            console.log("Attempting to upload file: ", req.files.file.name);
            const result = await uploadToS3(req.files.file, config.aws.bucket);
            console.log("Upload result: ", result);
            return res.status(201).json( {
                message: "Success",
                body: result
            })
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json( {
            message: "Something went wrong",
        })
    }
}

export { UploadResume };