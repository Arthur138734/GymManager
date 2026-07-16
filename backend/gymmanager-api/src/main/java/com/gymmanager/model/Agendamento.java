package com.gymmanager.model;

import jakarta.persistence.*;

@Entity
@Table(name = "agendamentos")
public class Agendamento {

    @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long id;

                private String aluno;

                    private String professor;

                        private String data;

                            private String hora;

                                private String tipo;

                                    @Column(length = 1000)
                                        private String observacao;

                                            private String status;

                                                public Agendamento() {
                                                    }

                                                        public Agendamento(Long id, String aluno, String professor, String data,
                                                                               String hora, String tipo, String observacao, String status) {
                                                                                       this.id = id;
                                                                                               this.aluno = aluno;
                                                                                                       this.professor = professor;
                                                                                                               this.data = data;
                                                                                                                       this.hora = hora;
                                                                                                                               this.tipo = tipo;
                                                                                                                                       this.observacao = observacao;
                                                                                                                                               this.status = status;
                                                                                                                                                   }

                                                                                                                                                       public Long getId() {
                                                                                                                                                               return id;
                                                                                                                                                                   }

                                                                                                                                                                       public void setId(Long id) {
                                                                                                                                                                               this.id = id;
                                                                                                                                                                                   }

                                                                                                                                                                                       public String getAluno() {
                                                                                                                                                                                               return aluno;
                                                                                                                                                                                                   }

                                                                                                                                                                                                       public void setAluno(String aluno) {
                                                                                                                                                                                                               this.aluno = aluno;
                                                                                                                                                                                                                   }

                                                                                                                                                                                                                       public String getProfessor() {
                                                                                                                                                                                                                               return professor;
                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                       public void setProfessor(String professor) {
                                                                                                                                                                                                                                               this.professor = professor;
                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                       public String getData() {
                                                                                                                                                                                                                                                               return data;
                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                       public void setData(String data) {
                                                                                                                                                                                                                                                                               this.data = data;
                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                       public String getHora() {
                                                                                                                                                                                                                                                                                               return hora;
                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                       public void setHora(String hora) {
                                                                                                                                                                                                                                                                                                               this.hora = hora;
                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                       public String getTipo() {
                                                                                                                                                                                                                                                                                                                               return tipo;
                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                       public void setTipo(String tipo) {
                                                                                                                                                                                                                                                                                                                                               this.tipo = tipo;
                                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                                       public String getObservacao() {
                                                                                                                                                                                                                                                                                                                                                               return observacao;
                                                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                                                       public void setObservacao(String observacao) {
                                                                                                                                                                                                                                                                                                                                                                               this.observacao = observacao;
                                                                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                                                                       public String getStatus() {
                                                                                                                                                                                                                                                                                                                                                                                               return status;
                                                                                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                                                                                       public void setStatus(String status) {
                                                                                                                                                                                                                                                                                                                                                                                                               this.status = status;
                                                                                                                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                                                                                                                   }