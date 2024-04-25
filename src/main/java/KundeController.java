import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
public class KundeController {
    @Autowired
    private kundeRepository rep;

    @PostMapping("SaveAll")
    public void SaveAll(Kunde kunde1){rep.SaveAllKunder(kunde1);

}

@GetMapping("HentALL")
    public List<Kunde> hentALL(){ return rep.HentAllKunder();}

    //slette alle kunder fra databasen

 @GetMapping("SlettAlle")
 public void slettAlle(){rep.slettAlleKunder()}
}