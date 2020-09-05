package com.example.spellbook.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "spells")
public class Spell {
    @Id
    String id;
    String name;
    String desc;
    String range;
    String higher_level;
    String components;
    String material;
    Boolean ritual;
    String duration;
    Boolean concentration;
    String casting_time;
    Integer level;
    String attack_type;
    Object damage;
    Object school;
    Object[] classes;

    public Spell() {}

    public Spell(String name, String desc) {
        this.name = name;
        this.desc = desc;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public String getHigherLevel() {
        return higher_level;
    }

    public void setHigherLevel(String higher_level) {
        this.higher_level = higher_level;
    }

    public String getComponents() {
        return components;
    }

    public void setComponents(String components) {
        this.components = components;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Boolean getRitual() {
        return ritual;
    }

    public void setRitual(Boolean ritual) {
        this.ritual = ritual;
    }

    public Boolean getConcentration() {
        return concentration;
    }

    public void setConcentration(Boolean concentration) {
        this.concentration = concentration;
    }

    public String getCastingTime() {
        return casting_time;
    }

    public void setCastingTime(String casting_time) {
        this.casting_time = casting_time;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public String getAttackType() {
        return attack_type;
    }

    public void setAttackType(String attack_type) {
        this.attack_type = attack_type;
    }

    public Object getDamage() {
        return damage;
    }

    public void setDamage(Object damage) {
        this.damage = damage;
    }

    public Object getSchool() {
        return school;
    }

    public void setScool(Object school) {
        this.school = school;
    }

    public Object[] getClasses() {
        return classes;
    }

    public void setClasses(Object[] classes) {
        this.classes = classes;
    }

}