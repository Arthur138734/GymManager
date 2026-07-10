package com.gymmanager.service;

import com.gymmanager.model.Aluno;
import com.gymmanager.repository.AlunoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlunoService {

    private final AlunoRepository repository;

    public AlunoService(AlunoRepository repository) {
        this.repository = repository;
    }

    public List<Aluno> listarTodos() {
        return repository.findAll();
    }

    public Aluno salvar(Aluno aluno) {
        return repository.save(aluno);
    }

    public Aluno buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void excluir(Long id) {
        repository.deleteById(id);
    }

    public Aluno atualizar(Long id, Aluno alunoAtualizado) {

        Aluno aluno = repository.findById(id).orElse(null);

        if (aluno == null) {
            return null;
        }

        aluno.setNome(alunoAtualizado.getNome());
        aluno.setCpf(alunoAtualizado.getCpf());
        aluno.setTelefone(alunoAtualizado.getTelefone());
        aluno.setEmail(alunoAtualizado.getEmail());
        aluno.setPeso(alunoAtualizado.getPeso());
        aluno.setAltura(alunoAtualizado.getAltura());
        aluno.setObjetivo(alunoAtualizado.getObjetivo());
        aluno.setStatus(alunoAtualizado.getStatus());

        return repository.save(aluno);
    }
}