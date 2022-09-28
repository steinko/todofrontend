import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
const mime = require("mime");
import {bucket} from "./Bucket"
import {index} from "./BucketObject"

bucket
index

 const siteDir = "../frontend/build/static/js"; 


for (let item of require("fs").readdirSync(siteDir)) {
    let filePath = require("path").join(siteDir, item);
    let object = new aws.s3.BucketObject(item, {
      bucket: bucket,
      source: new pulumi.asset.FileAsset(filePath), 
      acl:"public-read",
      key: "static/js/" +  item,
      cacheControl: "max-age=31536000" ,    // use FileAsset to point to a file
      contentType: mime.getType(filePath) || undefined, // set the MIME type of the file
    }) 
  } 

export const bucketUrl = bucket.websiteEndpoint
