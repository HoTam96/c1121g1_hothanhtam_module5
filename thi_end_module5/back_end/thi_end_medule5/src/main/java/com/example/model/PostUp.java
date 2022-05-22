package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.Set;

@Entity
public class PostUp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "postUp")
    @JsonBackReference
    private Set<LandInformation> landInformationSet;

    public PostUp() {
    }

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
