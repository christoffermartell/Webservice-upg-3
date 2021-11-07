package com.example.Webserviceupg3.Repositories;

import com.example.Webserviceupg3.Models.Posters;
import com.example.Webserviceupg3.Models.User;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class PosterRepository {

    private Map<String, Posters> posters = new HashMap<>();


    public Posters save(Posters poster, User user) {
        user.getMyPosts().add(poster);
        return posters.put(poster.getTitle().toLowerCase(), poster);

    }

    public Collection<Posters> getPosters() {
        return posters.values();
    }

    public void removePoster(String title) {
        posters.remove(title.toLowerCase());
    }

    public Posters getPost(String title) {
        return posters.get(title.toLowerCase());
    }

    public Posters getSpecificPost(String post) {
        Posters postToDelete = posters.get(post.toLowerCase());
        if (postToDelete != null) {
            return posters.get(post);
        } else {
            return null;
        }
    }


}
