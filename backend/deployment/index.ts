import * as awsx from "@pulumi/awsx";
import * as pulumi from "@pulumi/pulumi";


export const cluster = new awsx.ecs.Cluster("cluster", {
    settings: [{
        name: "containerInsights",
        value: "enabled"
    }]
})



let config = new pulumi.Config();
const databaseUrl  = config.require("DATABASE_URL"); 
console.log(databaseUrl)

export const listener = new awsx.lb.ApplicationListener("backend-loadbalance", { port: 80 ,protocol:"HTTP"});
const service = new awsx.ecs.FargateService("bank-bakend-service", {
	cluster: cluster,
    name: "bank-backend-service",
    taskDefinitionArgs: {
        containers:{
	                  backend:{
                                image: "steinko/bankbackend",
                                portMappings: [listener ],
                                environment: 
                                   [{name: "DATABASE_URL", value: databaseUrl}]
                              },

                     collector:{
                                 image: "public.ecr.aws/aws-observability/aws-otel-collector",
                                 environment: 
                                   [{ name: "command" , value: "--config=/etc/ecs/container-insights/otel-task-metrics-config.yaml"}],
                               }
                   }
    },
    desiredCount: 2,
})

export const url = listener.endpoint.hostname
