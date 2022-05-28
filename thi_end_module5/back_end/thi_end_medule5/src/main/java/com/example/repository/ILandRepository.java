package com.example.repository;

import com.example.model.LandInformation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ILandRepository extends JpaRepository<LandInformation, Integer> {

    @Query(value = "select * from land_information join direction on direction.id = land_information.direction_id where price like concat('%', :prices ,'%')" +
            " and area like concat('%', :areas ,'%') and direction.`name` like concat('%', :directions ,'%') order by case when :sorts = 'sortDateAsc' then start_date end asc , " +
            "case when :sorts = 'sortDateDesc' then start_date end desc , case when :sorts ='sortPriceAsc'then price end asc , case when :sorts ='sortPriceDesc' then price end desc ",
            countQuery = "select count(*) from land_information join direction on direction.id = land_information.direction_id where price like concat('%', :prices ,'%')" +
                    " and area like concat('%', :areas ,'%') and direction.`name` like concat('%', :directions ,'%') order by case when :sorts = 'sortDateAsc' then start_date end asc , " +
                    "case when :sorts = 'sortDateDesc' then start_date end desc , case when :sorts ='sortPriceAsc'then price end asc , case when :sorts ='sortPriceDesc' then price end desc ", nativeQuery = true)
    Page<LandInformation> pageFindAll(Pageable pageable, @Param("prices") String keyWord1, @Param("areas") String keyWord2, @Param("directions") String keyWord3, @Param("sorts") String sort);
}
