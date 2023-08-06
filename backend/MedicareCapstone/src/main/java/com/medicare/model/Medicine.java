package com.medicare.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class Medicine {
	
	

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name="id")
		private Long id;
		@Column(name="enable")
		boolean enable;
		
		public boolean isEnable() {
			return enable;
		}
		public void setEnable(boolean enable) {
			this.enable = enable;
		}
		public Medicine() {
			super();
			// TODO Auto-generated constructor stub
		}
		private String name;
		
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="category_id", referencedColumnName ="id" )
		private Category category;
		
		private double price;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Category getCategory() {
			return category;
		}
		public void setCategory(Category category) {
			this.category = category;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getImageName() {
			return imageName;
		}
		public void setImageName(String imageName) {
			this.imageName = imageName;
		}
		private String description;
		private String imageName;
		@Override
		public String toString() {
			return "Product [id=" + id + ", name=" + name + ", category=" + category + ", price=" + price + 
					 ", description=" + description + ", imageName=" + imageName + "]";
		}
}
