package com.example.repository;

import com.example.model.Regions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRegionsRepository extends JpaRepository<Regions, Integer> {
}
