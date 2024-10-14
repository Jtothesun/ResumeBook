import AWS from 'aws-sdk';
import config from "../config/awsConfig.js";

const uploadToS3 = async(file, bucketName) => {
    console.log("Print if we hit uploadToS3\n");
    try {
        const s3 = new AWS.S3( {
            credentials: {
                accessKeyId: config.aws.access_key,
                secretAccessKey: config.aws.secret_key,
            }
        });

        const newFileName = `res_${(Date.now()).toString()}.${file.mimetype.split('/')[1]}`
        console.log("new file name: ", newFileName);

        const params = {
            Bucket: bucketName,
            Key: newFileName,
            Body: file.data
        };

        return new Promise( (resolve, reject) => {
            s3.upload(params, {}, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(data);
                    resolve(data);
                }
            });
        })

    } catch (e) {
        return e;
    }
}

export {uploadToS3};