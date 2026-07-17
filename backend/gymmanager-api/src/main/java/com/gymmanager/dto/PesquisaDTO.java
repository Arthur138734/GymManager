package com.gymmanager.dto;

import com.gymmanager.model.*;

import java.util.List;

public class PesquisaDTO {

    private List<Aluno> alunos;
        private List<Professor> professores;
            private List<Treino> treinos;
                private List<Exercicio> exercicios;
                    private List<Pagamento> pagamentos;
                        private List<Agendamento> agendamentos;

                            public PesquisaDTO() {
                                }

                                    public List<Aluno> getAlunos() {
                                            return alunos;
                                                }

                                                    public void setAlunos(List<Aluno> alunos) {
                                                            this.alunos = alunos;
                                                                }

                                                                    public List<Professor> getProfessores() {
                                                                            return professores;
                                                                                }

                                                                                    public void setProfessores(List<Professor> professores) {
                                                                                            this.professores = professores;
                                                                                                }

                                                                                                    public List<Treino> getTreinos() {
                                                                                                            return treinos;
                                                                                                                }

                                                                                                                    public void setTreinos(List<Treino> treinos) {
                                                                                                                            this.treinos = treinos;
                                                                                                                                }

                                                                                                                                    public List<Exercicio> getExercicios() {
                                                                                                                                            return exercicios;
                                                                                                                                                }

                                                                                                                                                    public void setExercicios(List<Exercicio> exercicios) {
                                                                                                                                                            this.exercicios = exercicios;
                                                                                                                                                                }

                                                                                                                                                                    public List<Pagamento> getPagamentos() {
                                                                                                                                                                            return pagamentos;
                                                                                                                                                                                }

                                                                                                                                                                                    public void setPagamentos(List<Pagamento> pagamentos) {
                                                                                                                                                                                            this.pagamentos = pagamentos;
                                                                                                                                                                                                }

                                                                                                                                                                                                    public List<Agendamento> getAgendamentos() {
                                                                                                                                                                                                            return agendamentos;
                                                                                                                                                                                                                }

                                                                                                                                                                                                                    public void setAgendamentos(List<Agendamento> agendamentos) {
                                                                                                                                                                                                                            this.agendamentos = agendamentos;
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                }