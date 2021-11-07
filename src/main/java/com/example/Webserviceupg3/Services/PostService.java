package com.example.Webserviceupg3.Services;
import com.example.Webserviceupg3.Models.Posters;
import com.example.Webserviceupg3.Models.User;
import com.example.Webserviceupg3.Repositories.PosterRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class PostService {

    private final PosterRepository posterRepository;

    public PostService(PosterRepository posterRepository) {
        this.posterRepository = posterRepository;
    }

    public Posters createPost(Posters posters, User user) {

        if (posterRepository.save(posters, user) != null) {
            return new Posters(posters.getTitle(), posters.getContent(), posters.getUsername());
        } else {
            return null;
        }

    }

    public Collection<Posters> getPosters() {
        return posterRepository.getPosters();
    }


    public boolean deletePost(String post) {
        if (posterRepository.getPost(post) == null) {
            return false;

        }
        posterRepository.removePoster(post);
        return true;
    }

}
