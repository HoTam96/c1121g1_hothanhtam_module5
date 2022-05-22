package com.example.model;

import javax.persistence.*;

@Entity
public class LandInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
        @ManyToOne
    @JoinColumn(name = "categoryId", referencedColumnName = "id")
    private Category categoryLand;
    @ManyToOne
    @JoinColumn(name = "regionsId", referencedColumnName = "id")
    private Regions regions;
    @ManyToOne
    @JoinColumn(name = "directionId", referencedColumnName = "id")
    private Direction direction;
    @ManyToOne
    @JoinColumn(name = "postUpId", referencedColumnName = "id")
    private PostUp postUp;
    private String conditional;
    private String address;
    private String identification;
    private String area;
    private String title;
    private String content;
    private String price;
    private String photo;
    private String startDate;
    private String status;

    public LandInformation() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCondition() {
        return conditional;
    }

    public void setCondition(String condition) {
        this.conditional = condition;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Category getCategoryLand() {
        return categoryLand;
    }

    public void setCategoryLand(Category categoryLand) {
        this.categoryLand = categoryLand;
    }

    public Regions getRegions() {
        return regions;
    }

    public void setRegions(Regions regions) {
        this.regions = regions;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public PostUp getPostUp() {
        return postUp;
    }

    public void setPostUp(PostUp postUp) {
        this.postUp = postUp;
    }

    public String getConditional() {
        return conditional;
    }

    public void setConditional(String conditional) {
        this.conditional = conditional;
    }
}
