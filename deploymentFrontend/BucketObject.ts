import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import {bucket} from "./Bucket"
const mime = require("mime");

export const index = new aws.s3.BucketObject( "index.html", {
      bucket: bucket,
      source: new pulumi.asset.FileAsset("../frontend/build/index.html"),    
      acl:"public-read",
      cacheControl: "no-cache,no-store" ,
      contentType: "text/html",
      metadata:{ "directive": "REPLACE"},
    
    });
