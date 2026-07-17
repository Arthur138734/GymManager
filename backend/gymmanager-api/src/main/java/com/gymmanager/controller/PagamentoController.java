package com.gymmanager.controller;

import com.gymmanager.model.Pagamento;
import com.gymmanager.service.PagamentoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pagamentos")
@CrossOrigin(origins = "*")
public class PagamentoController {

    private final PagamentoService service;

        public PagamentoController(PagamentoService service) {
                this.service = service;
                    }

                        @GetMapping
                            public List<Pagamento> listarTodos() {
                                    return service.listarTodos();
                                        }

                                            @GetMapping("/{id}")
                                                public Pagamento buscarPorId(@PathVariable Long id) {
                                                        return service.buscarPorId(id);
                                                            }

                                                                @PostMapping
                                                                    public Pagamento salvar(@RequestBody Pagamento pagamento) {
                                                                            return service.salvar(pagamento);
                                                                                }

                                                                                    @PutMapping("/{id}")
                                                                                        public Pagamento atualizar(@PathVariable Long id,
                                                                                                                       @RequestBody Pagamento pagamento) {

                                                                                                                               return service.atualizar(id, pagamento);
                                                                                                                                   }

                                                                                                                                       @DeleteMapping("/{id}")
                                                                                                                                           public void excluir(@PathVariable Long id) {
                                                                                                                                                   service.excluir(id);
                                                                                                                                                       }

                                                        @GetMapping("/pesquisar")
                                                        public List<Pagamento> pesquisar(@RequestParam String nome) {
                                                            return service.pesquisar(nome);
                                                            }

                                                                                                                                                       }