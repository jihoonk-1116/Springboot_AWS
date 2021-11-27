package com.example.demo.dto;

import java.util.List;

import com.example.demo.model.TodoEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//DTO class to create, revise and delete a todo item

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class TodoDTO {
	private String id;
	private String title;
	private boolean done;
	
	public TodoDTO(final TodoEntity entity) {
		
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.done = entity.isDone();
	}
}