import * as aws from "@pulumi/aws"
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();
const todoBucketId = stack + "-todo-steinko"
const logBucketId =  stack + "-todo-log-steinko"

const logBucket  = aws.s3.getBucket({bucket: logBucketId})

export const bucket = new aws.s3.Bucket(todoBucketId,
   {
	 acl: "private",
	 bucket:todoBucketId,
     website: {
                indexDocument: "index.html",
                errorDocument: "index.html"
               },
	 loggings: [{
        targetBucket: logBucket.then(logBucket => logBucket.id),
        targetPrefix: "log/",
     }],
   },
)
