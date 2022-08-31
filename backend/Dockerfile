FROM amazoncorretto:18
COPY build/libs/todobackend.jar todobackend.jar

ENTRYPOINT ["java","-Dserver.port=80","-jar","/todobackend.jar"]
EXPOSE 80