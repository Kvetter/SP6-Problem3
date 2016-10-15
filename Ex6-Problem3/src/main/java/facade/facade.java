/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Car;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * @author kaspe
 */
public class facade {
    
    EntityManagerFactory emf;
    
    public facade(){
        addEntityManagerFactory(Persistence.createEntityManagerFactory("Car"));
    }

    public void addEntityManagerFactory(EntityManagerFactory emf) {
        this.emf = emf;
    }
    
    public List<Car> getCars() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Car> query = em.createQuery("SELECT c FROM Car c", Car.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }
    
    
}
