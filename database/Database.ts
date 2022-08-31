import * as aws from "@pulumi/aws";

export const dataBase = new aws.rds.Instance("database", {
    allocatedStorage: 10,
    engine: "postgres",
    engineVersion: "14",
    instanceClass: "db.t3.micro",
    dbName: "mydb",
    parameterGroupName: "default.postgres14",
    password: "RoxyMusic11",
    skipFinalSnapshot: true,
    username: "steinko",
    publiclyAccessible: true,
    enabledCloudwatchLogsExports:["postgresql" ] ,

});
