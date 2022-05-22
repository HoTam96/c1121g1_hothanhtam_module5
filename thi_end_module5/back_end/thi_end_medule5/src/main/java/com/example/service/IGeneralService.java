package com.example.service;

import javax.crypto.spec.OAEPParameterSpec;
import java.util.Optional;

public interface IGeneralService<T> {
    Iterable<T> findAll();

    Optional<T> findById(Integer id);

    T save(T t);

    void delete(Integer id);

}
