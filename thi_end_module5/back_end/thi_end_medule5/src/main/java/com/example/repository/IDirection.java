package com.example.repository;

import com.example.model.Direction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDirection extends JpaRepository<Direction, Integer> {
}
