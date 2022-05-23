package com.example.controller;

import com.example.model.*;
import com.example.service.impl.LandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/land")
public class LandController {
    @Autowired
    private LandService landService;

    @GetMapping("/all")
    public ResponseEntity<Page<LandInformation>> getAll(@PageableDefault(value = 4) Pageable pageable,
                                                        @RequestParam Optional<String> price,
                                                        @RequestParam Optional<String> area,
                                                        @RequestParam Optional<String> direction) {
        String keyWord1 = price.orElse("");
        String keyWord2 = area.orElse("");
        String keyWord3 = direction.orElse("");
        Page<LandInformation> landInformationList = this.landService.pageFindAll(pageable, keyWord1 , keyWord2, keyWord3);
        if (landInformationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(landInformationList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<LandInformation> addNew(@RequestBody LandInformation landInformation) {
        LandInformation landInformation1 = this.landService.save(landInformation);
        return new ResponseEntity<>(landInformation1, HttpStatus.CREATED);
    }

    @GetMapping("/direction")
    public ResponseEntity<List<Direction>> getAllDirection() {
        List<Direction> directionList = this.landService.findByDirection();
        return new ResponseEntity<>(directionList, HttpStatus.OK);
    }

    @GetMapping("/postUp")
    public ResponseEntity<List<PostUp>> getAllPostUp() {
        List<PostUp> postUpList = this.landService.findByPostUp();
        return new ResponseEntity<>(postUpList, HttpStatus.OK);
    }


    @GetMapping("/region")
    public ResponseEntity<List<Regions>> getAllRegion() {
        List<Regions> regionsList = this.landService.findByRegions();
        return new ResponseEntity<>(regionsList, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> categoryLandList = this.landService.findByCategory();
        return new ResponseEntity<>(categoryLandList, HttpStatus.OK);
    }

    @GetMapping("/cmm")
    public ResponseEntity<List<LandInformation>> getAllss() {
        List<LandInformation> landInformationList = (List<LandInformation>) this.landService.findAll();
        return new ResponseEntity<>(landInformationList, HttpStatus.OK);
    }

}
