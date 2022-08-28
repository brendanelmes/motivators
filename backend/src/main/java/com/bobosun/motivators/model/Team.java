package com.bobosun.motivators.model;

import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.cloud.gcp.data.datastore.core.mapping.Field;
import org.springframework.data.annotation.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "teams")
@Data
@NoArgsConstructor
public class Team {
    @Id @Field(name = "team_id") Long id;
    private String name;
    private String ranking;
}
