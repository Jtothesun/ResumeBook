import aws from "aws-sdk";
import dotenv from 'dotenv';

dotenv.config();

const config = {
    aws: {
        access_key: process.env.AWS_ACCESS_KEY_ID,
        secret_key: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        bucket: process.env.AWS_S3_BUCKET,
   }
}

export default config;