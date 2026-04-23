package com.inventory.ims.service;

import com.inventory.ims.model.Product;
import com.inventory.ims.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

	public List<Product> getAllProducts() {
		    return repo.findAll();
		}
    public List<Product> getLowStock() {
	     return repo.findAll().stream()
            .filter(p -> p.getQuantity() < p.getThreshold())
            .toList();
	}

    public Product add(Product p) {
        return repo.save(p);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Product update(Long id, Product updated) {
        Product p = repo.findById(id).orElseThrow();
        p.setName(updated.getName());
        p.setQuantity(updated.getQuantity());
        p.setThreshold(updated.getThreshold());
        return repo.save(p);
    }
}