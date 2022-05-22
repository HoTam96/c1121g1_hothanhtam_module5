package com.example.repository;

import com.example.model.PostUp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPostUpRepository extends JpaRepository<PostUp , Integer> {
}
