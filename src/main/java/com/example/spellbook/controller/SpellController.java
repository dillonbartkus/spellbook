package com.example.spellbook.controller;

import java.util.Optional;

import com.example.spellbook.model.Spell;
import com.example.spellbook.repositories.SpellRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpellController {
    
    @Autowired
    SpellRepository spellRepository;

    @GetMapping(value="/spells")
    public Iterable<Spell> spell() {
        return spellRepository.findAll();
    }

    @PostMapping(value="/spells")
    public Spell save(@RequestBody Spell spell) {
        spellRepository.save(spell);

        return spell;
    }

    @GetMapping(value="/spells/{id}")
    public Optional<Spell> show(@PathVariable String id) {
        return spellRepository.findById(id);
    }

}
