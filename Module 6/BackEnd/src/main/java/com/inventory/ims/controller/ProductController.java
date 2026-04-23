package com.inventory.ims.controller;

import com.inventory.ims.model.Product;
import com.inventory.ims.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*") // allow React
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAllProducts() {
	    return service.getAllProducts();
    }

    @GetMapping("/low-stock")
    public List<Product> getLowStock() {
	    return service.getLowStock();
    }

    @PostMapping
    public Product add(@RequestBody Product p) {
        return service.add(p);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product p) {
        return service.update(id, p);
    }
}