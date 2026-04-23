package com.inventory.ims.repository;

import java.util.List;
import com.inventory.ims.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findByQuantityLessThan(int threshold);
}