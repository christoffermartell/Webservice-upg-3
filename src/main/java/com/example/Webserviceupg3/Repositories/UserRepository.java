package com.example.Webserviceupg3.Repositories;

import com.example.Webserviceupg3.Models.Posters;
import com.example.Webserviceupg3.Models.User;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {

    private final Map<String, User> users = new HashMap<>();

    public User get(String name) {
        return users.get(name.toLowerCase());
    }

    public void removePost(String username, Posters title) {
        User user = get(username);
        user.getMyPosts().remove(title);
    }

    public void save(User user) {
        users.put(user.getName().toLowerCase(), user);
    }

}
