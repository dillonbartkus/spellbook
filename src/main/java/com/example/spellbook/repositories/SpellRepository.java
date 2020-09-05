package com.example.spellbook.repositories;

import com.example.spellbook.model.Spell;
import org.springframework.data.repository.CrudRepository;

public interface SpellRepository extends CrudRepository<Spell, String> {
    @Override
    void delete(Spell deleted);
}