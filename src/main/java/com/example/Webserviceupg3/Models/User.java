package com.example.Webserviceupg3.Models;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class User {

    private String name, password;
    private List<Posters> favorites;

    public User(String name, String password) {
        this.name = name;
        this.password = password;
        this.favorites = new ArrayList<>();
    }
}
