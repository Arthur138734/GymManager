package com.gymmanager.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "pagamentos")
public class Pagamento {

    @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long id;

                private String aluno;

                    private Double valor;

                        private LocalDate vencimento;

                            private LocalDate dataPagamento;

                                private String formaPagamento;

                                    private String status;

                                        public Pagamento() {
                                            }

                                                public Pagamento(Long id,
                                                                     String aluno,
                                                                                          Double valor,
                                                                                                               LocalDate vencimento,
                                                                                                                                    LocalDate dataPagamento,
                                                                                                                                                         String formaPagamento,
                                                                                                                                                                              String status) {

                                                                                                                                                                                      this.id = id;
                                                                                                                                                                                              this.aluno = aluno;
                                                                                                                                                                                                      this.valor = valor;
                                                                                                                                                                                                              this.vencimento = vencimento;
                                                                                                                                                                                                                      this.dataPagamento = dataPagamento;
                                                                                                                                                                                                                              this.formaPagamento = formaPagamento;
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

                                                                                                                                                                                                                                                                                                              public Double getValor() {
                                                                                                                                                                                                                                                                                                                      return valor;
                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                              public void setValor(Double valor) {
                                                                                                                                                                                                                                                                                                                                      this.valor = valor;
                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                              public LocalDate getVencimento() {
                                                                                                                                                                                                                                                                                                                                                      return vencimento;
                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                              public void setVencimento(LocalDate vencimento) {
                                                                                                                                                                                                                                                                                                                                                                      this.vencimento = vencimento;
                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                              public LocalDate getDataPagamento() {
                                                                                                                                                                                                                                                                                                                                                                                      return dataPagamento;
                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                              public void setDataPagamento(LocalDate dataPagamento) {
                                                                                                                                                                                                                                                                                                                                                                                                      this.dataPagamento = dataPagamento;
                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                              public String getFormaPagamento() {
                                                                                                                                                                                                                                                                                                                                                                                                                      return formaPagamento;
                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                              public void setFormaPagamento(String formaPagamento) {
                                                                                                                                                                                                                                                                                                                                                                                                                                      this.formaPagamento = formaPagamento;
                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                              public String getStatus() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                      return status;
                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                                              public void setStatus(String status) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      this.status = status;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }