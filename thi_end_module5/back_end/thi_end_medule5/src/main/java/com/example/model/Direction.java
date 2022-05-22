package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Direction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "direction")
    @JsonBackReference
    private Set<LandInformation> landInformationSet;

    public Direction(Integer id, String name, Set<LandInformation> landInformationSet) {
        this.id = id;
        this.name = name;
        this.landInformationSet = landInformationSet;
    }

    public Direction() {
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
