
package com.medicare.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.medicare.repository.CartRepository;
import com.medicare.repository.CategoryRepository;
import com.medicare.repository.MedicineRepository;
import com.medicare.repository.UserRepository;
import com.medicare.model.User;
import com.medicare.model.Cart;
import com.medicare.model.Category;
import com.medicare.model.Medicine;
import com.medicare.model.ResetPwd;


@RestController
public class AdminController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	MedicineRepository medicineRepository;
	@Autowired
	CartRepository cartRepository;
	@GetMapping("/hi") 
	public String sayHello() {
		return "hello";
	}
	@PostMapping("/userLogin")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User  user)
	{
		Optional<User> u= userRepository.findByUsername(user.getUsername());
		if(u.isPresent()) {
			boolean isCorrect= u.get().getPassword().equals(user.getPassword());
			if(isCorrect) {
				return u.get();
			}			
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}
	@PostMapping("/resetpwd")
	@CrossOrigin(origins = "http://localhost:4200")
	public void changePassword(@RequestBody ResetPwd resetPwd) {
		Optional<User> u= userRepository.findByUsername("admin");
		if(u.isPresent()) {
			if(u.get().getPassword().equals(resetPwd.getOldPassword())) {
				u.get().setPassword(resetPwd.getNewPassword());
				userRepository.save(u.get());
				return;
			}
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping("/users")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> createUser(@RequestBody User  user)
	{
		User u= new User();
		u.setUsername(user.getUsername());
		u.setEmail(user.getEmail());
		u.setPassword(user.getPassword());
		u.setRole("standard");
		userRepository.save(u);
		return null; 
	}
	@GetMapping("/medicine")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Medicine> getMedicines()
	{
		return medicineRepository.findAll() ;
	}
	@GetMapping("/medicine/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  Optional<Medicine> findMedicine(@PathVariable int id)
	{
	 return	medicineRepository.findById(id);
	}
	@PatchMapping("/medicine/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void updateMedicine(@PathVariable int id,@RequestBody Medicine medicine)
	{
		Optional<Medicine> m=medicineRepository.findById(id);
		if(m.isPresent()) {
			m.get().setName(medicine.getName());
			m.get().setDescription(medicine.getDescription());
			m.get().setPrice(medicine.getPrice());
			m.get().setEnable(medicine.isEnable());
			Category c=new Category();
			c.setId(medicine.getCategory().getId());
			m.get().setCategory(c);
			medicineRepository.save(m.get());
		}
	}
	@PostMapping("/medicine")
	@CrossOrigin(origins = "http://localhost:4200")
	public void  saveMedicine(@RequestBody Medicine medicine)
	{
		Medicine m= new Medicine();
		m.setName(medicine.getName());
		m.setDescription(medicine.getDescription());
		m.setPrice(medicine.getPrice());
		m.setEnable(medicine.isEnable());
		Category c=new Category();
		c.setId(medicine.getCategory().getId());
		m.setCategory(c);
		medicineRepository.save(m);
		
	}
	@DeleteMapping("/medicine/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteMedicine(@PathVariable int id)
	{
		medicineRepository.deleteById(id);
	}
	@GetMapping("/category")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Category> getCategories()
	{
		return categoryRepository.findAll() ;
	}
	@PostMapping("/category")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Category> saveCategory(@RequestBody Category category)
	{
		Category c= new Category();
		c.setName(category.getName());
		categoryRepository.save(c);
		return null; 
	}
	@DeleteMapping("/category/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteCategory(@PathVariable int id)
	{
		categoryRepository.deleteById(id);
	}
	@GetMapping("/cart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Cart> getAllCartItems(@PathVariable int id) {
		List <Cart> cartItems= cartRepository.findAllByUser_Id(id);
		return cartItems;
	}
	@PostMapping("/addToCart/{userId}/{medicineId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addCartItem(@PathVariable int userId,@PathVariable int medicineId) {
		
		Optional<User> u= userRepository.findById(userId);
		Optional<Medicine> m= medicineRepository.findById(medicineId);
		if(u.isPresent()&& m.isPresent()) {
			Cart c= new Cart();
			c.setUser(u.get());
			c.setMedicine(m.get());
			cartRepository.save(c);	
		}

	}
	@DeleteMapping("/cart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteCartItem(@PathVariable int id)
	{
		cartRepository.deleteById(id);
	}
	@GetMapping("/emptyCart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void  emptyCartItems(@PathVariable int id) {
		List <Cart> cartItems= cartRepository.findAllByUser_Id(id);
		for(Cart item:cartItems) {
			cartRepository.deleteById(item.getId());
		}
	}
}
