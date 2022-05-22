package com.example.service;

import com.example.model.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ILandService extends IGeneralService<LandInformation> {
    Page<LandInformation> pageFindAll(Pageable pageable, String price , String area , String direction);
    List<Category>findByCategory();
    List<Direction>findByDirection();
    List<PostUp>findByPostUp();
    List<Regions>findByRegions();
}
