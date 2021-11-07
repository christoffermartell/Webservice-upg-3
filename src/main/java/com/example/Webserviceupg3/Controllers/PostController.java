package com.example.Webserviceupg3.Controllers;
import com.example.Webserviceupg3.Models.Posters;
import com.example.Webserviceupg3.Models.User;
import com.example.Webserviceupg3.Services.PostService;
import com.example.Webserviceupg3.Services.UserService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/poster")
public class PostController {

    //Samma sak som @Autowired
    private final PostService postService;
    private final UserService userService;

    public PostController(PostService postService, UserService userService){
        this.postService = postService;
        this.userService = userService;
    }



    @GetMapping("/all")
    public Collection<Posters> getPosters(HttpServletResponse response) {
        return postService.getPosters();
    }

    @PostMapping("/create")
    public Posters createPoster(@RequestHeader("token") String token, @RequestBody Posters posters, HttpServletResponse response) {
        User user = userService.validate(token);
        if (posters == null || user == null) {
            response.setStatus(401);
            return null;
        } else {
            response.setStatus(201);
            return postService.createPost(posters, user);
        }


    }

    @GetMapping(path = "/user/posts")
    public Collection<Posters> getUserPosts(@RequestHeader("token") String token, HttpServletResponse response) {
        User user = userService.validate(token);
        if (user == null) {
            response.setStatus(401);
            return null;
        }

        return user.getMyPosts();
    }



    @DeleteMapping(path = "/delete/{post}")
    public String deletePost(@PathVariable("post")String post, @RequestHeader("username")String username,@RequestHeader("token") String token,HttpServletResponse response){
        if (userService.validate(token) == null || post == null || username == null) {
            response.setStatus(401);
        }
        if (!postService.deletePost(post)){
            response.setStatus(404);
            return "no post named " + post + " exist";
        }

        //funkar ej korrekt
        if (userService.removePost(username,post)){
            response.setStatus(200);
        }

        postService.deletePost(post);
     //   userService.removePost(username,post);
        return  post + " was successfully removed";
    }





}
