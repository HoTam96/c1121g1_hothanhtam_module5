package com.example.repository;

import com.example.model.LandInformation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ILandRepository extends JpaRepository<LandInformation, Integer> {

    @Query(value = "select * from land_information join direction on direction.id = land_information.direction_id where price like concat('%', :price ,'%')" +
            " and area like concat('%', :area ,'%') and direction.`name` like concat('%', :direction ,'%')", countQuery = "select count(*) from land_information join direction on direction.id = land_information.direction_id where price like concat('%', :price ,'%')" +
            " and area like concat('%', :area ,'%') and direction.`name` like concat('%', :direction ,'%')" , nativeQuery = true)
    Page<LandInformation> pageFindAll(Pageable pageable, @Param("price") String keyWord1, @Param("area") String keyWord2, @Param("direction") String keyWord3);
}
