package com.gymmanager.service;

import com.gymmanager.model.Agendamento;
import com.gymmanager.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgendamentoService {

    @Autowired
    private AgendamentoRepository repository;

    // Listar todos
    public List<Agendamento> listarTodos() {
        return repository.findAll();
    }

    // Buscar por ID
    public Optional<Agendamento> buscarPorId(Long id) {
        return repository.findById(id);
    }

    // Salvar
    public Agendamento salvar(Agendamento agendamento) {
        return repository.save(agendamento);
    }

    // Atualizar
    public Agendamento atualizar(Long id, Agendamento agendamento) {

        Agendamento existente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agendamento não encontrado."));

        existente.setAluno(agendamento.getAluno());
        existente.setProfessor(agendamento.getProfessor());
        existente.setData(agendamento.getData());
        existente.setHora(agendamento.getHora());
        existente.setTipo(agendamento.getTipo());
        existente.setObservacao(agendamento.getObservacao());
        existente.setStatus(agendamento.getStatus());

        return repository.save(existente);
    }

    // Excluir
    public void excluir(Long id) {
        repository.deleteById(id);
    }

    // Pesquisar por aluno
    public List<Agendamento> pesquisar(String nome) {
        return repository.findByAlunoContainingIgnoreCase(nome);
    }
}