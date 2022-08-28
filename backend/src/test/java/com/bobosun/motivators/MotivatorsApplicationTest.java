package com.bobosun.motivators;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.bobosun.motivators.model.Team;
import com.bobosun.motivators.repository.TeamRepository;
import com.google.api.gax.core.CredentialsProvider;
import com.google.api.gax.core.NoCredentialsProvider;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@ActiveProfiles("test")
@AutoConfigureMockMvc
public class MotivatorsApplicationTest {

    @TestConfiguration
    static class EmulatorConfiguration {
        @Bean
        CredentialsProvider googleCredentials() {
            return NoCredentialsProvider.create();
        }
    }

    @Autowired TeamRepository teamRepository;
    @Autowired private MockMvc mockMvc;

    @Test
    public void motivatorsApplicationTest() throws Exception {
        Team team = new Team();
        team.setName("kraken");
        team.setRanking("100");
        Team saved = teamRepository.save(team);
        assertNotNull(saved.getId());

        mockMvc.perform(get("/teams/search/findByName?name=kraken"))
        .andDo(print())
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.name").value("kraken"));

        Team retrieved = teamRepository.findById(saved.getId()).get();
        assertEquals("kraken", retrieved.getName());

        teamRepository.delete(retrieved);
        assertFalse(teamRepository.existsById(saved.getId()));
    }
}
