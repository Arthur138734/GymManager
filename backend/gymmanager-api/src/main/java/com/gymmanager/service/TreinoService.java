package com.gymmanager.service;

import com.gymmanager.model.Treino;
import com.gymmanager.repository.TreinoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreinoService {

    private final TreinoRepository repository;

    public TreinoService(TreinoRepository repository) {
        this.repository = repository;
    }

    // Listar todos
    public List<Treino> listarTodos() {
        return repository.findAll();
    }

    // Buscar por ID
    public Treino buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Treino não encontrado"));
    }

    // Salvar
    public Treino salvar(Treino treino) {
        return repository.save(treino);
    }

    // Atualizar
    public Treino atualizar(Long id, Treino treino) {

        Treino existente = buscarPorId(id);

        existente.setNome(treino.getNome());
        existente.setAluno(treino.getAluno());
        existente.setProfessor(treino.getProfessor());
        existente.setObjetivo(treino.getObjetivo());
        existente.setObservacoes(treino.getObservacoes());
        existente.setStatus(treino.getStatus());

        return repository.save(existente);
    }

    // Excluir
    public void excluir(Long id) {
        repository.deleteById(id);
    }

    // Pesquisar
    public List<Treino> pesquisar(String nome) {
        return repository.findByNomeContainingIgnoreCase(nome);
    }
}