package com.gymmanager.repository;

import com.gymmanager.model.Pagamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PagamentoRepository extends JpaRepository<Pagamento, Long> {
List<Pagamento> findByAlunoNomeContainingIgnoreCase(String nome);
}