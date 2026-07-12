package com.gymmanager.controller;

import com.gymmanager.model.Treino;
import com.gymmanager.service.TreinoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/treinos")
@CrossOrigin(origins = "*")
public class TreinoController {

    private final TreinoService service;

        public TreinoController(TreinoService service) {
                this.service = service;
                    }

                        @GetMapping
                            public List<Treino> listarTodos() {
                                    return service.listarTodos();
                                        }

                                            @GetMapping("/{id}")
                                                public Treino buscarPorId(@PathVariable Long id) {
                                                        return service.buscarPorId(id);
                                                            }

                                                                @PostMapping
                                                                    public Treino salvar(@RequestBody Treino treino) {
                                                                            return service.salvar(treino);
                                                                                }

                                                                                    @PutMapping("/{id}")
                                                                                        public Treino atualizar(@PathVariable Long id, @RequestBody Treino treino) {
                                                                                                return service.atualizar(id, treino);
                                                                                                    }

                                                                                                        @DeleteMapping("/{id}")
                                                                                                            public void excluir(@PathVariable Long id) {
                                                                                                                    service.excluir(id);
                                                                                                                        }
                                                                                                                        }