package com.gymmanager.model;

import jakarta.persistence.*;

@Entity
@Table(name = "exercicios")
public class Exercicio {

    @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long id;

                private Long treinoId;

                    private String nome;

                        private Integer series;

                            private Integer repeticoes;

                                private Double carga;

                                    private Integer descanso;

                                        private String observacoes;

                                            public Exercicio() {
                                                }

                                                    public Exercicio(Long id, Long treinoId, String nome,
                                                                         Integer series, Integer repeticoes,
                                                                                              Double carga, Integer descanso,
                                                                                                                   String observacoes) {

                                                                                                                           this.id = id;
                                                                                                                                   this.treinoId = treinoId;
                                                                                                                                           this.nome = nome;
                                                                                                                                                   this.series = series;
                                                                                                                                                           this.repeticoes = repeticoes;
                                                                                                                                                                   this.carga = carga;
                                                                                                                                                                           this.descanso = descanso;
                                                                                                                                                                                   this.observacoes = observacoes;
                                                                                                                                                                                       }

                                                                                                                                                                                           public Long getId() {
                                                                                                                                                                                                   return id;
                                                                                                                                                                                                       }

                                                                                                                                                                                                           public void setId(Long id) {
                                                                                                                                                                                                                   this.id = id;
                                                                                                                                                                                                                       }

                                                                                                                                                                                                                           public Long getTreinoId() {
                                                                                                                                                                                                                                   return treinoId;
                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                           public void setTreinoId(Long treinoId) {
                                                                                                                                                                                                                                                   this.treinoId = treinoId;
                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                           public String getNome() {
                                                                                                                                                                                                                                                                   return nome;
                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                           public void setNome(String nome) {
                                                                                                                                                                                                                                                                                   this.nome = nome;
                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                           public Integer getSeries() {
                                                                                                                                                                                                                                                                                                   return series;
                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                           public void setSeries(Integer series) {
                                                                                                                                                                                                                                                                                                                   this.series = series;
                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                           public Integer getRepeticoes() {
                                                                                                                                                                                                                                                                                                                                   return repeticoes;
                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                           public void setRepeticoes(Integer repeticoes) {
                                                                                                                                                                                                                                                                                                                                                   this.repeticoes = repeticoes;
                                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                                           public Double getCarga() {
                                                                                                                                                                                                                                                                                                                                                                   return carga;
                                                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                                                           public void setCarga(Double carga) {
                                                                                                                                                                                                                                                                                                                                                                                   this.carga = carga;
                                                                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                                                                           public Integer getDescanso() {
                                                                                                                                                                                                                                                                                                                                                                                                   return descanso;
                                                                                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                                                                                           public void setDescanso(Integer descanso) {
                                                                                                                                                                                                                                                                                                                                                                                                                   this.descanso = descanso;
                                                                                                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                                                                                                           public String getObservacoes() {
                                                                                                                                                                                                                                                                                                                                                                                                                                   return observacoes;
                                                                                                                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                                                                                                                           public void setObservacoes(String observacoes) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                   this.observacoes = observacoes;
                                                                                                                                                                                                                                                                                                                                                                                                                                                       }

                                                                                                                                                                                                                                                                                                                                                                                                                                                       }