package com.example.Webserviceupg3.Services;
import com.example.Webserviceupg3.Controllers.UserController;
import com.example.Webserviceupg3.Models.Posters;
import com.example.Webserviceupg3.Models.User;
import com.example.Webserviceupg3.Repositories.PosterRepository;
import com.example.Webserviceupg3.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    PosterRepository posterRepository;


    Map<String, User> tokens = new HashMap<>();

    public int registerUser(UserController.UserCreate user) {
        User existing = userRepository.get(user.getUsername());
        if (existing != null)
            return 1;

        userRepository.save(new User(user.getUsername(), user.getPassword()));

        return 0;
    }

    public String login(String username, String password) {
        User user = userRepository.get(username);
        if (user == null)
            return null;

        if (!user.getPassword().equals(password))
            return null;

        String token = UUID.randomUUID().toString();
        tokens.put(token, user);
        return token;
    }

    public boolean removePost(String username, String title) {
        if (username == null || title == null) {
            return false;
        }

        Posters post = posterRepository.getSpecificPost(title);
        userRepository.removePost(username, post);
        return true;
    }


    public void logout(String token) {
        tokens.remove(token);
    }

    public User validate(String token) {
        return tokens.get(token);
    }
}
