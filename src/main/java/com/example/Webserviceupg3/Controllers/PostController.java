package com.example.Webserviceupg3.Controllers;

import com.example.Webserviceupg3.Models.Posters;
import com.example.Webserviceupg3.Repositories.PosterRepository;
import com.example.Webserviceupg3.Repositories.UserRepository;
import com.example.Webserviceupg3.Services.PostService;
import com.example.Webserviceupg3.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/poster")
public class PostController {

    @Autowired
    PostService postService;

    @Autowired
    UserService userService;

    @GetMapping("/all")
    public Collection<Posters> getPosters(@RequestHeader("token") String token, HttpServletResponse response) {
        if (userService.validate(token) == null) {
            response.setStatus(401);
            return null;
        }

        return postService.getPosters();
    }
    @PostMapping("/create")
    public String createPoster(@RequestHeader("token") String token, @RequestBody Posters posters, HttpServletResponse response) {
        if (userService.validate(token) == null) {
            response.setStatus(401);
            return null;
        }

        int result = postService.createPost(posters);
        switch (result) {
            case 1:
                response.setStatus(409);
                return "There is already a product with that name";
            case 0:
                return "Product has been created";
            default:
                response.setStatus(500);
                return "Something went wrong.";
        }
    }

    @DeleteMapping("/delete/{postTitle}")
    public void deleteProduct(@PathVariable("postTitle") String postName,@RequestHeader("token") String token,  HttpServletResponse response) {
        if (userService.validate(token)==null){
            response.setStatus(401);

        }/* if (userService.){
         }*/
        if (!postService.deletePosts(postName))
            response.setStatus(404);

    }

}
