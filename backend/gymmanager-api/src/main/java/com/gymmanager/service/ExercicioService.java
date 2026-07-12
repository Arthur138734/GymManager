package com.gymmanager.service;

import com.gymmanager.model.Exercicio;
import com.gymmanager.repository.ExercicioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExercicioService {

    private final ExercicioRepository repository;

        public ExercicioService(ExercicioRepository repository) {
                this.repository = repository;
                    }

                        public List<Exercicio> listarTodos() {
                                return repository.findAll();
                                    }

                                        public Exercicio buscarPorId(Long id) {
                                                return repository.findById(id)
                                                                .orElseThrow(() -> new RuntimeException("Exercício não encontrado"));
                                                                    }

                                                                        public Exercicio salvar(Exercicio exercicio) {
                                                                                return repository.save(exercicio);
                                                                                    }

                                                                                        public Exercicio atualizar(Long id, Exercicio exercicio) {

                                                                                                Exercicio existente = buscarPorId(id);

                                                                                                        existente.setTreinoId(exercicio.getTreinoId());
                                                                                                                existente.setNome(exercicio.getNome());
                                                                                                                        existente.setSeries(exercicio.getSeries());
                                                                                                                                existente.setRepeticoes(exercicio.getRepeticoes());
                                                                                                                                        existente.setCarga(exercicio.getCarga());
                                                                                                                                                existente.setDescanso(exercicio.getDescanso());
                                                                                                                                                        existente.setObservacoes(exercicio.getObservacoes());

                                                                                                                                                                return repository.save(existente);
                                                                                                                                                                    }

                                                                                                                                                                        public void excluir(Long id) {
                                                                                                                                                                                repository.deleteById(id);
                                                                                                                                                                                    }

                                                                                                                                                                                    }