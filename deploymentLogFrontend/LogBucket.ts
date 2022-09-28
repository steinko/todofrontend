import * as aws from "@pulumi/aws"
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();
const logBucketId =  stack + "-todo-log-steinko"

export const logBucket = new aws.s3.Bucket(logBucketId, 
                                       {acl: "log-delivery-write",
                                        bucket: logBucketId },
                                   )
