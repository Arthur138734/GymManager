package com.gymmanager.service;

import com.gymmanager.model.Professor;
import com.gymmanager.repository.ProfessorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessorService {

    private final ProfessorRepository repository;

    public ProfessorService(ProfessorRepository repository) {
        this.repository = repository;
    }

    public List<Professor> listarTodos() {
        return repository.findAll();
    }

    public Professor buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Professor não encontrado"));
    }

    public Professor salvar(Professor professor) {
        return repository.save(professor);
    }

    public Professor atualizar(Long id, Professor professor) {

    Professor existente = buscarPorId(id);

    existente.setNome(professor.getNome());
    existente.setCpf(professor.getCpf());
    existente.setTelefone(professor.getTelefone());
    existente.setEmail(professor.getEmail());
    existente.setEspecialidade(professor.getEspecialidade());
    existente.setCref(professor.getCref());
    existente.setSalario(professor.getSalario());
    existente.setStatus(professor.getStatus());

    return repository.save(existente);

}

    public void excluir(Long id) {
        repository.deleteById(id);
    }
}

public List<Professor> pesquisar(String nome){

        return repository.findByNomeContainingIgnoreCase(nome);

        }
