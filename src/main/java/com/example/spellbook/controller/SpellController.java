package com.example.spellbook.controller;

import java.util.Optional;

import com.example.spellbook.model.Spell;
import com.example.spellbook.repositories.SpellRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PutMapping(value="/spells/{id}")
    public Spell update(@PathVariable String id, @RequestBody Spell spell) {
        Optional<Spell> optspell = spellRepository.findById(id);
        Spell s = optspell.get();
        if (spell.getName() != null)
            s.setName(spell.getName());
        spellRepository.save(s);
        return s;
    }

    @DeleteMapping(value="/spells/{id}")
    public String delete(@PathVariable String id) {
        Optional<Spell> optspell = spellRepository.findById(id);
        Spell spell = optspell.get();
        spellRepository.delete(spell);

        return "";
    }

}
