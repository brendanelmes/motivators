package com.bobosun.motivators.model;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class Greeting {
    @NonNull private String greeting;
}
