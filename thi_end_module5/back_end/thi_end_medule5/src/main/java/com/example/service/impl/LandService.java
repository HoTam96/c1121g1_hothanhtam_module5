package com.example.service.impl;

import com.example.model.*;
import com.example.repository.*;
import com.example.service.ILandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LandService implements ILandService {
    @Autowired
    private ILandRepository iLandRepository;
    @Autowired
    private ICategoryRepository iCategoryRepository;
    @Autowired
    private IRegionsRepository iRegionsRepository;
    @Autowired
    private IPostUpRepository iPostUpRepository;
    @Autowired
    private IDirection iDirection;

    @Override
    public Iterable<LandInformation> findAll() {
        return iLandRepository.findAll();
    }

    @Override
    public Optional<LandInformation> findById(Integer id) {
        return iLandRepository.findById(id);
    }

    @Override
    public LandInformation save(LandInformation landInformation) {
        return iLandRepository.save(landInformation);
    }

    @Override
    public void delete(Integer id) {
        iLandRepository.deleteById(id);
    }

    @Override
    public Page<LandInformation> pageFindAll(Pageable pageable, String price , String area , String direction , String sort) {
        return iLandRepository.pageFindAll(pageable, price , area , direction , sort);
    }

    @Override
    public List<Category> findByCategory() {
        return iCategoryRepository.findAll();
    }

    @Override
    public List<Direction> findByDirection() {
        return iDirection.findAll();
    }

    @Override
    public List<PostUp> findByPostUp() {
        return iPostUpRepository.findAll();
    }

    @Override
    public List<Regions> findByRegions() {
        return iRegionsRepository.findAll();
    }


}
