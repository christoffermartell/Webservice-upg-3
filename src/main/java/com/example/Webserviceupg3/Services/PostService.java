package com.example.Webserviceupg3.Services;

import com.example.Webserviceupg3.Models.Posters;
import com.example.Webserviceupg3.Repositories.PosterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class PostService {

    @Autowired
    PosterRepository posterRepository;

    public int createPost(Posters posters) {
        Posters existing = posterRepository.getPost(posters.getTitle());
        if (existing != null)
            return 1;

        posterRepository.save(posters);

        return 0;
    }

    public Collection<Posters> getPosters() {
        return posterRepository.getPosters();
    }

    public boolean deletePosts(String title){
        if (posterRepository.getPost(title) == null)
            return false;
        posterRepository.removePoster(title);
        return true;
    }

}
