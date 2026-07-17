package com.gymmanager.controller;

import com.gymmanager.model.Exercicio;
import com.gymmanager.service.ExercicioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exercicios")
@CrossOrigin(origins = "*")
public class ExercicioController {

    private final ExercicioService service;

    public ExercicioController(ExercicioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Exercicio> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public Exercicio buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    public Exercicio salvar(@RequestBody Exercicio exercicio) {
        return service.salvar(exercicio);
    }

    @PutMapping("/{id}")
    public Exercicio atualizar(@PathVariable Long id,
                               @RequestBody Exercicio exercicio) {
        return service.atualizar(id, exercicio);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        service.excluir(id);
    }

    @GetMapping("/pesquisar")
}