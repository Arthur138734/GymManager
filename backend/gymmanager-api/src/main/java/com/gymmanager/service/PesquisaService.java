package com.gymmanager.service;

import com.gymmanager.dto.PesquisaDTO;
import com.gymmanager.repository.*;
import org.springframework.stereotype.Service;

@Service
public class PesquisaService {

    private final AlunoRepository alunoRepository;
        private final ProfessorRepository professorRepository;
            private final TreinoRepository treinoRepository;
                private final ExercicioRepository exercicioRepository;
                    private final PagamentoRepository pagamentoRepository;
                        private final AgendamentoRepository agendamentoRepository;

                            public PesquisaService(
                                        AlunoRepository alunoRepository,
                                                    ProfessorRepository professorRepository,
                                                                TreinoRepository treinoRepository,
                                                                            ExercicioRepository exercicioRepository,
                                                                                        PagamentoRepository pagamentoRepository,
                                                                                                    AgendamentoRepository agendamentoRepository) {

                                                                                                            this.alunoRepository = alunoRepository;
                                                                                                                    this.professorRepository = professorRepository;
                                                                                                                            this.treinoRepository = treinoRepository;
                                                                                                                                    this.exercicioRepository = exercicioRepository;
                                                                                                                                            this.pagamentoRepository = pagamentoRepository;
                                                                                                                                                    this.agendamentoRepository = agendamentoRepository;
                                                                                                                                                        }

                                                                                                                                                            public PesquisaDTO pesquisar(String texto) {

                                                                                                                                                                    PesquisaDTO dto = new PesquisaDTO();

                                                                                                                                                                            dto.setAlunos(
                                                                                                                                                                                            alunoRepository.findByNomeContainingIgnoreCase(texto)
                                                                                                                                                                                                    );

                                                                                                                                                                                                            dto.setProfessores(
                                                                                                                                                                                                                            professorRepository.findByNomeContainingIgnoreCase(texto)
                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                            dto.setTreinos(
                                                                                                                                                                                                                                                            treinoRepository.findByNomeContainingIgnoreCase(texto)
                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                            dto.setExercicios(
                                                                                                                                                                                                                                                                                            exercicioRepository.findByNomeContainingIgnoreCase(texto)
                                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                                            dto.setPagamentos(
                                                                                                                                                                                                                                                                                                                            pagamentoRepository.findByAlunoNomeContainingIgnoreCase(texto)
                                                                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                                                                            dto.setAgendamentos(
                                                                                                                                                                                                                                                                                                                                                            agendamentoRepository.findByAlunoNomeContainingIgnoreCase(texto)
                                                                                                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                                                                                                            return dto;

                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                }