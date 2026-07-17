package com.gymmanager.repository;

import com.gymmanager.model.Treino;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreinoRepository extends JpaRepository<Treino, Long> {
    List<Treino> findByNomeContainingIgnoreCase(String nome);
}