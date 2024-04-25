import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
//får feileldingen og får ikke endre det i pom.xml heller , blir feil da
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.beans.BeanProperty;
import java.util.List;
@Repository
public class KundeRepository {
    @Autowired
    private jdbc.Template db;

    public void SaveAllKunder(Kunde,kunde1){
        String sql = "INSERT INTO Kunde(filmer,antall,fornavn,etternavn,telefon,
        epost) VALUES (?,?,?,?,?,?)";
         db.update(sql,kunde1.getFilmer(), kunde1.getAntall(),kunde1.getFornavn,
                 kunde1.getEtternavn, kunde1.getTelefon, kunde1.getEpost());

    }
    public List<Kunde> HentAllkunder(){
        String sql = "SELECT * FROM Kunde ORDER BY etternavn";
        List <kunde>allKunder = db.query(sql,new BeanPropertyRowMapper(kunde.class));
    }

    public void slettAlleKunder(){
        String sql = "DELETE FROM kunde";
        db.update(sql);
    }
}
