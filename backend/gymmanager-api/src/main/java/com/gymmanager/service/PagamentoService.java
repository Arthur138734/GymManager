package com.gymmanager.service;

import com.gymmanager.model.Pagamento;
import com.gymmanager.repository.PagamentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagamentoService {

    private final PagamentoRepository repository;

        public PagamentoService(PagamentoRepository repository) {
                this.repository = repository;
                    }

                        // Listar todos
                            public List<Pagamento> listarTodos() {
                                    return repository.findAll();
                                        }

                                            // Buscar por ID
                                                public Pagamento buscarPorId(Long id) {
                                                        return repository.findById(id)
                                                                        .orElseThrow(() -> new RuntimeException("Pagamento não encontrado"));
                                                                            }

                                                                                // Salvar
                                                                                    public Pagamento salvar(Pagamento pagamento) {
                                                                                            return repository.save(pagamento);
                                                                                                }

                                                                                                    // Atualizar
                                                                                                        public Pagamento atualizar(Long id, Pagamento pagamento) {

                                                                                                                Pagamento existente = buscarPorId(id);

                                                                                                                        existente.setAluno(pagamento.getAluno());
                                                                                                                                existente.setValor(pagamento.getValor());
                                                                                                                                        existente.setVencimento(pagamento.getVencimento());
                                                                                                                                                existente.setDataPagamento(pagamento.getDataPagamento());
                                                                                                                                                        existente.setFormaPagamento(pagamento.getFormaPagamento());
                                                                                                                                                                existente.setStatus(pagamento.getStatus());

                                                                                                                                                                        return repository.save(existente);
                                                                                                                                                                            }

                                                                                                                                                                                // Excluir
                                                                                                                                                                                    public void excluir(Long id) {
                                                                                                                                                                                            repository.deleteById(id);
                                                                                                                                                                                                }

                                                                                                                                                                                                    // Pesquisar por aluno
                                                                                                                                                                                                        public List<Pagamento> pesquisar(String nome) {
                                                                                                                                                                                                                return repository.findByAlunoContainingIgnoreCase(nome);
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    }