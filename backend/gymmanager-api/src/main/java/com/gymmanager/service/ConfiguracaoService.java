package com.gymmanager.service;

import com.gymmanager.model.Configuracao;
import com.gymmanager.repository.ConfiguracaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConfiguracaoService {

    private final ConfiguracaoRepository repository;

        public ConfiguracaoService(ConfiguracaoRepository repository) {
                this.repository = repository;
                    }

                        public List<Configuracao> listarTodos() {
                                return repository.findAll();
                                    }

                                        public Configuracao buscarPorId(Long id) {
                                                return repository.findById(id)
                                                                .orElseThrow(() -> new RuntimeException("Configuração não encontrada."));
                                                                    }

                                                                        public Configuracao salvar(Configuracao configuracao) {
                                                                                return repository.save(configuracao);
                                                                                    }

                                                                                        public Configuracao atualizar(Long id, Configuracao configuracao) {

                                                                                                Configuracao existente = buscarPorId(id);

                                                                                                        existente.setNomeAcademia(configuracao.getNomeAcademia());
                                                                                                                existente.setCnpj(configuracao.getCnpj());
                                                                                                                        existente.setTelefone(configuracao.getTelefone());
                                                                                                                                existente.setEmail(configuracao.getEmail());
                                                                                                                                        existente.setEndereco(configuracao.getEndereco());
                                                                                                                                                existente.setSite(configuracao.getSite());
                                                                                                                                                        existente.setHorarioFuncionamento(configuracao.getHorarioFuncionamento());
                                                                                                                                                                existente.setLogo(configuracao.getLogo());

                                                                                                                                                                        return repository.save(existente);
                                                                                                                                                                            }

                                                                                                                                                                                public void excluir(Long id) {
                                                                                                                                                                                        repository.deleteById(id);
                                                                                                                                                                                            }

                                                                                                                                                                                            }