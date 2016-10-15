/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import com.google.gson.Gson;
import entity.Car;
import java.util.List;

/**
 *
 * @author kaspe
 */
public class JSONConverter {

    private static final Gson gson = new Gson();

    public static Car getPersonFromJson(String js) {
        return gson.fromJson(js, Car.class);
    }

    public static String getJSONFromPerson(Car p) {
        return gson.toJson(p);
    }

    public static String getJSONFromPerson(List<Car> persons) {
        return gson.toJson(persons);
    }
}
