package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "categoryLand")
    @JsonBackReference
    private Set<LandInformation> landInformationSet;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<LandInformation> getLandInformationSet() {
        return landInformationSet;
    }

    public void setLandInformationSet(Set<LandInformation> landInformationSet) {
        this.landInformationSet = landInformationSet;
    }
}
