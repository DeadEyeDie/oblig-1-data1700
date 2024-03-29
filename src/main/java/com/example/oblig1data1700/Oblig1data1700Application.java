package com.example.oblig1data1700;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class Oblig1data1700Application {

    public static void main(String[] args) {
        SpringApplication.run(Oblig1data1700Application.class, args);
    }

}
