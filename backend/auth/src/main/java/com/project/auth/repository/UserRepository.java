package com.project.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.auth.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> {
	UserModel findByUsername(String username);
}