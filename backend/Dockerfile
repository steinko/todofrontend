FROM adoptopenjdk/openjdk14
COPY ./build/libs/todobackend.jar ./
ENTRYPOINT ["java"]
CMD ["-jar", "/todobackend.jar", "--spring.profiles.active=test", "-Dagentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000"]
EXPOSE 8080