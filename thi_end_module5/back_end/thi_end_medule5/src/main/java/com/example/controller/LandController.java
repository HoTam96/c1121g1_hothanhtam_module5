package com.example.controller;

import com.example.model.*;
import com.example.service.ILandService;
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
    private ILandService iLandService;

    @GetMapping("/all")
    public ResponseEntity<Page<LandInformation>> getAll(@PageableDefault(value = 4) Pageable pageable,
                                                        @RequestParam Optional<String> price,
                                                        @RequestParam Optional<String> area,
                                                        @RequestParam Optional<String> direction,
                                                        @RequestParam Optional<String> sortValue) {
//                                                         @RequestParam(value = "sortValue", defaultValue = "start_date", required = false) String sortValue



        String keyWord1 = price.orElse("");
        String keyWord2 = area.orElse("");
        String keyWord3 = direction.orElse("");
        String sort = sortValue.orElse("");
        Page<LandInformation> landInformationList = this.iLandService.pageFindAll(pageable, keyWord1, keyWord2, keyWord3 ,sort);
        if (landInformationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(landInformationList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<LandInformation> addNew(@RequestBody LandInformation landInformation) {
        LandInformation landInformation1 = this.iLandService.save(landInformation);
        return new ResponseEntity<>(landInformation1, HttpStatus.CREATED);
    }

    @GetMapping("/direction")
    public ResponseEntity<List<Direction>> getAllDirection() {
        List<Direction> directionList = this.iLandService.findByDirection();
        return new ResponseEntity<>(directionList, HttpStatus.OK);
    }

    @GetMapping("/postUp")
    public ResponseEntity<List<PostUp>> getAllPostUp() {
        List<PostUp> postUpList = this.iLandService.findByPostUp();
        return new ResponseEntity<>(postUpList, HttpStatus.OK);
    }


    @GetMapping("/region")
    public ResponseEntity<List<Regions>> getAllRegion() {
        List<Regions> regionsList = this.iLandService.findByRegions();
        return new ResponseEntity<>(regionsList, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> categoryLandList = this.iLandService.findByCategory();
        return new ResponseEntity<>(categoryLandList, HttpStatus.OK);
    }

    @GetMapping("/cmm")
    public ResponseEntity<List<LandInformation>> getAllss() {
        List<LandInformation> landInformationList = (List<LandInformation>) this.iLandService.findAll();
        return new ResponseEntity<>(landInformationList, HttpStatus.OK);
    }

}
