package com.bobosun.motivators.repository;

import org.springframework.cloud.gcp.data.datastore.repository.DatastoreRepository;
import org.springframework.stereotype.Repository;

import com.bobosun.motivators.model.Team;

@Repository
public interface TeamRepository extends DatastoreRepository<Team, Long>{
    Team findByName(String name);
}
