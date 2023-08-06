package com.medicare.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicare.model.Category;


public interface CategoryRepository extends JpaRepository<Category, Integer> {
    Optional<Category> findByName(String name);

}
